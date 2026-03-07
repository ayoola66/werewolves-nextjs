# Werewolves Village — Bug + Fix Log

A running record of all issues discovered during playtests, their root causes, fixes, and lessons learned.

---

## Issue 1: Night 1 always skipped (critical)

**Symptom:** The game would skip directly from role reveal to day phase, bypassing Night 1 entirely.

**Root cause:** Race condition — all N clients simultaneously receive the Realtime event that `role_reveal` ended. All N clients simultaneously call `process-night`. The first call transitions to `night` and sets `phase_end_time = now + 120s`. Subsequent calls immediately process night→day because the phase is now `night` and their timer check runs before the DB has time to reflect the new `phase_end_time`.

**File changed:** `supabase/functions/process-night/index.ts` (lines 84–92)

**Fix:** Added a `phaseEndTime` guard that rejects processing if the night timer hasn't expired yet. Before the atomic lock, check `if (game.phase_end_time && new Date(game.phase_end_time) > new Date()) return early`. This means the first caller sets the night timer; all subsequent callers (within the same timer window) get a 200 "timer still running" response and do nothing.

**Lesson:** Supabase Realtime delivers events to ALL subscribers simultaneously. For phase transitions, server-side timer guards are essential. Never rely on client-side timing alone. Pair atomic DB locks (UPDATE WHERE phase='night') with server-side timestamp guards.

---

## Issue 2: Lightning kills everyone at game start

**Symptom:** The `lightning-strike` edge function, when called during the first night, would kill all players or cause unexpected eliminations.

**Root cause:** The edge function did not properly validate the night count or verify that the game was in an active night phase before applying kills. It also had a bug where the target lookup could affect multiple rows.

**File changed:** `supabase/functions/lightning-strike/index.ts`

**Fix:** Added phase validation (must be `night`), single-target constraint, and status check (`game.status = 'playing'`).

**Lesson:** Edge functions that modify game state must validate phase, status, and that the game is in a coherent state before applying effects. Defensive programming saves games.

---

## Issue 3: Dead players could send chat messages

**Symptom:** Eliminated players could continue sending messages in the player chat channel.

**Root cause:** The `send-chat` edge function didn't check `player.is_alive` before inserting messages.

**File changed:** `supabase/functions/send-chat/index.ts`

**Fix:** Added `is_alive` check — dead players receive a 403 "Dead players cannot send messages."

**Lesson:** Always re-validate player state server-side. Client-side UI disabling is not a security or consistency guarantee.

---

## Issue 4: Host-only "Start Voting Now" button

**Symptom:** During day phase, only the host could start voting. Other alive players had no way to trigger the vote if the host left or was unresponsive.

**Root cause:** `GameScreen.tsx` had `gameState.getCurrentPlayer()?.isHost &&` wrapping the vote button render. The edge function never had a host-only check.

**File changed:** `client/src/components/werewolf/GameScreen.tsx`

**Fix (Round 3):** Removed the `isHost` guard entirely. Any alive player can now click "Vote Now" during day phase. Renamed button from "Start Voting Now" to "Vote Now" for clarity. The edge function already allowed any alive player, so no server change was needed.

**Lesson:** Design game controls so the game can progress even if the host disconnects. Privilege gates on non-sensitive actions create fragile games.

---

## Issue 5: Seer investigation results visible to all players

**Symptom:** When the Seer investigated a player, the result toast appeared for all players, not just the Seer.

**Root cause:** The `process-night` function returned `investigationResult` in its response, and all clients calling the function would display the result.

**File changed:** `supabase/functions/process-night/index.ts`, `client/src/hooks/useGameState.ts`

**Fix:** Only show the seer toast if `currentPlayer?.role === 'seer'`, checked client-side after receiving the response. The data was already scoped to the calling client.

**Lesson:** Role-specific feedback must be filtered client-side even when the server returns it. Server responses go to the calling client only, but if multiple clients call the same function, each must check whether the result is relevant to them.

---

## Issue 6: Roles revealed to all players during game

**Symptom:** During the game, all player roles were visible to everyone in the PlayerSidebar.

**Root cause:** The `fetchGameState` function mapped all players and included their `role` field without filtering for the current player.

**File changed:** `client/src/hooks/useGameState.ts`

**Fix:** Roles are only included when `p.player_id === playerId` (the current player) OR when `current_phase === 'game_over'` (post-game reveal is intentional).

**Lesson:** Role privacy is critical to game integrity. Any server-side fetch of all players must redact role information for non-current players. Only expose what the current client should see.

---

## Issue 7: Game state not restoring after page refresh

**Symptom:** Refreshing the page during a game would send the player back to the home screen instead of rejoining their game.

**Root cause:** Session data (playerId, gameCode, playerName) was stored in `localStorage` which persists across tabs. This caused conflicts when the same player opened multiple tabs.

**File changed:** `client/src/hooks/useGameState.ts`

**Fix:** Switched from `localStorage` to `sessionStorage` for tab isolation. Added session restore logic in a mount `useEffect` that reads `werewolves_session` and calls `fetchGameState` + routes to the correct screen.

**Lesson:** For real-time multiplayer games, use `sessionStorage` for session data to prevent cross-tab interference. Always implement session restore for mid-game refreshes.

---

## Issue 8: Voting results → night transition broken

**Symptom:** After voting results were shown, the game would not advance to the next night phase.

**Root cause:** No client-side or server-side handler was transitioning from `voting_results` → `night`. The phase timer expired with no action.

**File changed:** `client/src/hooks/useGameState.ts`, new `supabase/functions/transition-to-night/index.ts`

**Fix:** Added `voting_results` to the phase timer check in `useGameState.ts` that calls the `transition-to-night` edge function when the timer expires.

**Lesson:** Every phase transition must have an explicit handler. Audit all phases and map out every `A → B` edge before shipping. Missing edges leave the game in a terminal state.

---

## Issue 9: Grand Wizard action toggle broken

**Symptom:** The Grand Wizard couldn't select targets — clicking a player would not register or would deselect immediately.

**Root cause:** The action state was being reset on every render rather than being preserved until explicitly cleared.

**File changed:** `client/src/components/werewolf/NightActionInterface.tsx`

**Fix:** Added stable state management for the selected target, preventing unnecessary resets during re-renders.

**Lesson:** Stateful UI components in React need careful dependency management. Avoid putting mutable state in useEffect dependency arrays when the intent is to persist across renders.

---

## Issue 10: Hasty host-only vote button (partial fix in Round 2)

**Symptom:** "Start Voting Now" was only visible to the host. Non-host players couldn't trigger a vote even during legitimate discussion.

**Root cause:** Overly conservative initial implementation added `isHost` guard.

**Root fix (Round 3):** See Issue 4 — fully removed in Round 3.

---

## Issue 11: CONNECTING screen after game ends

**Symptom:** After a game ended, 1–2 players would stay stuck on the game screen showing "CONNECTING" with the old phase timer still counting down (e.g., Ayo at 0:59, Loppy at 1:00).

**Root cause:** These players' Realtime subscriptions missed the `game_over` event. The polling fallback only ran during `currentScreen === 'lobby'`, so once in the game screen there was no recovery mechanism.

**File changed:** `client/src/hooks/useGameState.ts`

**Fix:** Added a second polling `useEffect` that runs when `currentScreen === 'game'`. Every 3 seconds it calls `fetchGameState` via `fetchGameStateRef.current`, which already contains logic to call `setShowGameOverOverlay(true)` when `game.current_phase === 'game_over'`. This catches any missed Realtime event and also keeps game state fresh during play.

**Lesson:** Realtime subscriptions are best-effort. For state that's critical to user experience (game ending), always have a polling fallback. The fallback should call the full `fetchGameState` function, not a bare DB select, so all derived state is properly updated.

---

## Issue 12: Timer desync on page refresh

**Symptom:** A player who refreshed the page mid-phase would see the full original phase duration (e.g., 2:00) instead of the actual remaining time.

**Root cause:** `fetchGameState` set `game.phaseTimer` from `game.phase_timer` (the static original duration stored in the DB, e.g., 120). While `GameScreen.tsx` correctly uses `phaseEndTime` for display when available, the `phaseTimer` fallback value was wrong.

**File changed:** `client/src/hooks/useGameState.ts`

**Fix:** In `fetchGameState`, when building the game state object, calculate `phaseTimer` from `phase_end_time` when available: `Math.max(0, Math.floor((new Date(phase_end_time) - Date.now()) / 1000))`. Falls back to `game.phase_timer` when `phase_end_time` is null.

**Lesson:** Store remaining time, not original duration. Any state that's time-dependent must be calculated relative to `Date.now()` at read time, not stored as a static value. Phase timers should always be derived from a UTC timestamp (`phase_end_time`) not a countdown integer.

---

## Issue 13: Mobile night action layout overlap

**Symptom:** On mobile (iPhone SE), the chat panel's send button bled into the action panel below, making "CHOOSE YOUR VICTIM" hard to interact with.

**Root cause:** On mobile (`flex-col` layout), chat panel stacked above action panel. Chat panel had `max-h-[300px]` but the inner `ScrollArea` was `h-[350px]`, exceeding the container and pushing content into the action area.

**File changed:** `client/src/components/werewolf/NightActionInterface.tsx`

**Fix:**
1. Chat panel wrapper: added `order-2 md:order-none`, reduced mobile max-height to `160px`, added `overflow-hidden`
2. Village Chat card: for werewolves `max-h-[75px]`, for non-werewolves `max-h-[140px]`, both with `md:max-h-full` to preserve desktop
3. Action panel wrapper: added `order-1 md:order-none` so it renders first on mobile

**Lesson:** Mobile-first layout planning should explicitly assign visual priority via CSS `order`. Use `overflow-hidden` on containers to prevent child elements from bleeding out. Test on actual small-screen viewports (iPhone SE = 375px), not just desktop responsive mode.

---

## Issue 14: Anonymous vote notifications missing

**Symptom:** During voting phase, when a player cast their vote, other players had no indication that voting was progressing. Players couldn't tell if others had voted or were idle.

**Root cause:** No notification mechanism existed after vote submission.

**File changed:** `supabase/functions/submit-vote/index.ts`

**Fix:** After recording the vote in the `votes` table, insert a system chat message: `🗳️ [PlayerName] has voted.` with `type: 'system'`. This broadcasts via Realtime to all players that someone voted, without revealing the vote target.

**Lesson:** Social feedback during asynchronous actions improves game feel. Players need to know the game is progressing. Anonymous voting notifications give urgency without compromising vote secrecy.

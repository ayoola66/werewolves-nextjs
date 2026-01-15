import { NextResponse } from "next/server";
import {
  createServerSupabaseClient,
  checkWinCondition,
  PHASE_TIMERS,
} from "@/lib/supabase-server";

export async function POST(request: Request) {
  try {
    const { gameCode } = await request.json();

    if (!gameCode) {
      return NextResponse.json(
        { error: "Missing required field: gameCode" },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();

    // Find game
    const { data: game, error: gameError } = await supabase
      .from("games")
      .select("*")
      .eq("game_code", gameCode.toUpperCase())
      .single();

    if (gameError || !game) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 });
    }

    if (game.current_phase !== "voting") {
      return NextResponse.json(
        { error: "Not in voting phase" },
        { status: 400 }
      );
    }

    // Get all votes
    const { data: votes } = await supabase
      .from("votes")
      .select("*")
      .eq("game_id", game.id);

    // Count votes per target
    const voteCounts: Record<string, number> = {};
    for (const vote of votes || []) {
      voteCounts[vote.target_id] = (voteCounts[vote.target_id] || 0) + 1;
    }

    // Find player with most votes
    let maxVotes = 0;
    let eliminatedPlayerId: string | null = null;
    let isTie = false;

    for (const [targetId, count] of Object.entries(voteCounts)) {
      if (count > maxVotes) {
        maxVotes = count;
        eliminatedPlayerId = targetId;
        isTie = false;
      } else if (count === maxVotes) {
        isTie = true;
      }
    }

    // If tie, no one is eliminated
    if (isTie || maxVotes === 0) {
      eliminatedPlayerId = null;
    }

    // Eliminate player if there's a clear winner
    if (eliminatedPlayerId) {
      const { data: eliminatedPlayer } = await supabase
        .from("players")
        .select("name, role")
        .eq("player_id", eliminatedPlayerId)
        .eq("game_id", game.id)
        .single();

      await supabase
        .from("players")
        .update({ is_alive: false })
        .eq("player_id", eliminatedPlayerId);

      await supabase.from("chat_messages").insert({
        game_id: game.id,
        message: `⚖️ The village has decided! ${
          eliminatedPlayer?.name || "Someone"
        } has been eliminated.`,
        type: "system",
      });
    } else {
      await supabase.from("chat_messages").insert({
        game_id: game.id,
        message: "⚖️ The vote was a tie! No one is eliminated.",
        type: "system",
      });
    }

    // Clear votes
    await supabase.from("votes").delete().eq("game_id", game.id);

    // Check win condition
    const { data: alivePlayers } = await supabase
      .from("players")
      .select("*")
      .eq("game_id", game.id)
      .eq("is_alive", true);

    const winCheck = checkWinCondition(alivePlayers || []);

    if (winCheck.gameOver) {
      await supabase
        .from("games")
        .update({
          status: "finished",
          current_phase: "game_over",
        })
        .eq("id", game.id);

      await supabase.from("chat_messages").insert({
        game_id: game.id,
        message: `🎉 Game Over! ${
          winCheck.winner === "villagers" ? "Villagers" : "Werewolves"
        } win!`,
        type: "system",
      });

      return NextResponse.json({
        success: true,
        gameOver: true,
        winner: winCheck.winner,
      });
    }

    // Transition to voting_results phase
    const phaseTimer = PHASE_TIMERS.voting_results;
    const phaseEndTime = new Date(Date.now() + phaseTimer * 1000);

    await supabase
      .from("games")
      .update({
        current_phase: "voting_results",
        phase_timer: phaseTimer,
        phase_end_time: phaseEndTime.toISOString(),
        last_phase_change: new Date().toISOString(),
      })
      .eq("id", game.id);

    return NextResponse.json({
      success: true,
      eliminated: eliminatedPlayerId,
      phase: "voting_results",
    });
  } catch (error: any) {
    console.error("Process votes error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}

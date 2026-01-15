# 🐺 Werewolves Village

*Forged in Moonlight* — A real-time multiplayer social deduction game built with Next.js and Supabase. Deceive, deduce, and survive!

**Live Demo:** [https://werewolves-village.vercel.app](https://werewolves-village.vercel.app)

## 🎮 About the Game

Werewolves Village is a classic social deduction party game where players are secretly assigned roles as either **Werewolves** or **Villagers**. The Werewolves know each other and must eliminate Villagers without being discovered. The Villagers must work together to identify and vote out the Werewolves before it's too late.

### Features

- 🌐 **Play Anywhere** - Browser-based, no downloads required
- ⚡ **Real-Time** - Instant updates with Supabase Realtime
- 🎭 **Multiple Roles** - Werewolf, Doctor, Seer, Bodyguard, Hunter, Witch, Minion, Jester, Sheriff
- 🛡️ **One-Time Shield** - Protect yourself from a single attack
- ⚡ **Lightning Strike** - Anti-AFK system keeps games moving
- 🔀 **Message Scrambling** - Werewolves coordinate secretly at night
- 👻 **Spirit Vision** - Eliminated players can see the truth
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎨 **Medieval Modern Design** - "Ember & Shadow" colour palette with chiselled typography

## 🚀 Tech Stack

- **Frontend:** Next.js 15, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** Supabase (PostgreSQL)
- **Real-Time:** Supabase Realtime
- **Hosting:** Vercel
- **UI Components:** shadcn/ui

## 🎨 Branding

Werewolves Village uses the **"Forged in Moonlight"** design system:

### Colour Palette (Ember & Shadow)
- **Deep Slate** `#1A1A1D` - Primary backgrounds
- **Iron Gray** `#3E424B` - Secondary elements, borders
- **Parchment White** `#E0D8C8` - Text colour (aged cream)
- **Ember Gold** `#FF9F1C` - Primary accent, CTAs, glowing elements
- **Blood Rust** `#8D230F` - Danger, werewolf elements

### Typography
- **Cinzel Decorative** - Headers and titles (medieval feel)
- **Montserrat** - Body text (clean, modern readability)

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayoola66/werewolves-nextjs.git
   cd werewolves-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ERROR_LOGS_PASSWORD=your_error_logs_password
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── create-game/
│   │   ├── join-game/
│   │   ├── start-game/
│   │   ├── process-night/
│   │   ├── process-votes/
│   │   └── ...
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── error-logs/        # Error logs dashboard
│   ├── faq/               # FAQ page
│   ├── history/           # History of Werewolf
│   ├── how-to-play/       # Game instructions
│   ├── privacy-policy/    # Privacy policy
│   ├── terms-of-service/  # Terms of service
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles (Ember & Shadow theme)
├── components/
│   ├── ui/                # shadcn/ui components (themed)
│   ├── werewolf/          # Game-specific components
│   │   ├── GameScreen.tsx
│   │   ├── InitialScreen.tsx
│   │   ├── Lobby.tsx
│   │   ├── Chat.tsx
│   │   ├── VotingInterface.tsx
│   │   ├── NightActionInterface.tsx
│   │   └── ...
│   ├── Footer.tsx
│   └── ErrorLogs.tsx
├── hooks/
│   ├── useGameState.ts    # Central game state management
│   └── useErrorLog.ts     # Error logging hook
└── lib/
    ├── supabase.ts        # Client-side Supabase
    ├── supabase-server.ts # Server-side Supabase
    └── gameTypes.ts       # TypeScript interfaces

public/
└── logo/                  # Brand assets
    ├── Werewolves-Village-t1-logo.png
    ├── Werewolves-Village-t1-logo-sq.png
    ├── Werewolves-Village-t1-logo-sq-nobg.png
    ├── Werewolves-Village-t5.png
    └── Werewolves-Village-t6.png
```

## 🎲 Game Phases

1. **Role Reveal** (15s) - Players discover their secret roles
2. **Night Phase** (2 min) - Werewolves hunt, special roles act
3. **Day Phase** (3 min) - Village discusses (verbally)
4. **Voting Phase** (2 min) - Players vote to eliminate a suspect
5. **Voting Results** (10s) - Results are revealed

## 🛠️ Development

### Running Tests
```bash
npm run test
```

### Building for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## 🚀 Deployment (Vercel)

The project is deployed on **Vercel** with automatic deployments from the `main` branch.

### Deployment Steps:

1. Push to GitHub (`main` branch)
2. Vercel automatically detects changes and rebuilds
3. Environment variables are configured in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ERROR_LOGS_PASSWORD`

### Production URL:
- **Live:** [https://werewolves-village.vercel.app](https://werewolves-village.vercel.app)

## 📄 Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Main game interface |
| How to Play | `/how-to-play` | Complete game instructions |
| About | `/about` | About the game |
| History | `/history` | Origins of Werewolf game |
| FAQ | `/faq` | Frequently asked questions |
| Privacy Policy | `/privacy-policy` | Privacy policy |
| Terms of Service | `/terms-of-service` | Terms of service |
| Contact | `/contact` | Contact form |
| Error Logs | `/error-logs` | Developer error dashboard (protected) |

## 🔒 Security

- Error logs page is password protected
- All API routes validate input
- Supabase RLS policies for data access
- No sensitive data in client-side code

## 📝 Licence

This project is for educational and personal use.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback, visit the [Contact page](https://werewolves-village.vercel.app/contact).

---

*Forged in Moonlight* 🌙 Made with ❤️ and 🐺

# LifeQuest - Immersive Life Growth RPG

LifeQuest is an innovative life simulation RPG where players build their future selves through meaningful choices, goals, relationships, and real-life growth. Unlike traditional games where you play a character, in LifeQuest you are building your actual future self.

## 🎮 Game Features

### Core Systems

#### 1. Life Journey System
- **Avatar Creation**: Multi-step avatar creation with name, style selection (8 styles with rarity tiers), and personality type selection (5 unique personalities)
- **Personality Types**: Visionary, Guardian, Explorer, Diplomat, Strategist - each with unique traits and stat impacts
- **Life Goals**: 6 goal categories (Career, Relationships, Knowledge, Adventure, Health, Creativity) with specific examples
- **Relationships**: Build your circle with Family, Friends, Mentors, Partners, Colleagues, and Society connections

#### 2. Daily Quest System
Three types of daily quests that refresh each day:
- **Goal Quests**: Focus on your life goals (complete delayed tasks, improve skills, make progress)
- **Mind Quests**: Mental growth challenges (control reactions, overcome fears, avoid comparison)
- **Relationship Quests**: Social growth (set boundaries, appreciate others, identify healthy relationships)

#### 3. Life Situation Engine
Immersive story scenarios with real consequences:
- **Fake Friend Challenge**: Deal with fair-weather friends
- **Society Judgment**: Handle criticism of your dreams
- **Failure Moment**: Bounce back from public failures
- **Goal Distraction**: Choose between instant gratification and long-term growth
- **Moral Dilemma**: Face ethical shortcuts
- **Relationship Conflict**: Navigate value clashes

Each choice impacts your character stats and has meaningful consequences.

#### 4. Reward System
- **Badges**: 12 unique badges (Boundary Master, Focus Warrior, Comeback Hero, etc.) with rarity tiers
- **Levels**: 50 levels from Dreamer to Transcendent
- **XP System**: Earn XP through quests and situations
- **Unlocks**: Avatar styles, world themes, features, and personality evolutions

#### 5. Life Boss Battles
Face real-life enemies:
- **Procrastination**: The shadow that whispers "later"
- **Fear of Judgment**: The voice of doubt
- **Self-Doubt**: Inner questioning of worth
- **Comparison**: The thief of joy
- **Toxic Influence**: Draining relationships
- **Perfectionism**: The impossible standard

Each boss has multiple phases, weaknesses, and strategies to overcome.

#### 6. Character Stats
Grow your personality through five core stats:
- **Focus**: Ability to concentrate and avoid distraction
- **Confidence**: Belief in yourself and your abilities
- **Discipline**: Consistency and self-control
- **Wisdom**: Learning from experience and making good decisions
- **Empathy**: Understanding and connecting with others

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 🎯 Game Flow

1. **Welcome Screen**: Introduction to LifeQuest
2. **Avatar Creation**: Create your identity (3 steps)
   - Enter your name
   - Choose avatar style
   - Select personality type
3. **Relationship Selection**: Build your circle
4. **Goal Selection**: Choose your life goal
5. **Daily Quests**: Complete 3 daily quests
6. **Life Situation**: Face a meaningful scenario
7. **Results**: View your growth and rewards
8. **Achievements**: Track badges, unlocks, and progression

## 🎨 Visual Design

LifeQuest features a premium, modern aesthetic:
- **Fantasy + Futuristic Theme**: Blends mystical elements with modern design
- **Animated Backgrounds**: Pulsing gradient effects throughout
- **Glassmorphism**: Frosted glass UI elements with backdrop blur
- **Glowing Effects**: Dynamic shadows and highlights
- **Progress Animations**: Smooth stat bar transitions
- **Mobile Responsive**: Optimized for all screen sizes

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── data/            # Game data
│   ├── personalities.ts
│   ├── goals.ts
│   ├── avatarStyles.ts
│   ├── relationships.ts
│   ├── quests.ts
│   ├── situations.ts
│   ├── badges.ts
│   ├── unlocks.ts
│   └── bosses.ts
├── pages/           # Page components
│   ├── Welcome.tsx
│   ├── AvatarCreation.tsx
│   ├── Relationships.tsx
│   ├── GoalSelection.tsx
│   ├── DailyQuests.tsx
│   ├── LifeSituation.tsx
│   ├── Result.tsx
│   └── Achievements.tsx
├── types/           # TypeScript type definitions
│   └── game.ts
├── App.tsx          # Main app component with routing
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## 🛠️ Tech Stack

- **React 18**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **React Router**: Navigation
- **TailwindCSS**: Styling
- **Lucide React**: Icons

## 🎮 Game Mechanics

### Stat System
All stats start at 5 and can grow to 50+. Each choice in life situations impacts stats positively or negatively based on the decision's nature.

### Leveling System
- Level 1: Dreamer (0 XP)
- Level 10: Builder (5,000 XP)
- Level 25: Achiever (50,000 XP)
- Level 50: Transcendent (500,000 XP)

### Badge Unlocks
Badges unlock based on:
- Stat thresholds (e.g., Wisdom 30+)
- Quest completion counts
- Achievement milestones
- Boss victories

## 🔮 Future Enhancements

- [ ] Boss battle implementation
- [ ] Multiplayer guild system
- [ ] Custom quest creation
- [ ] Personality evolution system
- [ ] World theme unlocks
- [ ] Streak system with rewards
- [ ] Achievement tracking
- [ ] Data persistence backend
- [ ] Social sharing features

## 📝 License

This project is created for educational and personal growth purposes.

## 🤝 Contributing

This is a personal project focused on self-improvement and gamified personal development. Suggestions and improvements are welcome!

## 💡 Philosophy

LifeQuest is designed to help users:
- Reflect on real-life choices
- Build meaningful habits
- Develop emotional intelligence
- Practice decision-making
- Track personal growth
- Stay motivated on their journey

The game bridges entertainment with personal development, making growth engaging and rewarding.

import { Badge } from '../types/game';

export const badges: Badge[] = [
  {
    id: 'boundary-master',
    name: 'Boundary Master',
    description: 'Successfully set healthy boundaries 10 times',
    icon: '🛡️',
    rarity: 'rare',
    progress: 0,
    required: 10
  },
  {
    id: 'focus-warrior',
    name: 'Focus Warrior',
    description: 'Complete 50 goal quests without distraction',
    icon: '🎯',
    rarity: 'epic',
    progress: 0,
    required: 50
  },
  {
    id: 'comeback-hero',
    name: 'Comeback Hero',
    description: 'Overcome 5 failure moments with growth',
    icon: '🔥',
    rarity: 'legendary',
    progress: 0,
    required: 5
  },
  {
    id: 'deep-thinker',
    name: 'Deep Thinker',
    description: 'Achieve wisdom stat of 30 or higher',
    icon: '🧠',
    rarity: 'rare',
    progress: 0,
    required: 30
  },
  {
    id: 'goal-builder',
    name: 'Goal Builder',
    description: 'Complete 100 goal quests',
    icon: '🏗️',
    rarity: 'epic',
    progress: 0,
    required: 100
  },
  {
    id: 'empathy-sage',
    name: 'Empathy Sage',
    description: 'Achieve empathy stat of 30 or higher',
    icon: '💜',
    rarity: 'rare',
    progress: 0,
    required: 30
  },
  {
    id: 'discipline-master',
    name: 'Discipline Master',
    description: 'Achieve discipline stat of 30 or higher',
    icon: '⚡',
    rarity: 'rare',
    progress: 0,
    required: 30
  },
  {
    id: 'confidence-king',
    name: 'Confidence King',
    description: 'Achieve confidence stat of 30 or higher',
    icon: '👑',
    rarity: 'rare',
    progress: 0,
    required: 30
  },
  {
    id: 'relationship-guru',
    name: 'Relationship Guru',
    description: 'Complete 75 relationship quests',
    icon: '🤝',
    rarity: 'epic',
    progress: 0,
    required: 75
  },
  {
    id: 'mind-warrior',
    name: 'Mind Warrior',
    description: 'Complete 50 mind quests',
    icon: '🧘',
    rarity: 'rare',
    progress: 0,
    required: 50
  },
  {
    id: 'streak-legend',
    name: 'Streak Legend',
    description: 'Maintain a 30-day quest completion streak',
    icon: '🔥',
    rarity: 'legendary',
    progress: 0,
    required: 30
  },
  {
    id: 'boss-slayer',
    name: 'Boss Slayer',
    description: 'Defeat 5 life boss battles',
    icon: '⚔️',
    rarity: 'legendary',
    progress: 0,
    required: 5
  }
];

export const levels = [
  { level: 1, name: 'Dreamer', xpRequired: 0 },
  { level: 2, name: 'Initiate', xpRequired: 100 },
  { level: 3, name: 'Seeker', xpRequired: 250 },
  { level: 4, name: 'Apprentice', xpRequired: 500 },
  { level: 5, name: 'Explorer', xpRequired: 1000 },
  { level: 10, name: 'Builder', xpRequired: 5000 },
  { level: 15, name: 'Achiever', xpRequired: 15000 },
  { level: 20, name: 'Master', xpRequired: 30000 },
  { level: 25, name: 'Champion', xpRequired: 50000 },
  { level: 30, name: 'Legend', xpRequired: 100000 },
  { level: 50, name: 'Transcendent', xpRequired: 500000 }
];

export function getLevelForXP(xp: number): { level: number; name: string; xpToNext: number } {
  for (let i = levels.length - 1; i >= 0; i--) {
    if (xp >= levels[i].xpRequired) {
      const nextLevel = levels[i + 1];
      return {
        level: levels[i].level,
        name: levels[i].name,
        xpToNext: nextLevel ? nextLevel.xpRequired - xp : 0
      };
    }
  }
  return { level: 1, name: 'Dreamer', xpToNext: levels[1].xpRequired - xp };
}

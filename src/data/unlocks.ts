import { Unlock } from '../types/game';

export const unlocks: Unlock[] = [
  // Avatar Style Unlocks
  {
    id: 'mystic-style',
    type: 'avatar_style',
    name: 'Mystic Avatar Style',
    description: 'Unlock the mysterious Mystic avatar style',
    unlocked: false
  },
  {
    id: 'royal-style',
    type: 'avatar_style',
    name: 'Royal Avatar Style',
    description: 'Unlock the noble Royal avatar style',
    unlocked: false
  },
  {
    id: 'cyber-style',
    type: 'avatar_style',
    name: 'Cyber Avatar Style',
    description: 'Unlock the futuristic Cyber avatar style',
    unlocked: false
  },
  {
    id: 'celestial-style',
    type: 'avatar_style',
    name: 'Celestial Avatar Style',
    description: 'Unlock the divine Celestial avatar style',
    unlocked: false
  },
  // World Unlocks
  {
    id: 'crystal-world',
    type: 'world',
    name: 'Crystal Dimension',
    description: 'Unlock the Crystal Dimension world theme',
    unlocked: false
  },
  {
    id: 'neon-world',
    type: 'world',
    name: 'Neon City',
    description: 'Unlock the Neon City world theme',
    unlocked: false
  },
  {
    id: 'nature-world',
    type: 'world',
    name: 'Sacred Grove',
    description: 'Unlock the Sacred Grove world theme',
    unlocked: false
  },
  // Feature Unlocks
  {
    id: 'boss-battles',
    type: 'feature',
    name: 'Boss Battles',
    description: 'Unlock challenging boss battles against life enemies',
    unlocked: false
  },
  {
    id: 'multiplayer',
    type: 'feature',
    name: 'Guild System',
    description: 'Join or create guilds with other players',
    unlocked: false
  },
  {
    id: 'custom-quests',
    type: 'feature',
    name: 'Custom Quests',
    description: 'Create and share your own life quests',
    unlocked: false
  },
  // Personality Evolution Unlocks
  {
    id: 'evolution-visionary-master',
    type: 'personality_evolution',
    name: 'Master Visionary',
    description: 'Evolve your Visionary personality to Master level',
    unlocked: false
  },
  {
    id: 'evolution-guardian-master',
    type: 'personality_evolution',
    name: 'Master Guardian',
    description: 'Evolve your Guardian personality to Master level',
    unlocked: false
  },
  {
    id: 'evolution-explorer-master',
    type: 'personality_evolution',
    name: 'Master Explorer',
    description: 'Evolve your Explorer personality to Master level',
    unlocked: false
  },
  {
    id: 'evolution-diplomat-master',
    type: 'personality_evolution',
    name: 'Master Diplomat',
    description: 'Evolve your Diplomat personality to Master level',
    unlocked: false
  },
  {
    id: 'evolution-strategist-master',
    type: 'personality_evolution',
    name: 'Master Strategist',
    description: 'Evolve your Strategist personality to Master level',
    unlocked: false
  }
];

export function getUnlockRequirements(unlockId: string): { level: number; badges: string[] } {
  const requirements: Record<string, { level: number; badges: string[] }> = {
    'mystic-style': { level: 5, badges: ['deep-thinker'] },
    'royal-style': { level: 10, badges: ['confidence-king'] },
    'cyber-style': { level: 15, badges: ['focus-warrior'] },
    'celestial-style': { level: 25, badges: ['boss-slayer'] },
    'crystal-world': { level: 10, badges: ['goal-builder'] },
    'neon-world': { level: 15, badges: ['mind-warrior'] },
    'nature-world': { level: 20, badges: ['empathy-sage'] },
    'boss-battles': { level: 5, badges: [] },
    'multiplayer': { level: 10, badges: ['relationship-guru'] },
    'custom-quests': { level: 20, badges: ['goal-builder', 'mind-warrior'] },
    'evolution-visionary-master': { level: 15, badges: ['deep-thinker', 'focus-warrior'] },
    'evolution-guardian-master': { level: 15, badges: ['boundary-master', 'empathy-sage'] },
    'evolution-explorer-master': { level: 15, badges: ['goal-builder', 'comeback-hero'] },
    'evolution-diplomat-master': { level: 15, badges: ['empathy-sage', 'relationship-guru'] },
    'evolution-strategist-master': { level: 15, badges: ['discipline-master', 'focus-warrior'] }
  };

  return requirements[unlockId] || { level: 1, badges: [] };
}

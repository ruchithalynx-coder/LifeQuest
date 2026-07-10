import { PersonalityType, PersonalityTrait } from '../types/game';

export const personalities: Record<PersonalityType, {
  name: string;
  description: string;
  emoji: string;
  color: string;
  traits: PersonalityTrait[];
}> = {
  visionary: {
    name: 'Visionary',
    description: 'You see possibilities where others see obstacles. Driven by big dreams and innovation.',
    emoji: '🔮',
    color: 'from-purple-500 to-indigo-600',
    traits: [
      {
        id: 'creative_thinking',
        name: 'Creative Thinking',
        description: 'Generate innovative solutions',
        impact: { wisdom: 2, focus: 1 }
      },
      {
        id: 'future_focus',
        name: 'Future Focus',
        description: 'Plan ahead with clarity',
        impact: { discipline: 2, wisdom: 1 }
      }
    ]
  },
  guardian: {
    name: 'Guardian',
    description: 'You protect what matters most. Reliable, steadfast, and deeply caring.',
    emoji: '🛡️',
    color: 'from-blue-500 to-cyan-600',
    traits: [
      {
        id: 'loyalty',
        name: 'Loyalty',
        description: 'Stand by your commitments',
        impact: { discipline: 3, empathy: 1 }
      },
      {
        id: 'protection',
        name: 'Protection',
        description: 'Shield others from harm',
        impact: { empathy: 2, confidence: 1 }
      }
    ]
  },
  explorer: {
    name: 'Explorer',
    description: 'You seek new experiences and growth. Adventurous, curious, and adaptable.',
    emoji: '🧭',
    color: 'from-green-500 to-teal-600',
    traits: [
      {
        id: 'adaptability',
        name: 'Adaptability',
        description: 'Thrive in changing situations',
        impact: { wisdom: 2, confidence: 1 }
      },
      {
        id: 'curiosity',
        name: 'Curiosity',
        description: 'Learn from every experience',
        impact: { focus: 2, wisdom: 1 }
      }
    ]
  },
  diplomat: {
    name: 'Diplomat',
    description: 'You build bridges between people. Empathetic, understanding, and harmonious.',
    emoji: '🤝',
    color: 'from-pink-500 to-rose-600',
    traits: [
      {
        id: 'empathy',
        name: 'Deep Empathy',
        description: 'Understand others deeply',
        impact: { empathy: 3, wisdom: 1 }
      },
      {
        id: 'harmony',
        name: 'Harmony',
        description: 'Create peaceful resolutions',
        impact: { wisdom: 2, confidence: 1 }
      }
    ]
  },
  strategist: {
    name: 'Strategist',
    description: 'You plan carefully and execute precisely. Analytical, focused, and determined.',
    emoji: '♟️',
    color: 'from-orange-500 to-amber-600',
    traits: [
      {
        id: 'analysis',
        name: 'Strategic Analysis',
        description: 'See patterns and plan ahead',
        impact: { wisdom: 2, focus: 2 }
      },
      {
        id: 'execution',
        name: 'Precise Execution',
        description: 'Turn plans into reality',
        impact: { discipline: 2, confidence: 1 }
      }
    ]
  }
};

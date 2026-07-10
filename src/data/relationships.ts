import { RelationshipType } from '../types/game';

export const relationshipTypes: Record<RelationshipType, {
  name: string;
  description: string;
  emoji: string;
  color: string;
  impact: string;
}> = {
  family: {
    name: 'Family',
    description: 'Your foundation and support system',
    emoji: '👨‍👩‍👧‍👦',
    color: 'from-red-500 to-pink-600',
    impact: 'Provides emotional stability and deep bonds'
  },
  friend: {
    name: 'Friend',
    description: 'Your chosen companions',
    emoji: '👫',
    color: 'from-blue-500 to-cyan-600',
    impact: 'Brings joy, support, and shared experiences'
  },
  mentor: {
    name: 'Mentor',
    description: 'Your guide and teacher',
    emoji: '🧙',
    color: 'from-purple-500 to-indigo-600',
    impact: 'Accelerates growth and provides wisdom'
  },
  partner: {
    name: 'Partner',
    description: 'Your life companion',
    emoji: '💑',
    color: 'from-pink-500 to-rose-600',
    impact: 'Deep connection and shared life journey'
  },
  colleague: {
    name: 'Colleague',
    description: 'Your professional network',
    emoji: '💼',
    color: 'from-green-500 to-teal-600',
    impact: 'Career growth and professional opportunities'
  },
  society: {
    name: 'Society',
    description: 'Your community and world',
    emoji: '🌍',
    color: 'from-orange-500 to-amber-600',
    impact: 'Broader impact and social responsibility'
  }
};

import { GoalCategory } from '../types/game';

export const goals: Record<GoalCategory, {
  name: string;
  description: string;
  emoji: string;
  color: string;
  examples: string[];
}> = {
  career: {
    name: 'Build a Successful Career',
    description: 'Achieve professional excellence and reach your career aspirations',
    emoji: '💼',
    color: 'from-blue-500 to-indigo-600',
    examples: [
      'Launch your dream business',
      'Reach executive leadership',
      'Master your craft',
      'Build a professional network'
    ]
  },
  relationships: {
    name: 'Build Meaningful Relationships',
    description: 'Create deep connections and nurture important bonds',
    emoji: '❤️',
    color: 'from-pink-500 to-rose-600',
    examples: [
      'Find your life partner',
      'Build a chosen family',
      'Reconnect with loved ones',
      'Become a mentor'
    ]
  },
  knowledge: {
    name: 'Pursue Knowledge',
    description: 'Continuously learn and expand your understanding',
    emoji: '📚',
    color: 'from-purple-500 to-violet-600',
    examples: [
      'Master a new language',
      'Earn advanced degrees',
      'Learn multiple skills',
      'Become an expert in your field'
    ]
  },
  adventure: {
    name: 'Seek Adventure',
    description: 'Explore the world and embrace new experiences',
    emoji: '🌍',
    color: 'from-green-500 to-teal-600',
    examples: [
      'Travel to every continent',
      'Live in different countries',
      'Try extreme sports',
      'Explore hidden gems'
    ]
  },
  health: {
    name: 'Achieve Peak Health',
    description: 'Build physical and mental wellness for life',
    emoji: '💪',
    color: 'from-orange-500 to-red-600',
    examples: [
      'Run a marathon',
      'Build sustainable fitness',
      'Master mental wellness',
      'Transform your lifestyle'
    ]
  },
  creativity: {
    name: 'Unleash Creativity',
    description: 'Express yourself and create meaningful art',
    emoji: '🎨',
    color: 'from-yellow-500 to-amber-600',
    examples: [
      'Write a book',
      'Create visual art',
      'Compose music',
      'Build innovative projects'
    ]
  }
};

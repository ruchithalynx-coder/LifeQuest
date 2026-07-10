import { Quest, QuestType } from '../types/game';

export const goalQuests: Omit<Quest, 'id' | 'type' | 'completed'>[] = [
  {
    title: 'Complete Something You Delayed',
    description: 'Finish that task you\'ve been putting off. Small progress builds momentum.',
    difficulty: 'medium',
    xpReward: 50,
    statImpact: { discipline: 3, confidence: 2 }
  },
  {
    title: 'Spend Time Improving Your Skill',
    description: 'Dedicate focused time to practice and develop your chosen skill.',
    difficulty: 'hard',
    xpReward: 75,
    statImpact: { focus: 3, discipline: 2, wisdom: 1 }
  },
  {
    title: 'Make Progress Toward Your Dream',
    description: 'Take one concrete step toward your life goal today.',
    difficulty: 'medium',
    xpReward: 60,
    statImpact: { confidence: 3, focus: 2 }
  },
  {
    title: 'Learn Something New',
    description: 'Acquire knowledge that will help you on your journey.',
    difficulty: 'easy',
    xpReward: 30,
    statImpact: { wisdom: 3, focus: 1 }
  },
  {
    title: 'Break a Bad Habit',
    description: 'Identify and work on breaking one habit that holds you back.',
    difficulty: 'hard',
    xpReward: 80,
    statImpact: { discipline: 4, confidence: 2 }
  }
];

export const mindQuests: Omit<Quest, 'id' | 'type' | 'completed'>[] = [
  {
    title: 'Control Your Reaction',
    description: 'When something frustrates you, pause and choose your response mindfully.',
    difficulty: 'medium',
    xpReward: 50,
    statImpact: { discipline: 3, wisdom: 2 }
  },
  {
    title: 'Overcome a Fear',
    description: 'Face something that makes you uncomfortable, even in a small way.',
    difficulty: 'hard',
    xpReward: 75,
    statImpact: { confidence: 4, discipline: 2 }
  },
  {
    title: 'Avoid Comparison',
    description: 'Focus on your own journey instead of comparing yourself to others.',
    difficulty: 'medium',
    xpReward: 55,
    statImpact: { wisdom: 3, confidence: 2 }
  },
  {
    title: 'Practice Gratitude',
    description: 'Take time to appreciate three things you\'re grateful for today.',
    difficulty: 'easy',
    xpReward: 25,
    statImpact: { wisdom: 2, empathy: 2 }
  },
  {
    title: 'Challenge a Negative Thought',
    description: 'When you think negatively, question and reframe that thought.',
    difficulty: 'medium',
    xpReward: 45,
    statImpact: { wisdom: 3, confidence: 2 }
  }
];

export const relationshipQuests: Omit<Quest, 'id' | 'type' | 'completed'>[] = [
  {
    title: 'Set Healthy Boundaries',
    description: 'Communicate your limits clearly and respectfully to someone.',
    difficulty: 'hard',
    xpReward: 70,
    statImpact: { confidence: 3, discipline: 2, empathy: 1 }
  },
  {
    title: 'Appreciate Someone',
    description: 'Express genuine gratitude to someone who matters to you.',
    difficulty: 'easy',
    xpReward: 30,
    statImpact: { empathy: 3, wisdom: 1 }
  },
  {
    title: 'Identify Healthy vs Unhealthy',
    description: 'Reflect on your relationships and identify which ones energize vs drain you.',
    difficulty: 'medium',
    xpReward: 45,
    statImpact: { wisdom: 3, empathy: 2 }
  },
  {
    title: 'Have a Meaningful Conversation',
    description: 'Engage in a deep conversation with someone important to you.',
    difficulty: 'medium',
    xpReward: 50,
    statImpact: { empathy: 3, wisdom: 2 }
  },
  {
    title: 'Forgive Someone',
    description: 'Let go of resentment and work toward forgiveness, for your peace of mind.',
    difficulty: 'hard',
    xpReward: 80,
    statImpact: { wisdom: 4, empathy: 3 }
  }
];

export function getRandomQuest(type: QuestType): Quest {
  const questPool = type === 'goal' ? goalQuests : 
                   type === 'mind' ? mindQuests : 
                   relationshipQuests;
  
  const randomQuest = questPool[Math.floor(Math.random() * questPool.length)];
  
  return {
    ...randomQuest,
    id: `${type}-${Date.now()}-${Math.random()}`,
    type,
    completed: false
  };
}

export function generateDailyQuests(): {
  goalQuest: Quest;
  mindQuest: Quest;
  relationshipQuest: Quest;
} {
  return {
    goalQuest: getRandomQuest('goal'),
    mindQuest: getRandomQuest('mind'),
    relationshipQuest: getRandomQuest('relationship')
  };
}

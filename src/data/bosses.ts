import { BossEnemy, BossType } from '../types/game';

export const bossEnemies: BossEnemy[] = [
  {
    id: 'procrastination',
    name: 'Procrastination',
    type: 'procrastination',
    description: 'The shadow that whispers "later" when you mean "now." It feeds on delay and grows stronger with each postponement.',
    power: 3,
    weaknesses: ['discipline', 'focus'],
    strategies: [
      'Break tasks into tiny steps',
      'Use the 5-minute rule',
      'Remove distractions before starting',
      'Set clear deadlines'
    ],
    phases: [
      {
        phase: 1,
        name: 'The Initial Delay',
        description: 'Procrastination begins with small delays. You feel resistance but can still overcome it.',
        challenges: [],
        requiredStats: { discipline: 5, focus: 5 }
      },
      {
        phase: 2,
        name: 'The Comfort Zone',
        description: 'Procrastination offers comfort. It feels easier to stay where you are.',
        challenges: [],
        requiredStats: { discipline: 10, focus: 10, confidence: 5 }
      },
      {
        phase: 3,
        name: 'The Deadline Panic',
        description: 'Time is running out. Procrastination reveals its true cost.',
        challenges: [],
        requiredStats: { discipline: 15, focus: 15, confidence: 10 }
      }
    ]
  },
  {
    id: 'fear-of-judgment',
    name: 'Fear of Judgment',
    type: 'fear_of_judgment',
    description: 'The voice that says "they\'ll laugh" or "they\'ll think less of you." It keeps you small to avoid criticism.',
    power: 4,
    weaknesses: ['confidence', 'wisdom'],
    strategies: [
      'Remember that critics often don\'t matter',
      'Focus on your own growth, not opinions',
      'Accept that judgment is inevitable',
      'Build confidence through small wins'
    ],
    phases: [
      {
        phase: 1,
        name: 'The Worry',
        description: 'Fear plants seeds of doubt. You start imagining what others might think.',
        challenges: [],
        requiredStats: { confidence: 5, wisdom: 5 }
      },
      {
        phase: 2,
        name: 'The Paralysis',
        description: 'Fear grows strong enough to stop you from acting.',
        challenges: [],
        requiredStats: { confidence: 10, wisdom: 10, discipline: 5 }
      },
      {
        phase: 3,
        name: 'The Confrontation',
        description: 'You must face judgment directly or let fear control your life.',
        challenges: [],
        requiredStats: { confidence: 15, wisdom: 15, discipline: 10 }
      }
    ]
  },
  {
    id: 'self-doubt',
    name: 'Self-Doubt',
    type: 'self_doubt',
    description: 'The inner voice that questions your worth and abilities. It turns every challenge into evidence of inadequacy.',
    power: 4,
    weaknesses: ['confidence', 'discipline'],
    strategies: [
      'Track your past successes',
      'Separate feelings from facts',
      'Take action despite doubt',
      'Build evidence of your capability'
    ],
    phases: [
      {
        phase: 1,
        name: 'The Whisper',
        description: 'Self-doubt starts quietly. "Are you sure you can do this?"',
        challenges: [],
        requiredStats: { confidence: 5, discipline: 5 }
      },
      {
        phase: 2,
        name: 'The Questioning',
        description: 'Doubt grows louder. It questions every decision and ability.',
        challenges: [],
        requiredStats: { confidence: 10, discipline: 10, wisdom: 5 }
      },
      {
        phase: 3,
        name: 'The Crisis',
        description: 'Self-doubt threatens to stop you completely. You must choose belief.',
        challenges: [],
        requiredStats: { confidence: 15, discipline: 15, wisdom: 10 }
      }
    ]
  },
  {
    id: 'comparison',
    name: 'Comparison',
    type: 'comparison',
    description: 'The thief of joy that measures your behind against others\' highlights. It makes progress feel inadequate.',
    power: 3,
    weaknesses: ['wisdom', 'confidence'],
    strategies: [
      'Remember that everyone has hidden struggles',
      'Focus on your own journey and timeline',
      'Define success on your own terms',
      'Practice gratitude for your progress'
    ],
    phases: [
      {
        phase: 1,
        name: 'The Glance',
        description: 'Comparison starts with a look at others\' achievements.',
        challenges: [],
        requiredStats: { wisdom: 5, confidence: 5 }
      },
      {
        phase: 2,
        name: 'The Envy',
        description: 'Comparison turns to envy. Their success feels like your failure.',
        challenges: [],
        requiredStats: { wisdom: 10, confidence: 10, empathy: 5 }
      },
      {
        phase: 3,
        name: 'The Liberation',
        description: 'You must break free from comparison or remain trapped.',
        challenges: [],
        requiredStats: { wisdom: 15, confidence: 15, empathy: 10 }
      }
    ]
  },
  {
    id: 'toxic-influence',
    name: 'Toxic Influence',
    type: 'toxic_influence',
    description: 'The people and environments that drain your energy and undermine your growth. They feel familiar but hold you back.',
    power: 5,
    weaknesses: ['wisdom', 'discipline', 'empathy'],
    strategies: [
      'Identify toxic patterns in relationships',
      'Set firm boundaries',
      'Seek out supportive communities',
      'Distance yourself gradually but firmly'
    ],
    phases: [
      {
        phase: 1,
        name: 'The Subtle Drain',
        description: 'Toxic influence starts small. You feel tired after interactions.',
        challenges: [],
        requiredStats: { wisdom: 5, empathy: 5 }
      },
      {
        phase: 2,
        name: 'The Recognition',
        description: 'You begin to see the pattern. These relationships hurt you.',
        challenges: [],
        requiredStats: { wisdom: 10, discipline: 10, empathy: 5 }
      },
      {
        phase: 3,
        name: 'The Break',
        description: 'You must choose between comfort and growth. The break is hard.',
        challenges: [],
        requiredStats: { wisdom: 15, discipline: 15, empathy: 10, confidence: 10 }
      }
    ]
  },
  {
    id: 'perfectionism',
    name: 'Perfectionism',
    type: 'perfectionism',
    description: 'The impossible standard that makes good feel like failure. It prevents progress in the name of quality.',
    power: 4,
    weaknesses: ['wisdom', 'discipline'],
    strategies: [
      'Embrace "good enough" as a starting point',
      'Focus on progress over perfection',
      'Set time limits for tasks',
      'Learn from imperfect attempts'
    ],
    phases: [
      {
        phase: 1,
        name: 'The Standard',
        description: 'Perfectionism sets impossibly high standards. Nothing feels good enough.',
        challenges: [],
        requiredStats: { wisdom: 5, discipline: 5 }
      },
      {
        phase: 2,
        name: 'The Paralysis',
        description: 'Fear of imperfection prevents you from starting or finishing.',
        challenges: [],
        requiredStats: { wisdom: 10, discipline: 10, confidence: 5 }
      },
      {
        phase: 3,
        name: 'The Acceptance',
        description: 'You must accept imperfection or never move forward.',
        challenges: [],
        requiredStats: { wisdom: 15, discipline: 15, confidence: 10 }
      }
    ]
  }
];

export function getBossById(bossId: string): BossEnemy | undefined {
  return bossEnemies.find(boss => boss.id === bossId);
}

export function getBossByType(bossType: BossType): BossEnemy | undefined {
  return bossEnemies.find(boss => boss.type === bossType);
}

export function getNextBoss(defeatedBossIds: string[]): BossEnemy | undefined {
  const availableBosses = bossEnemies.filter(boss => !defeatedBossIds.includes(boss.id));
  return availableBosses.sort((a, b) => a.power - b.power)[0];
}

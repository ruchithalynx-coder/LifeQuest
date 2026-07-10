import { LifeSituation, SituationCategory } from '../types/game';

export const lifeSituations: LifeSituation[] = [
  {
    id: 'fake-friend-1',
    category: 'fake_friend',
    title: 'The Fair-Weather Friend',
    description: 'A friend you\'ve known for years only reaches out when they need something. They\'ve never been there for you when you needed support.',
    context: 'You\'ve noticed this pattern for months. Today, they message you asking for a big favor.',
    difficulty: 3,
    choices: [
      {
        id: 'help-anyway',
        text: 'Help them anyway - that\'s what friends do',
        consequence: 'You help them, but feel used. They leave immediately after getting what they need.',
        statImpact: { empathy: 2, confidence: -1, discipline: -1 },
        riskLevel: 'medium'
      },
      {
        id: 'set-boundary',
        text: 'Set a boundary - explain how you feel',
        consequence: 'They get defensive, but you feel proud of standing up for yourself. The friendship changes.',
        statImpact: { confidence: 3, discipline: 2, empathy: 1 },
        riskLevel: 'high'
      },
      {
        id: 'distance-yourself',
        text: 'Politely decline and create distance',
        consequence: 'They\'re upset but you realize this relationship wasn\'t healthy. You feel lighter.',
        statImpact: { wisdom: 3, discipline: 2, confidence: 1 },
        riskLevel: 'low'
      }
    ]
  },
  {
    id: 'society-judgment-1',
    category: 'society_judgment',
    title: 'The Dream Doubters',
    description: 'You share your ambitious life goal with family and friends. Instead of support, you get skepticism and doubt.',
    context: 'They say things like "That\'s unrealistic" or "Why not just get a normal job?"',
    difficulty: 4,
    choices: [
      {
        id: 'hide-dream',
        text: 'Keep your dream to yourself from now on',
        consequence: 'You avoid conflict but feel isolated. Your motivation slowly fades.',
        statImpact: { confidence: -2, discipline: -1, wisdom: 1 },
        riskLevel: 'low'
      },
      {
        id: 'argue-defend',
        text: 'Argue and defend your dream passionately',
        consequence: 'Tensions rise. Some relationships become strained, but you prove your commitment.',
        statImpact: { confidence: 2, discipline: 1, empathy: -1 },
        riskLevel: 'medium'
      },
      {
        id: 'prove-through-action',
        text: 'Let your results speak - focus on progress',
        consequence: 'You channel frustration into action. Small wins start to change minds.',
        statImpact: { discipline: 3, focus: 3, confidence: 2 },
        riskLevel: 'medium'
      }
    ]
  },
  {
    id: 'failure-moment-1',
    category: 'failure_moment',
    title: 'The Public Failure',
    description: 'You worked incredibly hard on something important, but it failed publicly. People saw.',
    context: 'It could be a presentation, a project launch, or a competition. The embarrassment is intense.',
    difficulty: 5,
    choices: [
      {
        id: 'avoid-attention',
        text: 'Hide and avoid everyone for a while',
        consequence: 'You process alone, but isolation makes it harder to move forward.',
        statImpact: { confidence: -2, wisdom: 1 },
        riskLevel: 'low'
      },
      {
        id: 'blame-others',
        text: 'Find reasons it wasn\'t your fault',
        consequence: 'You protect your ego temporarily but learn nothing. Similar failures await.',
        statImpact: { confidence: 1, wisdom: -2, discipline: -1 },
        riskLevel: 'medium'
      },
      {
        id: 'embrace-learn',
        text: 'Acknowledge the failure and extract lessons',
        consequence: 'It\'s painful, but you grow stronger. This failure becomes a turning point.',
        statImpact: { wisdom: 4, discipline: 3, confidence: 2 },
        riskLevel: 'high'
      }
    ]
  },
  {
    id: 'goal-distraction-1',
    category: 'goal_distraction',
    title: 'The Tempting Detour',
    description: 'An opportunity appears that offers immediate pleasure but clearly delays your long-term goal.',
    context: 'It could be a fun trip, a relationship, or an easy path that feels good now but costs you later.',
    difficulty: 3,
    choices: [
      {
        id: 'take-detour',
        text: 'Take the detour - you can pursue your goal later',
        consequence: 'The moment is enjoyable, but months later you regret the lost time.',
        statImpact: { confidence: 1, discipline: -3, focus: -2 },
        riskLevel: 'medium'
      },
      {
        id: 'compromise',
        text: 'Find a middle ground - partial detour',
        consequence: 'You satisfy some desires but stay somewhat on track. Progress is slower.',
        statImpact: { wisdom: 2, discipline: 1, focus: -1 },
        riskLevel: 'low'
      },
      {
        id: 'stay-focused',
        text: 'Stay focused on your goal - delay gratification',
        consequence: 'It\'s difficult in the moment, but you build momentum and pride.',
        statImpact: { discipline: 4, focus: 3, confidence: 2 },
        riskLevel: 'high'
      }
    ]
  },
  {
    id: 'moral-dilemma-1',
    category: 'moral_dilemma',
    title: 'The Ethical Shortcut',
    description: 'You discover a way to get ahead faster, but it involves being dishonest or hurting someone.',
    context: 'No one would ever know, and it would significantly accelerate your progress.',
    difficulty: 5,
    choices: [
      {
        id: 'take-shortcut',
        text: 'Take the shortcut - results matter most',
        consequence: 'You get ahead quickly, but guilt eats at you. Trust in yourself erodes.',
        statImpact: { confidence: 2, wisdom: -3, empathy: -2 },
        riskLevel: 'high'
      },
      {
        id: 'rationalize',
        text: 'Rationalize it as "not that bad"',
        consequence: 'You do it but constantly justify it. Your moral compass slowly shifts.',
        statImpact: { confidence: 1, wisdom: -1, empathy: -1 },
        riskLevel: 'medium'
      },
      {
        id: 'stay-ethical',
        text: 'Choose the harder but right path',
        consequence: 'Progress is slower, but you build unshakeable character and self-respect.',
        statImpact: { wisdom: 4, discipline: 3, empathy: 2 },
        riskLevel: 'low'
      }
    ]
  },
  {
    id: 'relationship-conflict-1',
    category: 'relationship_conflict',
    title: 'The Values Clash',
    description: 'Someone important to you has fundamentally different values on a crucial issue.',
    context: 'This difference is causing tension and affecting your relationship quality.',
    difficulty: 4,
    choices: [
      {
        id: 'avoid-topic',
        text: 'Avoid the topic entirely to keep peace',
        consequence: 'Surface peace returns, but the relationship feels shallow and distant.',
        statImpact: { empathy: 1, wisdom: -1, confidence: -1 },
        riskLevel: 'low'
      },
      {
        id: 'change-them',
        text: 'Try to change their mind',
        consequence: 'Arguments ensue. Both become entrenched. Relationship suffers.',
        statImpact: { confidence: 1, empathy: -2, wisdom: -1 },
        riskLevel: 'high'
      },
      {
        id: 'accept-difference',
        text: 'Accept the difference and set boundaries',
        consequence: 'You maintain respect while protecting your values. Relationship evolves.',
        statImpact: { wisdom: 3, empathy: 2, confidence: 2 },
        riskLevel: 'medium'
      }
    ]
  }
];

export function getRandomSituation(): LifeSituation {
  return lifeSituations[Math.floor(Math.random() * lifeSituations.length)];
}

export function getSituationsByCategory(category: SituationCategory): LifeSituation[] {
  return lifeSituations.filter(s => s.category === category);
}

// Core Game Types
export interface GameState {
  player: Player;
  journey: LifeJourney;
  quests: DailyQuests;
  situations: LifeSituation[];
  rewards: RewardSystem;
  bossBattles: BossBattleState;
  progression: Progression;
}

export interface Player {
  id: string;
  name: string;
  avatar: Avatar;
  personality: Personality;
  createdAt: string;
  lastPlayed: string;
}

export interface Avatar {
  name: string;
  appearance: AvatarAppearance;
  style: AvatarStyle;
  level: number;
  unlockedStyles: string[];
}

export interface AvatarAppearance {
  base: string;
  accessories: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface AvatarStyle {
  id: string;
  name: string;
  emoji: string;
  description: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface Personality {
  type: PersonalityType;
  traits: PersonalityTrait[];
  stats: CharacterStats;
}

export type PersonalityType = 
  | 'visionary' 
  | 'guardian' 
  | 'explorer' 
  | 'diplomat' 
  | 'strategist';

export interface PersonalityTrait {
  id: string;
  name: string;
  description: string;
  impact: Partial<CharacterStats>;
}

export interface CharacterStats {
  focus: number;
  confidence: number;
  discipline: number;
  wisdom: number;
  empathy: number;
  max: number;
}

// Life Journey System
export interface LifeJourney {
  goal: LifeGoal;
  relationships: Relationship[];
  milestones: Milestone[];
  currentStage: JourneyStage;
}

export interface LifeGoal {
  id: string;
  category: GoalCategory;
  title: string;
  description: string;
  progress: number;
  target: number;
  deadline?: string;
}

export type GoalCategory = 
  | 'career' 
  | 'relationships' 
  | 'knowledge' 
  | 'adventure' 
  | 'health' 
  | 'creativity';

export interface Relationship {
  id: string;
  type: RelationshipType;
  name: string;
  closeness: number;
  influence: number;
  status: 'active' | 'distant' | 'strained' | 'ended';
}

export type RelationshipType = 
  | 'family' 
  | 'friend' 
  | 'mentor' 
  | 'partner' 
  | 'colleague' 
  | 'society';

export interface Milestone {
  id: string;
  title: string;
  description: string;
  achieved: boolean;
  achievedAt?: string;
  reward?: Reward;
}

export type JourneyStage = 
  | 'beginner' 
  | 'apprentice' 
  | 'journeyman' 
  | 'master' 
  | 'legend';

// Daily Quest System
export interface DailyQuests {
  date: string;
  goalQuest: Quest;
  mindQuest: Quest;
  relationshipQuest: Quest;
  completed: {
    goal: boolean;
    mind: boolean;
    relationship: boolean;
  };
}

export interface Quest {
  id: string;
  type: QuestType;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  xpReward: number;
  statImpact: Partial<CharacterStats>;
  completed: boolean;
  completedAt?: string;
}

export type QuestType = 'goal' | 'mind' | 'relationship';

// Life Situation Engine
export interface LifeSituation {
  id: string;
  category: SituationCategory;
  title: string;
  description: string;
  context: string;
  choices: SituationChoice[];
  difficulty: number;
  isBossBattle?: boolean;
}

export type SituationCategory = 
  | 'fake_friend' 
  | 'society_judgment' 
  | 'failure_moment' 
  | 'goal_distraction' 
  | 'moral_dilemma' 
  | 'relationship_conflict';

export interface SituationChoice {
  id: string;
  text: string;
  consequence: string;
  statImpact: Partial<CharacterStats>;
  relationshipImpact?: {
    relationshipId: string;
    change: number;
  };
  riskLevel: 'low' | 'medium' | 'high';
}

// Reward System
export interface RewardSystem {
  badges: Badge[];
  level: number;
  xp: number;
  xpToNextLevel: number;
  unlocks: Unlock[];
  currency: {
    wisdom: number;
    influence: number;
  };
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  earnedAt?: string;
  progress: number;
  required: number;
}

export interface Unlock {
  id: string;
  type: 'avatar_style' | 'world' | 'feature' | 'personality_evolution';
  name: string;
  description: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface Reward {
  type: 'badge' | 'xp' | 'unlock' | 'stat_boost';
  value: any;
  description: string;
}

// Boss Battle System
export interface BossBattleState {
  currentBoss?: BossEnemy;
  defeatedBosses: string[];
  battleHistory: BossBattle[];
}

export interface BossEnemy {
  id: string;
  name: string;
  type: BossType;
  description: string;
  power: number;
  weaknesses: string[];
  strategies: string[];
  phases: BossPhase[];
}

export type BossType = 
  | 'procrastination' 
  | 'fear_of_judgment' 
  | 'self_doubt' 
  | 'comparison' 
  | 'toxic_influence' 
  | 'perfectionism';

export interface BossPhase {
  phase: number;
  name: string;
  description: string;
  challenges: LifeSituation[];
  requiredStats: Partial<CharacterStats>;
}

export interface BossBattle {
  bossId: string;
  startedAt: string;
  endedAt?: string;
  result: 'victory' | 'defeat' | 'fled';
  phasesCompleted: number;
  choicesMade: string[];
}

// Progression System
export interface Progression {
  totalPlayTime: number;
  questsCompleted: number;
  situationsResolved: number;
  bossesDefeated: number;
  streakDays: number;
  longestStreak: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  condition: string;
  unlocked: boolean;
  unlockedAt?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

// Legacy types for backward compatibility
export interface Challenge {
  id: string;
  title: string;
  description: string;
  choices: SituationChoice[];
}

export interface Choice {
  id: string;
  text: string;
  statImpact: Partial<CharacterStats>;
}

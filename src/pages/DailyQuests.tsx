import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Target, Brain, Heart, CheckCircle, Circle, ArrowRight, Sparkles } from 'lucide-react'
import { Quest, QuestType } from '../types/game'
import { generateDailyQuests } from '../data/quests'

export default function DailyQuests() {
  const navigate = useNavigate()
  const [quests, setQuests] = useState<{
    goalQuest: Quest
    mindQuest: Quest
    relationshipQuest: Quest
  } | null>(null)
  const [completed, setCompleted] = useState({
    goal: false,
    mind: false,
    relationship: false
  })

  useEffect(() => {
    // Check if we have quests for today
    const today = new Date().toDateString()
    const savedQuests = localStorage.getItem(`quests-${today}`)
    
    if (savedQuests) {
      const parsed = JSON.parse(savedQuests)
      setQuests(parsed.quests)
      setCompleted(parsed.completed)
    } else {
      // Generate new quests for today
      const newQuests = generateDailyQuests()
      setQuests(newQuests)
      localStorage.setItem(`quests-${today}`, JSON.stringify({
        quests: newQuests,
        completed: { goal: false, mind: false, relationship: false }
      }))
    }
  }, [])

  const handleCompleteQuest = (type: QuestType) => {
    if (!quests) return

    const updatedCompleted = { ...completed, [type]: true }
    setCompleted(updatedCompleted)

    // Update the quest in state
    const updatedQuests = { ...quests }
    if (type === 'goal') {
      updatedQuests.goalQuest = { ...quests.goalQuest, completed: true, completedAt: new Date().toISOString() }
    } else if (type === 'mind') {
      updatedQuests.mindQuest = { ...quests.mindQuest, completed: true, completedAt: new Date().toISOString() }
    } else {
      updatedQuests.relationshipQuest = { ...quests.relationshipQuest, completed: true, completedAt: new Date().toISOString() }
    }
    setQuests(updatedQuests)

    // Save to localStorage
    const today = new Date().toDateString()
    localStorage.setItem(`quests-${today}`, JSON.stringify({
      quests: updatedQuests,
      completed: updatedCompleted
    }))
  }

  const handleContinue = () => {
    navigate('/situation')
  }

  const questConfig = {
    goal: {
      icon: Target,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400'
    },
    mind: {
      icon: Brain,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-400'
    },
    relationship: {
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-400'
    }
  }

  if (!quests) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading your quests...</div>
      </div>
    )
  }

  const allCompleted = completed.goal && completed.mind && completed.relationship

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="w-12 h-12 text-yellow-300 mr-3" />
            <h1 className="text-4xl font-bold text-white">Daily Quests</h1>
          </div>

          <p className="text-purple-200 text-center mb-8 text-lg">
            Complete these quests to grow your character and earn rewards
          </p>

          {/* Quest cards */}
          <div className="space-y-6 mb-8">
            {/* Goal Quest */}
            <QuestCard
              quest={quests.goalQuest}
              completed={completed.goal}
              onComplete={() => handleCompleteQuest('goal')}
              config={questConfig.goal}
            />

            {/* Mind Quest */}
            <QuestCard
              quest={quests.mindQuest}
              completed={completed.mind}
              onComplete={() => handleCompleteQuest('mind')}
              config={questConfig.mind}
            />

            {/* Relationship Quest */}
            <QuestCard
              quest={quests.relationshipQuest}
              completed={completed.relationship}
              onComplete={() => handleCompleteQuest('relationship')}
              config={questConfig.relationship}
            />
          </div>

          {/* Progress summary */}
          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-bold text-lg">Today's Progress</span>
              <span className="text-purple-200">
                {Object.values(completed).filter(Boolean).length}/3 Completed
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(Object.values(completed).filter(Boolean).length / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Continue button */}
          <button
            onClick={handleContinue}
            disabled={!allCompleted}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-lg flex items-center justify-center"
          >
            {allCompleted ? 'Face Life Situation' : 'Complete All Quests First'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

interface QuestCardProps {
  quest: Quest
  completed: boolean
  onComplete: () => void
  config: {
    icon: any
    color: string
    bgColor: string
    borderColor: string
  }
}

function QuestCard({ quest, completed, onComplete, config }: QuestCardProps) {
  const Icon = config.icon

  return (
    <div className={`bg-gradient-to-r ${config.bgColor} rounded-xl p-6 border-2 ${config.borderColor} transition-all ${completed ? 'opacity-75' : ''}`}>
      <div className="flex items-start">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${config.color} mr-4 flex-shrink-0`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-white font-bold text-lg mb-2">{quest.title}</h3>
              <p className="text-white/80 text-sm mb-3">{quest.description}</p>
            </div>
            <button
              onClick={onComplete}
              disabled={completed}
              className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all ${
                completed
                  ? 'bg-green-500 text-white'
                  : 'bg-white/20 hover:bg-white/30 text-white/50 hover:text-white'
              }`}
            >
              {completed ? <CheckCircle className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
            </button>
          </div>
          
          <div className="flex items-center space-x-4 text-xs">
            <span className={`px-2 py-1 rounded ${
              quest.difficulty === 'easy' ? 'bg-green-500/30 text-green-200' :
              quest.difficulty === 'medium' ? 'bg-yellow-500/30 text-yellow-200' :
              'bg-red-500/30 text-red-200'
            }`}>
              {quest.difficulty}
            </span>
            <span className="text-white/60">+{quest.xpReward} XP</span>
            {Object.entries(quest.statImpact).map(([stat, value]) => (
              <span key={stat} className="text-white/60">
                +{value} {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Target, ArrowRight, Sparkles } from 'lucide-react'
import { goals } from '../data/goals'
import { GoalCategory } from '../types/game'

export default function GoalSelection() {
  const navigate = useNavigate()
  const [selectedGoal, setSelectedGoal] = useState<GoalCategory | ''>('')

  const handleContinue = () => {
    if (selectedGoal) {
      localStorage.setItem('goal', selectedGoal)
      navigate('/quests')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="flex items-center justify-center mb-8">
            <Target className="w-12 h-12 text-green-300 mr-3" />
            <h1 className="text-4xl font-bold text-white">Choose Your Life Goal</h1>
          </div>

          <p className="text-green-200 text-center mb-8 text-lg">
            What matters most to you in this journey? This goal will shape your path.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {Object.entries(goals).map(([category, goal]) => (
              <button
                key={category}
                onClick={() => setSelectedGoal(category as GoalCategory)}
                className={`p-6 rounded-xl border-2 transition-all text-left relative ${
                  selectedGoal === category
                    ? `border-green-400 bg-gradient-to-r ${goal.color} shadow-lg shadow-green-500/50`
                    : 'border-green-400/30 bg-white/10 hover:bg-white/20 hover:border-green-400'
                }`}
              >
                {selectedGoal === category && (
                  <div className="absolute top-2 right-2">
                    <Sparkles className="w-5 h-5 text-yellow-300" />
                  </div>
                )}
                <div className="text-5xl mb-4">{goal.emoji}</div>
                <h3 className="text-white text-xl font-bold mb-2">{goal.name}</h3>
                <p className="text-white/80 text-sm mb-4">{goal.description}</p>
                <div className="space-y-1">
                  {goal.examples.slice(0, 2).map((example, idx) => (
                    <div key={idx} className="text-white/60 text-xs">
                      • {example}
                    </div>
                  ))}
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleContinue}
            disabled={!selectedGoal}
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-lg flex items-center justify-center"
          >
            Begin Your Quest
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

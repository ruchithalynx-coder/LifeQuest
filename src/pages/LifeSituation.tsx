import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlertTriangle, ArrowRight, TrendingUp, TrendingDown } from 'lucide-react'
import type { LifeSituation } from '../types/game'
import { getRandomSituation } from '../data/situations'

export default function LifeSituationPage() {
  const navigate = useNavigate()
  const [situation, setSituation] = useState<LifeSituation | null>(null)
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    // Load a random situation
    const randomSituation = getRandomSituation()
    setSituation(randomSituation)
  }, [])

  const handleChoice = (choiceId: string) => {
    setSelectedChoice(choiceId)
    setShowResult(true)

    // Store the choice result
    if (situation) {
      const choice = situation.choices.find(c => c.id === choiceId)
      if (choice) {
        localStorage.setItem('lastSituationChoice', JSON.stringify({
          situationId: situation.id,
          choiceId,
          statImpact: choice.statImpact,
          consequence: choice.consequence
        }))
      }
    }

    // Navigate to result after a delay
    setTimeout(() => {
      navigate('/result')
    }, 3000)
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'from-green-500 to-emerald-600'
      case 'medium': return 'from-yellow-500 to-orange-600'
      case 'high': return 'from-red-500 to-rose-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  if (!situation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading life situation...</div>
      </div>
    )
  }

  const selectedChoiceData = selectedChoice ? situation.choices.find(c => c.id === selectedChoice) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="flex items-center justify-center mb-8">
            <AlertTriangle className="w-12 h-12 text-orange-300 mr-3" />
            <h1 className="text-4xl font-bold text-white">Life Situation</h1>
          </div>

          {/* Situation card */}
          <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-6 mb-8 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-orange-500/30 text-orange-200 text-sm font-medium">
                Difficulty: {situation.difficulty}/5
              </span>
              <span className="text-white/60 text-sm">
                Your choice will shape your character
              </span>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">{situation.title}</h2>
            <p className="text-white/90 text-lg leading-relaxed mb-4">{situation.description}</p>
            <div className="bg-white/10 rounded-lg p-4 border-l-4 border-orange-400">
              <p className="text-white/80 text-sm italic">{situation.context}</p>
            </div>
          </div>

          {/* Choices */}
          <div className="space-y-4 mb-8">
            {situation.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => !selectedChoice && handleChoice(choice.id)}
                disabled={selectedChoice !== null}
                className={`w-full p-6 rounded-xl border-2 transition-all text-left relative ${
                  selectedChoice === choice.id
                    ? 'border-orange-400 bg-orange-500/30 shadow-lg shadow-orange-500/50'
                    : selectedChoice !== null
                    ? 'border-gray-400/30 bg-gray-500/20 opacity-50 cursor-not-allowed'
                    : 'border-orange-400/30 bg-white/10 hover:bg-white/20 hover:border-orange-400'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getRiskColor(choice.riskLevel)} flex items-center justify-center mr-3`}>
                        <span className="text-white font-bold text-sm">
                          {choice.id.toUpperCase().charAt(0)}
                        </span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        choice.riskLevel === 'low' ? 'bg-green-500/30 text-green-200' :
                        choice.riskLevel === 'medium' ? 'bg-yellow-500/30 text-yellow-200' :
                        'bg-red-500/30 text-red-200'
                      }`}>
                        {choice.riskLevel} risk
                      </span>
                    </div>
                    <p className="text-white text-lg font-medium mb-3">{choice.text}</p>
                    
                    {/* Stat impact preview */}
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(choice.statImpact).map(([stat, value]) => (
                        <div key={stat} className="flex items-center text-sm">
                          {value > 0 ? (
                            <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
                          )}
                          <span className={`${
                            value > 0 ? 'text-green-300' : 'text-red-300'
                          }`}>
                            {value > 0 ? '+' : ''}{value} {stat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {selectedChoice === choice.id && (
                    <ArrowRight className="w-6 h-6 text-orange-300 flex-shrink-0 ml-4" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Result overlay */}
          {showResult && selectedChoiceData && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in">
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 max-w-lg w-full border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Your Choice</h3>
                <p className="text-white text-lg mb-4">{selectedChoiceData.text}</p>
                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <p className="text-white/90">{selectedChoiceData.consequence}</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <p className="text-white/60 text-sm">Stat Changes:</p>
                  {Object.entries(selectedChoiceData.statImpact).map(([stat, value]) => (
                    <div key={stat} className="flex items-center justify-between">
                      <span className="text-white capitalize">{stat}</span>
                      <span className={`font-bold ${
                        value > 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {value > 0 ? '+' : ''}{value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-center text-white/60 text-sm animate-pulse">
                  Proceeding to results...
                </div>
              </div>
            </div>
          )}

          {/* Warning text */}
          {!selectedChoice && (
            <div className="text-center text-orange-200 text-sm">
              <p>⚠️ Your choices have real consequences. Choose wisely.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

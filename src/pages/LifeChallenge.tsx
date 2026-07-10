import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlertCircle, ArrowRight } from 'lucide-react'
import { Challenge } from '../types/game'

export default function LifeChallenge() {
  const navigate = useNavigate()
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null)
  
  // Sample challenge data
  const challenge: Challenge = {
    id: '1',
    title: 'The Big Presentation',
    description: 'You have an important presentation at work tomorrow. Your colleague asks for help with their project, which would take several hours. What do you do?',
    choices: [
      {
        id: 'a',
        text: 'Help your colleague and work late on your presentation',
        statImpact: { empathy: 3, discipline: -1, confidence: 1 }
      },
      {
        id: 'b',
        text: 'Focus on your presentation and politely decline',
        statImpact: { focus: 3, confidence: 2, empathy: -1 }
      },
      {
        id: 'c',
        text: 'Find a middle ground - help for 1 hour then focus on your work',
        statImpact: { wisdom: 3, discipline: 2, focus: 1 }
      }
    ]
  }

  const handleChoice = (choiceId: string) => {
    setSelectedChoice(choiceId)
    const choice = challenge.choices.find(c => c.id === choiceId)
    if (choice) {
      // Store the choice and stat impacts
      localStorage.setItem('lastChoice', JSON.stringify(choice))
      setTimeout(() => {
        navigate('/result')
      }, 500)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <AlertCircle className="w-12 h-12 text-orange-300 mr-3" />
            <h1 className="text-4xl font-bold text-white">Life Challenge</h1>
          </div>

          <div className="bg-white/20 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{challenge.title}</h2>
            <p className="text-orange-100 text-lg leading-relaxed">{challenge.description}</p>
          </div>

          <div className="space-y-4 mb-8">
            {challenge.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => handleChoice(choice.id)}
                disabled={selectedChoice !== null}
                className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                  selectedChoice === choice.id
                    ? 'border-orange-400 bg-orange-500/30'
                    : selectedChoice !== null
                    ? 'border-gray-400/30 bg-gray-500/20 opacity-50 cursor-not-allowed'
                    : 'border-orange-400/30 bg-white/10 hover:bg-white/20 hover:border-orange-400'
                }`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/30 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{choice.id.toUpperCase()}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-lg font-medium">{choice.text}</p>
                  </div>
                  {selectedChoice === choice.id && (
                    <ArrowRight className="w-6 h-6 text-orange-300 flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="text-center text-orange-200 text-sm">
            <p>Your choice will impact your personality stats</p>
          </div>
        </div>
      </div>
    </div>
  )
}

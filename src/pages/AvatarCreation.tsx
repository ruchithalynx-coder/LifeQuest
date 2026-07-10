import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, ArrowRight, Sparkles } from 'lucide-react'
import { avatarStyles } from '../data/avatarStyles'
import { personalities } from '../data/personalities'
import { PersonalityType } from '../types/game'

export default function AvatarCreation() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [selectedStyle, setSelectedStyle] = useState('')
  const [selectedPersonality, setSelectedPersonality] = useState<PersonalityType | ''>('')

  const handleContinue = () => {
    if (step === 1 && name) {
      setStep(2)
    } else if (step === 2 && selectedStyle) {
      setStep(3)
    } else if (step === 3 && selectedPersonality) {
      // Store avatar data
      const avatarData = {
        name,
        style: selectedStyle,
        personality: selectedPersonality,
        createdAt: new Date().toISOString()
      }
      localStorage.setItem('avatar', JSON.stringify(avatarData))
      navigate('/relationships')
    }
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-3xl w-full relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Progress indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    s <= step
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-white/20 text-white/50'
                  }`}
                >
                  {s < step ? '✓' : s}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center mb-8">
            <User className="w-12 h-12 text-purple-300 mr-3" />
            <h1 className="text-4xl font-bold text-white">Create Your Avatar</h1>
          </div>

          {/* Step 1: Name */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-purple-200 text-lg font-medium mb-3">
                  What's your name?
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name..."
                  className="w-full px-6 py-4 rounded-xl bg-white/20 text-white placeholder-purple-300 border border-purple- text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                />
              </div>
            </div>
          )}

          {/* Step 2: Style Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-purple-200 text-lg font-medium mb-4">
                  Choose your avatar style
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {avatarStyles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`p-4 rounded-xl border-2 transition-all relative ${
                        selectedStyle === style.id
                          ? 'border-purple-400 bg-purple-500/30 shadow-lg shadow-purple-500/50'
                          : 'border-purple-400/30 bg-white/10 hover:bg-white/20'
                      }`}
                    >
                      {style.rarity !== 'common' && (
                        <div className="absolute top-2 right-2">
                          <Sparkles className="w-4 h-4 text-yellow-400" />
                        </div>
                      )}
                      <div className="text-4xl mb-2">{style.emoji}</div>
                      <div className="text-white text-sm font-medium">{style.name}</div>
                      <div className={`text-xs mt-1 ${
                        style.rarity === 'legendary' ? 'text-yellow-400' :
                        style.rarity === 'epic' ? 'text-purple-400' :
                        style.rarity === 'rare' ? 'text-blue-400' :
                        'text-gray-400'
                      }`}>
                        {style.rarity}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Personality Selection */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-purple-200 text-lg font-medium mb-4">
                  Choose your personality type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(personalities).map(([type, personality]) => (
                    <button
                      key={type}
                      onClick={() => setSelectedPersonality(type as PersonalityType)}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        selectedPersonality === type
                          ? `border-purple-400 bg-gradient-to-r ${personality.color} shadow-lg`
                          : 'border-purple-400/30 bg-white/10 hover:bg-white/20'
                      }`}
                    >
                      <div className="flex items-start">
                        <div className="text-4xl mr-4">{personality.emoji}</div>
                        <div className="flex-1">
                          <h3 className="text-white text-xl font-bold mb-2">{personality.name}</h3>
                          <p className="text-white/80 text-sm mb-3">{personality.description}</p>
                          <div className="space-y-1">
                            {personality.traits.map((trait) => (
                              <div key={trait.id} className="text-white/60 text-xs">
                                • {trait.name}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex space-x-4 mt-8">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex-1 bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all"
              >
                Back
              </button>
            )}
            <button
              onClick={handleContinue}
              disabled={
                (step === 1 && !name) ||
                (step === 2 && !selectedStyle) ||
                (step === 3 && !selectedPersonality)
              }
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-lg flex items-center justify-center"
            >
              {step === 3 ? 'Begin Journey' : 'Continue'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

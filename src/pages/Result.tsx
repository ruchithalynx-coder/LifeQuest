import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Trophy, TrendingUp, RotateCcw, Award, Star, Zap, ArrowRight } from 'lucide-react'
import { getLevelForXP } from '../data/badges'
import { badges } from '../data/badges'

export default function Result() {
  const navigate = useNavigate()
  const [stats, setStats] = useState({
    focus: 5,
    confidence: 5,
    discipline: 5,
    wisdom: 5,
    empathy: 5,
    max: 50,
  })
  const [avatar, setAvatar] = useState<any>(null)
  const [xp, setXp] = useState(0)
  const [levelInfo, setLevelInfo] = useState({ level: 1, name: 'Dreamer', xpToNext: 100 })
  const [earnedBadges, setEarnedBadges] = useState<string[]>([])

  useEffect(() => {
    // Load avatar from localStorage
    const savedAvatar = localStorage.getItem('avatar')
    const savedChoice = localStorage.getItem('lastSituationChoice')
    const savedXp = localStorage.getItem('totalXp')

    if (savedAvatar) setAvatar(JSON.parse(savedAvatar))
    if (savedXp) setXp(parseInt(savedXp))

    // Calculate level
    const levelData = getLevelForXP(savedXp ? parseInt(savedXp) : 0)
    setLevelInfo(levelData)

    if (savedChoice) {
      const choice = JSON.parse(savedChoice)
      // Apply stat impacts
      setStats(prev => ({
        ...prev,
        focus: prev.focus + (choice.statImpact.focus || 0),
        confidence: prev.confidence + (choice.statImpact.confidence || 0),
        discipline: prev.discipline + (choice.statImpact.discipline || 0),
        wisdom: prev.wisdom + (choice.statImpact.wisdom || 0),
        empathy: prev.empathy + (choice.statImpact.empathy || 0),
      }))

      // Add XP
      const xpGained = 50
      const newXp = (savedXp ? parseInt(savedXp) : 0) + xpGained
      setXp(newXp)
      localStorage.setItem('totalXp', newXp.toString())

      // Check for badge unlocks
      const newBadges: string[] = []
      if (stats.wisdom + (choice.statImpact.wisdom || 0) >= 30) {
        newBadges.push('deep-thinker')
      }
      if (stats.confidence + (choice.statImpact.confidence || 0) >= 30) {
        newBadges.push('confidence-king')
      }
      if (stats.discipline + (choice.statImpact.discipline || 0) >= 30) {
        newBadges.push('discipline-master')
      }
      if (stats.empathy + (choice.statImpact.empathy || 0) >= 30) {
        newBadges.push('empathy-sage')
      }
      setEarnedBadges(newBadges)
    }
  }, [])

  const handleContinue = () => {
    navigate('/')
  }

  const handleRestart = () => {
    localStorage.clear()
    navigate('/')
  }

  const statColors = {
    focus: 'from-yellow-400 to-yellow-600',
    confidence: 'from-blue-400 to-blue-600',
    discipline: 'from-green-400 to-green-600',
    wisdom: 'from-purple-400 to-purple-600',
    empathy: 'from-pink-400 to-pink-600',
  }

  const statIcons = {
    focus: '🎯',
    confidence: '💪',
    discipline: '⚡',
    wisdom: '🧠',
    empathy: '❤️',
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="flex items-center justify-center mb-8">
            <Trophy className="w-12 h-12 text-yellow-300 mr-3" />
            <h1 className="text-4xl font-bold text-white">Your Growth</h1>
          </div>

          {avatar && (
            <div className="text-center mb-8">
              <p className="text-purple-200 text-lg">
                Well done, <span className="text-white font-bold">{avatar.name}</span>!
              </p>
              <p className="text-purple-300 text-sm mt-1">
                Your journey toward your goal continues...
              </p>
            </div>
          )}

          {/* Level and XP */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-6 mb-8 border border-yellow-400/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Star className="w-8 h-8 text-yellow-300 mr-3" />
                <div>
                  <div className="text-white font-bold text-xl">Level {levelInfo.level}</div>
                  <div className="text-yellow-200 text-sm">{levelInfo.name}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-bold">{xp} XP</div>
                <div className="text-yellow-200 text-sm">{levelInfo.xpToNext} XP to next level</div>
              </div>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-yellow-400 to-orange-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((xp / (xp + levelInfo.xpToNext)) * 100, 100)}%` }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {Object.entries(stats).filter(([key]) => key !== 'max').map(([stat, value]) => (
              <div
                key={stat}
                className="bg-white/20 rounded-xl p-4 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{statIcons[stat as keyof typeof statIcons]}</span>
                    <span className="text-white font-medium capitalize">{stat}</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-300 mr-1" />
                    <span className="text-white font-bold">{value as number}</span>
                  </div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div
                    className={`bg-gradient-to-r ${statColors[stat as keyof typeof statColors]} h-3 rounded-full transition-all duration-500`}
                    style={{ width: `${Math.min((value as number / stats.max) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Earned Badges */}
          {earnedBadges.length > 0 && (
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 mb-8 border border-purple-400/30">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-purple-300 mr-2" />
                <h3 className="text-white font-bold text-lg">Badges Earned!</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {earnedBadges.map(badgeId => {
                  const badge = badges.find(b => b.id === badgeId)
                  return badge ? (
                    <div key={badgeId} className="bg-white/10 rounded-lg p-4 text-center animate-in fade-in slide-in-from-bottom">
                      <div className="text-3xl mb-2">{badge.icon}</div>
                      <div className="text-white text-sm font-medium">{badge.name}</div>
                      <div className={`text-xs mt-1 ${
                        badge.rarity === 'legendary' ? 'text-yellow-400' :
                        badge.rarity === 'epic' ? 'text-purple-400' :
                        badge.rarity === 'rare' ? 'text-blue-400' :
                        'text-gray-400'
                      }`}>
                        {badge.rarity}
                      </div>
                    </div>
                  ) : null
                })}
              </div>
            </div>
          )}

          {/* Life Wisdom */}
          <div className="bg-white/20 rounded-xl p-6 mb-8">
            <h3 className="text-white font-bold text-lg mb-3 flex items-center">
              <Zap className="w-5 h-5 text-yellow-300 mr-2" />
              Life Wisdom
            </h3>
            <p className="text-purple-200 text-sm leading-relaxed">
              Every choice shapes who you become. Your stats reflect your journey's focus - 
              whether you prioritize helping others, achieving goals, or finding balance. 
              Keep growing and making meaningful choices!
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleContinue}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              Continue Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={handleRestart}
              className="flex-1 bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              New Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

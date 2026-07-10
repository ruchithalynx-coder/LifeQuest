import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Award, Lock, Star, TrendingUp, ArrowLeft, Zap } from 'lucide-react'
import { badges, getLevelForXP } from '../data/badges'
import { unlocks, getUnlockRequirements } from '../data/unlocks'
import { avatarStyles } from '../data/avatarStyles'

export default function Achievements() {
  const navigate = useNavigate()
  const [xp, setXp] = useState(0)
  const [levelInfo, setLevelInfo] = useState({ level: 1, name: 'Dreamer', xpToNext: 100 })
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([])
  const [unlockedStyles, setUnlockedStyles] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState<'badges' | 'unlocks' | 'stats'>('badges')

  useEffect(() => {
    const savedXp = localStorage.getItem('totalXp')
    const savedBadges = localStorage.getItem('unlockedBadges')
    const savedStyles = localStorage.getItem('unlockedStyles')

    if (savedXp) {
      setXp(parseInt(savedXp))
      const levelData = getLevelForXP(parseInt(savedXp))
      setLevelInfo(levelData)
    }

    if (savedBadges) setUnlockedBadges(JSON.parse(savedBadges))
    if (savedStyles) setUnlockedStyles(JSON.parse(savedStyles))
  }, [])

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-yellow-400 to-amber-500'
      case 'epic': return 'from-purple-400 to-violet-500'
      case 'rare': return 'from-blue-400 to-cyan-500'
      default: return 'from-gray-400 to-gray-500'
    }
  }

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'border-yellow-400'
      case 'epic': return 'border-purple-400'
      case 'rare': return 'border-blue-400'
      default: return 'border-gray-400'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate('/')}
              className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center">
              <Award className="w-10 h-10 text-yellow-300 mr-3" />
              <h1 className="text-3xl font-bold text-white">Achievements</h1>
            </div>
            <div className="w-10" />
          </div>

          {/* Level overview */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-6 mb-8 border border-yellow-400/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="w-10 h-10 text-yellow-300 mr-4" />
                <div>
                  <div className="text-white font-bold text-2xl">Level {levelInfo.level}</div>
                  <div className="text-yellow-200">{levelInfo.name}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-bold text-xl">{xp} XP</div>
                <div className="text-yellow-200 text-sm">{levelInfo.xpToNext} XP to next level</div>
              </div>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4 mt-4">
              <div
                className="bg-gradient-to-r from-yellow-400 to-orange-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((xp / (xp + levelInfo.xpToNext)) * 100, 100)}%` }}
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-2 mb-8">
            <button
              onClick={() => setActiveTab('badges')}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                activeTab === 'badges'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/20 text-white/70 hover:bg-white/30'
              }`}
            >
              <Award className="w-5 h-5 inline mr-2" />
              Badges ({unlockedBadges.length}/{badges.length})
            </button>
            <button
              onClick={() => setActiveTab('unlocks')}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                activeTab === 'unlocks'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/20 text-white/70 hover:bg-white/30'
              }`}
            >
              <Lock className="w-5 h-5 inline mr-2" />
              Unlocks
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                activeTab === 'stats'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/20 text-white/70 hover:bg-white/30'
              }`}
            >
              <TrendingUp className="w-5 h-5 inline mr-2" />
              Stats
            </button>
          </div>

          {/* Content */}
          {activeTab === 'badges' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {badges.map((badge) => {
                const isUnlocked = unlockedBadges.includes(badge.id)
                return (
                  <div
                    key={badge.id}
                    className={`bg-white/10 rounded-xl p-4 text-center border-2 transition-all ${
                      isUnlocked
                        ? `border-${getRarityBorder(badge.rarity).split('-')[1]}-400 bg-gradient-to-br ${getRarityColor(badge.rarity)}/20`
                        : 'border-gray-600/30 opacity-60'
                    }`}
                  >
                    <div className="text-4xl mb-2">{isUnlocked ? badge.icon : '🔒'}</div>
                    <div className="text-white font-medium text-sm mb-1">{badge.name}</div>
                    <div className={`text-xs ${
                      badge.rarity === 'legendary' ? 'text-yellow-400' :
                      badge.rarity === 'epic' ? 'text-purple-400' :
                      badge.rarity === 'rare' ? 'text-blue-400' :
                      'text-gray-400'
                    }`}>
                      {badge.rarity}
                    </div>
                    <div className="text-white/60 text-xs mt-2">{badge.description}</div>
                    {!isUnlocked && (
                      <div className="text-white/40 text-xs mt-2">
                        Progress: {badge.progress}/{badge.required}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {activeTab === 'unlocks' && (
            <div className="space-y-4">
              {/* Avatar Styles */}
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                  <Zap className="w-5 h-5 text-yellow-300 mr-2" />
                  Avatar Styles
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {avatarStyles.map((style) => {
                    const isUnlocked = unlockedStyles.includes(style.id) || style.rarity === 'common'
                    return (
                      <div
                        key={style.id}
                        className={`bg-white/10 rounded-xl p-4 text-center border-2 transition-all ${
                          isUnlocked
                            ? `border-purple-400 bg-purple-500/20`
                            : 'border-gray-600/30 opacity-60'
                        }`}
                      >
                        <div className="text-4xl mb-2">{isUnlocked ? style.emoji : '🔒'}</div>
                        <div className="text-white font-medium text-sm">{style.name}</div>
                        <div className={`text-xs mt-1 ${
                          style.rarity === 'legendary' ? 'text-yellow-400' :
                          style.rarity === 'epic' ? 'text-purple-400' :
                          style.rarity === 'rare' ? 'text-blue-400' :
                          'text-gray-400'
                        }`}>
                          {style.rarity}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Other Unlocks */}
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">Features & Worlds</h3>
                <div className="space-y-3">
                  {unlocks.filter(u => u.type !== 'avatar_style' && u.type !== 'personality_evolution').map((unlock) => {
                    const requirements = getUnlockRequirements(unlock.id)
                    const canUnlock = levelInfo.level >= requirements.level
                    return (
                      <div
                        key={unlock.id}
                        className={`bg-white/10 rounded-lg p-4 border-2 transition-all ${
                          unlock.unlocked
                            ? 'border-green-400 bg-green-500/20'
                            : canUnlock
                            ? 'border-yellow-400 bg-yellow-500/20'
                            : 'border-gray-600/30 opacity-60'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium">{unlock.name}</div>
                            <div className="text-white/60 text-sm">{unlock.description}</div>
                          </div>
                          <div className="text-2xl">
                            {unlock.unlocked ? '✅' : canUnlock ? '🔓' : '🔒'}
                          </div>
                        </div>
                        {!unlock.unlocked && (
                          <div className="text-white/40 text-xs mt-2">
                            Requires: Level {requirements.level}
                            {requirements.badges.length > 0 && ` + ${requirements.badges.join(', ')}`}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-green-300 mr-2" />
                Overall Progress
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white">Total Badges Earned</span>
                  <span className="text-white font-bold">{unlockedBadges.length} / {badges.length}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-400 to-pink-500 h-3 rounded-full"
                    style={{ width: `${(unlockedBadges.length / badges.length) * 100}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white">Avatar Styles Unlocked</span>
                  <span className="text-white font-bold">{unlockedStyles.length + 1} / {avatarStyles.length}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-cyan-500 h-3 rounded-full"
                    style={{ width: `${((unlockedStyles.length + 1) / avatarStyles.length) * 100}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white">Current Level</span>
                  <span className="text-white font-bold">{levelInfo.level} / 50</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full"
                    style={{ width: `${(levelInfo.level / 50) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

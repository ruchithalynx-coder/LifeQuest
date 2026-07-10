import { useNavigate } from 'react-router-dom'
import { Sparkles, Heart } from 'lucide-react'

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
            <Heart className="w-20 h-20 text-pink-400" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-white mb-4">
          LifeQuest
        </h1>
        
        <p className="text-xl text-purple-200 mb-8">
          Embark on a journey of self-discovery. Make choices, build relationships, 
          and grow your character through life's challenges.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-white text-sm font-medium">Focus</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Sparkles className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <p className="text-white text-sm font-medium">Confidence</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Sparkles className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-white text-sm font-medium">Discipline</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="text-white text-sm font-medium">Wisdom</p>
          </div>
        </div>
        
        <button
          onClick={() => navigate('/avatar')}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Begin Your Journey
        </button>
      </div>
    </div>
  )
}

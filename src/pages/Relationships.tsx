import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Heart, ArrowRight, Plus, X } from 'lucide-react'
import { relationshipTypes } from '../data/relationships'
import { RelationshipType } from '../types/game'

interface Relationship {
  type: RelationshipType
  name: string
}

export default function Relationships() {
  const navigate = useNavigate()
  const [selectedRelationships, setSelectedRelationships] = useState<Relationship[]>([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [newRelationshipType, setNewRelationshipType] = useState<RelationshipType | ''>('')
  const [newRelationshipName, setNewRelationshipName] = useState('')

  const availableTypes = Object.keys(relationshipTypes) as RelationshipType[]

  const handleAddRelationship = () => {
    if (newRelationshipType && newRelationshipName) {
      setSelectedRelationships([...selectedRelationships, {
        type: newRelationshipType,
        name: newRelationshipName
      }])
      setNewRelationshipType('')
      setNewRelationshipName('')
      setShowAddModal(false)
    }
  }

  const handleRemoveRelationship = (index: number) => {
    setSelectedRelationships(selectedRelationships.filter((_, i) => i !== index))
  }

  const handleContinue = () => {
    if (selectedRelationships.length > 0) {
      localStorage.setItem('relationships', JSON.stringify(selectedRelationships))
      navigate('/goal')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-12 h-12 text-pink-300 mr-3" />
            <h1 className="text-4xl font-bold text-white">Choose Your Circle</h1>
          </div>

          <p className="text-pink-200 text-center mb-8 text-lg">
            Who are the most important people in your life? These relationships will shape your journey.
          </p>

          {/* Selected relationships */}
          <div className="mb-8">
            {selectedRelationships.length === 0 ? (
              <div className="text-center py-12 bg-white/10 rounded-xl border-2 border-dashed border-pink-400/30">
                <Heart className="w-12 h-12 text-pink-300 mx-auto mb-4" />
                <p className="text-pink-200">No relationships added yet</p>
                <p className="text-pink-300/60 text-sm mt-2">Add at least one important relationship</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedRelationships.map((rel, index) => {
                  const typeData = relationshipTypes[rel.type]
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-white/20 to-white/10 rounded-xl p-4 border border-white/20 relative group"
                    >
                      <button
                        onClick={() => handleRemoveRelationship(index)}
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500/80 hover:bg-red-600 rounded-full p-1"
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>
                      <div className="flex items-center">
                        <div className="text-3xl mr-4">{typeData.emoji}</div>
                        <div>
                          <div className="text-white font-bold">{rel.name}</div>
                          <div className="text-pink-200 text-sm">{typeData.name}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Add relationship button */}
          <button
            onClick={() => setShowAddModal(true)}
            className="w-full mb-8 bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center border-2 border-dashed border-pink-400/50 hover:border-pink-400"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Relationship
          </button>

          {/* Add relationship modal */}
          {showAddModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-6 max-w-md w-full border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Add Relationship</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-pink-200 text-sm font-medium mb-2">
                      Relationship Type
                    </label>
                    <select
                      value={newRelationshipType}
                      onChange={(e) => setNewRelationshipType(e.target.value as RelationshipType)}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-pink-400/30 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    >
                      <option value="">Select type...</option>
                      {availableTypes.map((type) => (
                        <option key={type} value={type}>
                          {relationshipTypes[type].emoji} {relationshipTypes[type].name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {newRelationshipType && (
                    <div className="bg-white/10 rounded-lg p-4 mb-4">
                      <p className="text-pink-200 text-sm">
                        {relationshipTypes[newRelationshipType].description}
                      </p>
                      <p className="text-pink-300/60 text-xs mt-2">
                        Impact: {relationshipTypes[newRelationshipType].impact}
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="block text-pink-200 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={newRelationshipName}
                      onChange={(e) => setNewRelationshipName(e.target.value)}
                      placeholder="Enter their name..."
                      className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-pink-300 border border-pink-400/30 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <button
                    onClick={() => {
                      setShowAddModal(false)
                      setNewRelationshipType('')
                      setNewRelationshipName('')
                    }}
                    className="flex-1 bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddRelationship}
                    disabled={!newRelationshipType || !newRelationshipName}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all disabled:cursor-not-allowed"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Continue button */}
          <button
            onClick={handleContinue}
            disabled={selectedRelationships.length === 0}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-lg flex items-center justify-center"
          >
            Continue to Goals
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

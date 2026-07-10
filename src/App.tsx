import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import AvatarCreation from './pages/AvatarCreation'
import Relationships from './pages/Relationships'
import GoalSelection from './pages/GoalSelection'
import DailyQuests from './pages/DailyQuests'
import LifeSituationPage from './pages/LifeSituation'
import Result from './pages/Result'
import Achievements from './pages/Achievements'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/avatar" element={<AvatarCreation />} />
        <Route path="/relationships" element={<Relationships />} />
        <Route path="/goal" element={<GoalSelection />} />
        <Route path="/quests" element={<DailyQuests />} />
        <Route path="/situation" element={<LifeSituationPage />} />
        <Route path="/result" element={<Result />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

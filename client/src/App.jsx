import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import LearningTracks from './pages/LearningTracks.jsx';
import Quiz from './pages/Quiz.jsx';
import Profile from './pages/Profile.jsx';
import Leaderboard from './pages/Leaderboard.jsx';
import LandingPage from './pages/LandingPage.jsx';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/learning-tracks" element={<LearningTracks />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/landingPage" element={<LandingPage />} />

      </Routes>
    </>
  );
}

export default App;

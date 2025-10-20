import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import LearningTracks from './pages/LearningTracks.jsx';
import Profile from './pages/Profile.jsx';
import Leaderboard from './pages/Leaderboard.jsx';
import LandingPage from './pages/LandingPage.jsx';
import CommunityForum from './pages/CommunityForum.jsx';
import MascotHome from './pages/MascotHome.jsx';
import Resources from './pages/Resources.jsx';
import Tutoring from './pages/Tutoring.jsx';
import Notes from './pages/Notes.jsx';
import VideoGuide from './pages/Video-guide.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/learning-tracks" element={<LearningTracks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/community-forum" element={<CommunityForum />} />
        <Route path="/mascot-home" element={<MascotHome />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/tutoring" element={<Tutoring />} />
      </Routes>
    </>
  );
}

export default App;

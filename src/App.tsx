import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartupAnimation from './components/StartupAnimation';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartupAnimation />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

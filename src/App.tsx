import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Experience from './pages/Experience';
import PropertyExperience from './pages/PropertyExperience';
import Living from './pages/Living';
import WhatsAppFloat from './components/WhatsAppFloat';
import OneEarthClub from './pages/OneEarthTribe';

function App() {
  return (
    <Router>
      <WhatsAppFloat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path='/living' element={<Living />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/one-earth-tribe" element={<OneEarthClub />} />
        <Route path="/property/:id/experience" element={<PropertyExperience />} />
      </Routes>
    </Router>
  );
}

export default App;

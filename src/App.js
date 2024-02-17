import Menu from "./Components/Menu";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Home from './Pages/Home';
import GenerateLetter from './Pages/GenerateLetter';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Donate from './Pages/Donate';
import Disclaimer from './Pages/Disclaimer';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Footer from './Components/Footer'
import './App.css';
import LoadingSpinner from "./Components/Loader";
import { lazy,Suspense } from "react";
const Home = lazy(() => import('./Pages/Home'));
function App() {

  return (
    <div className="App">
      <Router>
        <Menu />
        <Suspense fallback={<LoadingSpinner message={'Loading....'} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate-letter" element={<GenerateLetter />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

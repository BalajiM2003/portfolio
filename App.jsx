import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => window.scrollTo(0, 0);
    scrollToTop();

    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: false,
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.key]);

  return (
    <>
      <div className="bg-gradient-to-b from-black to-purple-900 w-full overflow-hidden">
        <Header />

        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;

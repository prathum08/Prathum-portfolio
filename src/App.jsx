import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { useEffect, useState } from "react";
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { ParticlesBackground } from './components/ParticlesBackground';
import { BackgroundMusic } from './components/BackgroundMusic';
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  const handleLoadingComplete = (shouldPlayMusic) => {
    setPlayMusic(shouldPlayMusic);
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-grey-100 relative`}
      >
        {/* Particles Background */}
        <ParticlesBackground />

        {/* Background Music Player */}
        <BackgroundMusic shouldAutoPlay={playMusic} />

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
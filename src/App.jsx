import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { useEffect, useState } from "react";
import { Navbar } from './components/Navbar';
import "./index.css";

function App() {
  const [isLoaded , setIsLoaded] = useState(false); 
  return (
    <>
    {
      !isLoaded && <LoadingScreen onComplete = {() => setIsLoaded (true)} />
    }{" "}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-grey-100`}>

      <Navbar />

    </div>

    </>
  );
}

export default App

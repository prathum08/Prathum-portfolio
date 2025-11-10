import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Play, Pause, Music } from "lucide-react";

export const BackgroundMusic = ({ shouldAutoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3); // Default 30% volume
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef(null);

  // Handle auto-play based on user preference
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    // Only try to play if user said yes
    if (shouldAutoPlay) {
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            // Autoplay was prevented - this is normal and expected
            // Show controls to let user start manually
            if (error.name === 'NotAllowedError') {
              // Silently handle - this is expected browser behavior
              setShowControls(true);
            } else {
              // Log other unexpected errors
              console.error("Unexpected audio error:", error);
            }
          });
      }
    }

    // Cleanup
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [shouldAutoPlay]);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Error playing audio:", error);
      });
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        preload="auto"
      >
        {/* 
          IMPORTANT: Replace this URL with your actual music file
          
          Options:
          1. Put music file in /public/music/background-music.mp3
             Then use: src="/music/background-music.mp3"
          
          2. Use a direct URL from a hosting service
             src="https://your-cdn.com/music.mp3"
          
          For now, using a placeholder - you MUST replace this!
        */}
        <source src="/music/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating Music Control Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
      >
        {/* Main control button */}
        <motion.button
          onClick={() => setShowControls(!showControls)}
          className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated music icon */}
          <motion.div
            animate={isPlaying ? {
              scale: [1, 1.2, 1],
            } : {}}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Music size={24} />
          </motion.div>

          {/* Playing indicator */}
          {isPlaying && (
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          )}
        </motion.button>

        {/* Expanded Controls Panel */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute bottom-full right-0 mb-4 bg-black/90 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-2xl min-w-[200px]"
            >
              {/* Close button */}
              <button
                onClick={() => setShowControls(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>

              <div className="space-y-4">
                {/* Title */}
                <div className="text-center mb-2">
                  <h3 className="text-white font-semibold text-sm">Background Music</h3>
                  <p className="text-gray-400 text-xs mt-1">Control the vibe 🎵</p>
                </div>

                {/* Play/Pause Button */}
                <motion.button
                  onClick={togglePlay}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? (
                    <>
                      <Pause size={18} />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play size={18} />
                      Play
                    </>
                  )}
                </motion.button>

                {/* Volume Control */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Volume</span>
                    <motion.button
                      onClick={toggleMute}
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX size={18} />
                      ) : (
                        <Volume2 size={18} />
                      )}
                    </motion.button>
                  </div>

                  {/* Volume Slider */}
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(isMuted ? 0 : volume) * 100}%, #374151 ${(isMuted ? 0 : volume) * 100}%, #374151 100%)`,
                    }}
                  />

                  {/* Volume Percentage */}
                  <div className="text-center text-xs text-gray-400">
                    {Math.round((isMuted ? 0 : volume) * 100)}%
                  </div>
                </div>

                {/* Info text */}
                <p className="text-xs text-gray-500 text-center mt-2">
                  Enjoy the music while you explore! 🎧
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Custom slider styles */}
      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
        }
      `}</style>
    </>
  );
};
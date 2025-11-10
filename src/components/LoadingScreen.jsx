import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Volume2, VolumeX } from "lucide-react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [showMusicPrompt, setShowMusicPrompt] = useState(false);
  const fullText = "<Hello World Future is Here />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        // Show music prompt after loading text is complete
        setTimeout(() => {
          setShowMusicPrompt(true);
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleMusicChoice = (playMusic) => {
    // Call onComplete with the user's music preference
    onComplete(playMusic);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      {/* Loading Text */}
      <AnimatePresence>
        {!showMusicPrompt && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="mb-4 text-4xl font-mono font-bold">
              {text} <span className="animate-blink ml-1">|</span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
              <div className="w-10 h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Prompt Dialog */}
      <AnimatePresence>
        {showMusicPrompt && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="max-w-md w-full mx-4"
          >
            {/* Card */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
              {/* Icon */}
              <motion.div
                className="flex justify-center mb-6"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <Music size={40} className="text-white" />
                </div>
              </motion.div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Enhance Your Experience
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-center mb-8 text-sm md:text-base">
                Would you like to play background music while exploring the portfolio?
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Yes Button */}
                <motion.button
                  onClick={() => handleMusicChoice(true)}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 rounded-xl font-medium shadow-lg hover:shadow-blue-500/50 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Volume2 size={20} />
                  <span>Yes, Play Music</span>
                </motion.button>

                {/* No Button */}
                <motion.button
                  onClick={() => handleMusicChoice(false)}
                  className="flex-1 flex items-center justify-center gap-2 bg-white/5 border-2 border-white/20 text-gray-300 py-4 px-6 rounded-xl font-medium hover:bg-white/10 hover:border-white/30 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <VolumeX size={20} />
                  <span>No, Silent Mode</span>
                </motion.button>
              </div>

              {/* Info Text */}
              <p className="text-xs text-gray-500 text-center mt-6">
                You can change this later using the music button
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
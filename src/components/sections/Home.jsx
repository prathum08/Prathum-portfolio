import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Code, Sparkles, Zap } from "lucide-react";

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pb-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-purple-950 opacity-50" />
      
      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-500/30 rounded-full filter blur-3xl animate-blob animation-delay-4000" />

      {/* Floating icons */}
      <motion.div
        className="absolute top-20 right-20 text-blue-500/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Code size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-purple-500/20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={50} />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-10 text-cyan-500/20"
        animate={{
          x: [0, 20, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Zap size={55} />
      </motion.div>

      <motion.div
        className="text-center z-10 px-4 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-15">
          <span className="text-blue-400 text-lg font-medium">👋 Welcome to my portfolio</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Hello, I'm Prathum Bhangadia
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="text-2xl md:text-4xl font-semibold mb-8 h-20">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              2000,
              "Web Designer",
              2000,
              "Problem Solver",
              2000,
              "Tech Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I'm a full-stack developer who loves crafting clean, scalable web
          applications. My goal is to build solutions that offer both exceptional
          performance and a delightful user experience.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-8 rounded-full font-medium overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            className="relative border-2 border-blue-500/50 text-blue-400 py-4 px-8 rounded-full font-medium backdrop-blur-sm bg-blue-500/5"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(59, 130, 246, 1)",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll indicator - Hidden on mobile, visible on desktop */}
        <motion.div
          className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="flex flex-col items-center"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="text-blue-400 text-xs font-medium mb-2 tracking-wider">SCROLL DOWN</div>
            <div className="w-6 h-10 border-2 border-blue-400/60 rounded-full flex justify-center relative">
              <motion.div
                className="w-1.5 h-3 bg-blue-400 rounded-full mt-2"
                animate={{
                  y: [0, 12, 0],
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
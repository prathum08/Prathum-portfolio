import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projectRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const tiltOptions = {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.4,
      scale: 1.02,
    };

    projectRefs.forEach((ref) => {
      if (ref.current) {
        VanillaTilt.init(ref.current, tiltOptions);
      }
    });

    return () => {
      projectRefs.forEach((ref) => {
        if (ref.current) {
          ref.current.vanillaTilt?.destroy();
        }
      });
    };
  }, []);

  const projects = [
    {
      title: "Expense Tracker",
      description:
        "A simple expense tracker to manage and visualize daily spending efficiently with interactive charts and data insights.",
      techs: ["HTML", "CSS", "Javascript", "Graph Visualizer"],
      gradient: "from-blue-500/10 to-cyan-500/5",
      borderGradient: "from-blue-500 to-cyan-500",
      ref: projectRefs[0],
    },
    {
      title: "Fake News Detection",
      description:
        "Developed a Fake News Detection Model using Random Forest, Logistic Regression, and Gradient Boosting for accurate classification.",
      techs: ["Python", "Logistic Regression", "Gradient Boosting", "Flask"],
      gradient: "from-purple-500/10 to-pink-500/5",
      borderGradient: "from-purple-500 to-pink-500",
      ref: projectRefs[1],
    },
    {
      title: "Investify",
      description:
        "A Full Stack Website to Promote Paper Trading and its awareness with real-time market data simulation.",
      techs: ["ReactJS", "NodeJS", "SQL", "Graph"],
      gradient: "from-cyan-500/10 to-blue-500/5",
      borderGradient: "from-cyan-500 to-blue-500",
      ref: projectRefs[2],
    },
    {
      title: "WanderLust",
      description:
        "A Full Stack Web Application For Booking and Planning vacations, includes reservation making and planning guides.",
      techs: ["ReactJS", "Bootstrap", "NodeJS", "ExpressJS"],
      gradient: "from-pink-500/10 to-purple-500/5",
      borderGradient: "from-pink-500 to-purple-500",
      ref: projectRefs[3],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      
      <motion.div
        className="absolute -left-40 top-1/4 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent inline-block"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-gray-400 mt-4 text-lg">
            Here are some of my recent works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              ref={project.ref}
              className={`group relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br ${project.gradient} border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden`}
            >
              {/* Animated border gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Glowing effect on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${project.borderGradient} opacity-0 blur-xl`}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <motion.h3
                    className="text-2xl font-bold text-white"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <div className="flex gap-2">
                    <motion.button
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} className="text-gray-400 hover:text-white transition-colors" />
                    </motion.button>
                    <motion.button
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} className="text-gray-400 hover:text-white transition-colors" />
                    </motion.button>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className={`bg-gradient-to-r ${project.borderGradient} bg-clip-text text-transparent font-medium py-2 px-4 rounded-full text-sm border border-white/10 bg-white/5`}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "rgba(255, 255, 255, 0.3)",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Animated corner decoration */}
                <motion.div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.borderGradient} opacity-10 rounded-bl-full`}
                  whileHover={{ scale: 1.5, opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${project.borderGradient} opacity-10 rounded-tr-full`}
                  whileHover={{ scale: 1.5, opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/prathum08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
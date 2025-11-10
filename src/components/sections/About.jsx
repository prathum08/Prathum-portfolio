import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { GraduationCap, Briefcase, Code2, Database } from "lucide-react";

export const About = () => {
  const tiltRef1 = useRef(null);
  const tiltRef2 = useRef(null);
  const tiltRef3 = useRef(null);
  const tiltRef4 = useRef(null);

  useEffect(() => {
    const tiltOptions = {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
      scale: 1.05,
    };

    if (tiltRef1.current) VanillaTilt.init(tiltRef1.current, tiltOptions);
    if (tiltRef2.current) VanillaTilt.init(tiltRef2.current, tiltOptions);
    if (tiltRef3.current) VanillaTilt.init(tiltRef3.current, tiltOptions);
    if (tiltRef4.current) VanillaTilt.init(tiltRef4.current, tiltOptions);

    return () => {
      if (tiltRef1.current) tiltRef1.current.vanillaTilt?.destroy();
      if (tiltRef2.current) tiltRef2.current.vanillaTilt?.destroy();
      if (tiltRef3.current) tiltRef3.current.vanillaTilt?.destroy();
      if (tiltRef4.current) tiltRef4.current.vanillaTilt?.destroy();
    };
  }, []);

  const frontendSkills = ["React", "Tailwind", "Bootstrap", "CSS"];
  const backendSkills = ["Nodejs", "Express", "MongoDB", "SQL"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
      
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block"
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
            About Me
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          ref={tiltRef1}
          className="rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all backdrop-blur-sm bg-gradient-to-br from-blue-500/5 to-purple-500/5 mb-8"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a developer with a strong academic background, a passion for machine learning, and an active interest in sports. When I’m not building projects, you'll find me exploring new hobbies, staying active, and learning how technology can solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* <motion.div
            variants={itemVariants}
            ref={tiltRef2}
            className="rounded-2xl p-8 backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 hover:border-blue-500/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Code2 className="text-blue-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((tech, key) => (
                <motion.span
                  key={key}
                  className="bg-blue-500/20 text-blue-300 py-2 px-4 rounded-full text-sm font-medium border border-blue-500/30"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(59, 130, 246, 0.3)",
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div> */}

          {/* <motion.div
            variants={itemVariants}
            ref={tiltRef3}
            className="rounded-2xl p-8 backdrop-blur-sm bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Database className="text-purple-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((tech, key) => (
                <motion.span
                  key={key}
                  className="bg-purple-500/20 text-purple-300 py-2 px-4 rounded-full text-sm font-medium border border-purple-500/30"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(168, 85, 247, 0.3)",
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={itemVariants}
            ref={tiltRef2}
            className="p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <GraduationCap className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex flex-col">
                <strong className="text-white text-lg">
                  B.Tech in Computer Science
                </strong>
                <span className="text-cyan-400">VIT Bhopal University</span>
                <span className="text-sm text-gray-400">2022 - 2026</span>
              </li>
              <li className="text-gray-300">
                <strong>Relevant Coursework:</strong> Data Structure, Web
                Development, Cloud Computing
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            ref={tiltRef4}
            className="p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-pink-500/10 to-purple-500/5 border border-pink-500/20 hover:border-pink-500/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-pink-500/20 rounded-lg">
                <Briefcase className="text-pink-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>
            <div className="space-y-6 text-gray-300">
              <motion.div
                whileHover={{ x: 5 }}
                className="border-l-2 border-pink-500/50 pl-4"
              >
                <h4 className="font-semibold text-white text-lg">
                  Freaking Minds
                </h4>
                <p className="text-pink-400">Content Writing and Digital Marketing</p>
                <p className="text-sm text-gray-400">2022 - 2023</p>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="border-l-2 border-pink-500/50 pl-4"
              >
                <h4 className="font-semibold text-white text-lg">
                  Team Lead in Project Exhibition
                </h4>
                <p className="text-pink-400">
                  Worked and Developed a Hostel Accommodation Website
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
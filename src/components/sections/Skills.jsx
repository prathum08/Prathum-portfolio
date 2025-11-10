import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { 
  Code2, 
  Database, 
  Cloud, 
  Wrench, 
  Palette, 
  GitBranch,
  Box,
  Terminal
} from "lucide-react";

export const Skills = () => {
  const tiltRefs = Array.from({ length: 8 }, () => useRef(null));

  useEffect(() => {
    const tiltOptions = {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
      scale: 1.05,
    };

    tiltRefs.forEach((ref) => {
      if (ref.current) {
        VanillaTilt.init(ref.current, tiltOptions);
      }
    });

    return () => {
      tiltRefs.forEach((ref) => {
        if (ref.current) {
          ref.current.vanillaTilt?.destroy();
        }
      });
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="text-blue-400" size={28} />,
      gradient: "from-blue-500/10 to-cyan-500/5",
      borderColor: "border-blue-500/20 hover:border-blue-500/40",
      skills: [
        { name: "React", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "HTML5/CSS3", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Beginner" },
      ],
    },
    {
      title: "Backend Development",
      icon: <Database className="text-purple-400" size={28} />,
      gradient: "from-purple-500/10 to-pink-500/5",
      borderColor: "border-purple-500/20 hover:border-purple-500/40",
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "MongoDB", level: "Beginner" },
        { name: "SQL", level: "Intermediate" },
        { name: "REST APIs", level: "Intermediate" },
      ],
    },
    {
      title: "Programming Languages",
      icon: <Terminal className="text-green-400" size={28} />,
      gradient: "from-green-500/10 to-emerald-500/5",
      borderColor: "border-green-500/20 hover:border-green-500/40",
      skills: [
        { name: "JavaScript", level: "Intermediate" },
        { name: "Python", level: "Beginner" },
        { name: "C++", level: "Advance" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="text-orange-400" size={28} />,
      gradient: "from-orange-500/10 to-red-500/5",
      borderColor: "border-orange-500/20 hover:border-orange-500/40",
      skills: [
        { name: "Git & GitHub", level: "Intermediate" },
        { name: "VS Code", level: "Advanced" },
        { name: "Docker", level: "Beginner" },
        { name: "Postman", level: "Intermediate" },
        { name: "NPM/Yarn", level: "Intermediate" },
        { name: "Docker", level: "Beginner" },
      ],
    },
    {
      title: "Cloud & Deployment",
      icon: <Cloud className="text-cyan-400" size={28} />,
      gradient: "from-cyan-500/10 to-blue-500/5",
      borderColor: "border-cyan-500/20 hover:border-cyan-500/40",
      skills: [
        { name: "AWS", level: "Beginner" },
        { name: "Vercel", level: "Intermediate" },
        { name: "GitHub Pages", level: "Beginner" },
      ],
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="text-pink-400" size={28} />,
      gradient: "from-pink-500/10 to-rose-500/5",
      borderColor: "border-pink-500/20 hover:border-pink-500/40",
      skills: [
        { name: "Figma", level: "Beginner" },
        { name: "Responsive Design", level: "Beginner" },
        { name: "User Experience", level: "Beginner" },
      ],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="text-indigo-400" size={28} />,
      gradient: "from-indigo-500/10 to-purple-500/5",
      borderColor: "border-indigo-500/20 hover:border-indigo-500/40",
      skills: [
        { name: "Git", level: "Intermediate" },
        { name: "GitHub", level: "Intermediate" },
        { name: "Pull Requests", level: "Beginner" },
      ],
    },
    {
      title: "Other Skills",
      icon: <Box className="text-yellow-400" size={28} />,
      gradient: "from-yellow-500/10 to-amber-500/5",
      borderColor: "border-yellow-500/20 hover:border-yellow-500/40",
      skills: [
        { name: "Problem Solving", level: "Intermediate" },
        { name: "Data Structures", level: "Intermediate" },
        { name: "Algorithms", level: "Intermediate" },
        { name: "Web Security", level: "Beginner" },
        { name: "Agile/Scrum", level: "Beginner" },
      ],
    },
  ];

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

  const getSkillLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "text-green-400";
      case "Intermediate":
        return "text-yellow-400";
      case "Beginner":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      {/* Animated background shapes */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
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
        className="max-w-7xl mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
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
            Technical Skills
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-gray-400 mt-4 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              ref={tiltRefs[index]}
              className={`rounded-2xl p-6 backdrop-blur-sm bg-gradient-to-br ${category.gradient} border ${category.borderColor} transition-all`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/5 rounded-lg">{category.icon}</div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center justify-between"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-gray-300 text-sm">{skill.name}</span>
                    <span
                      className={`text-xs font-medium ${getSkillLevelColor(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Level Legend */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center gap-6 flex-wrap"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="text-gray-400 text-sm">Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <span className="text-gray-400 text-sm">Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <span className="text-gray-400 text-sm">Beginner</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
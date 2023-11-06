import React, { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const projects = [
    {
      title: "Budget App",
      subtitle:
        "En sida för att hålla koll på sina utgifter. Var ursprunglingen en gruppuppgift som jag senare fortsatte att utveckla på. Work in progress.",
    },
    {
      title: "Nyhets sida",
      subtitle:
        "Nyhetssida",
    },
    {
      title: "WIP",
      subtitle: "Work in progress",
    },
  ];

  return (
    <section id="projects" className="pt-48 pb-48">
      <div className="md:w-2/5 mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div>
            <p className="font-playfair font-semibold text-4xl mb-24">
              <span className="text-black">PROJECTS</span>
            </p>
            <div className="flex justify-center mt-5"></div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mx-auto group h-96"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-black cursor-pointer p-8 rounded-xl flex flex-col items-center justify-between"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
            initial={{ scale: 1 }}
            animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
            variants={projectVariant}
          >
            <h4 className="uppercase text-xl font-playfair overflow-hidden">
              {project.title}
            </h4>
            <p className="text-sm leading-7 my-3 font-playfair overflow-hidden">
              {project.subtitle}
            </p>
            <button className="bg-beige text-black py-2.5 px-8 rounded-full">
              GitHub
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
import useMediaQuery from "./hooks/useMediaQuery";
import Line from "./components/Line";
import DotGroup from "./scenes/DotGroup";
import Experience from "./scenes/Experience";
import Skills from "./scenes/Skills";
import Landing from "./scenes/Landing";
import Navbar from "./scenes/Navbar";
import Contact from "./scenes/Contact";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Projects from "./scenes/Projects";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="App">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
        <div className="w-full mx-auto md:h-full ">
          <Line />
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("skills")}
          >
            <Skills />
          </motion.div>
        </div>
      </div>
      <div className="w-5/6 mx-auto md:h-5/6">
        <Line />
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("experience")}
        >
          <Experience />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-5/6 mt-44">
        <Line />
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-5/6 mt-44">
        <Line />
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("Contact")}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}

export default App;

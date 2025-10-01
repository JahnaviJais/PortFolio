import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";;
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>My Skills</p>
        <h3 className={styles.sectionHeadText}>Technologies</h3>
      </motion.div>

      {/* ✅ Desktop Version — visible on md and above */}
      <div className="hidden md:flex flex-row flex-wrap justify-center gap-10 mt-8">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* ✅ Mobile Version — visible below md */}
      <div className="flex md:hidden flex-row flex-wrap justify-center gap-6 mt-8">
        {technologies.map((tech) => (
          <div className="p-3 rounded-full bg-white w-20 h-20 flex items-center justify-center" key={tech.name}>
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-auto filter brightness-125"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

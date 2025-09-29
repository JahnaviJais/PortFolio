import {BallCanvas} from "./canvas"
import {SectionWrapper} from '../hoc'
import {technologies} from "../constants"
import { motion } from "framer-motion";
import {styles} from '../styles'

const Tech = () => {
  return (
    <>
    <motion.div>
        <p className={styles.sectionSubText}>My Skills</p>
        <h3 className={styles.sectionHeadText}>My Skills</h3>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map((technology) => (
      <div className="w-28 h-28" key={technology.name}>
        <BallCanvas icon= {technology.icon}
        />
      </div>
    ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "")
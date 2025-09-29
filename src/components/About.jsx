
import { motion } from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className= 'xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
      <div
        options = {{
          max: 45,
          scale: 1,
          speed: 450
        }} 
        className='bg-tertiary rounded-[20px] py05 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
      <img src={icon} alt={title} className='w-16 h-16 object-contain' />
      <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

      </div>

      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h3 className={styles.sectionHeadText}>Overview</h3>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I am a passionate software developer with a keen interest in building efficient, scalable, and impactful web applications. With a strong foundation in Data Structures, C++, and full-stack development technologies like React, Node.js, and MongoDB, I enjoy solving real-world problems through code. I’m constantly exploring new technologies—currently diving into Generative AI and chatbot development. I believe in continuous learning, clean code, and creating user-friendly digital experiences.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
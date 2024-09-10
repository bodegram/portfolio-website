import React, { Fragment } from 'react'
import Header from '../components/Header'
import { FaCaretRight, FaFacebook, FaInstagram, FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { motion } from "framer-motion"

export default function Home() {
  const summaryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Fragment>
      <Header />
      <section className='px-[18px] lg:px-[150px] py-5'>
        <div className='text-[24px] font-bold tracking-widest mb-2'>I'm <span className='text-[tomato]'>Awofisan Samuel</span></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={summaryVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className='mb-2 font-bold'>Fullstack and Mobile Engineer</div>
        
        <div className='mb-1'>As a versatile and skilled Full Stack Engineer and Mobile Engineer, I bring a comprehensive skill set and a passion for developing innovative solutions across both web and mobile platforms. With extensive experience in designing, building, and deploying complex applications, I excel in creating seamless user experiences and robust back-end systems.</div>
        <div className='mb-1'>My expertise spans a range of technologies and frameworks, including JavaScript, React, Node.js, and various mobile development tools such as React Native. I am adept at managing the full software development lifecycle, from initial concept through to deployment and maintenance. My approach combines strong technical acumen with a commitment to delivering high-quality, scalable solutions that meet user needs and business goals.</div>
        <div className='mb-4'>In addition to my technical skills, I am a proactive problem-solver who thrives in collaborative environments. I stay current with industry trends and best practices, continuously seeking to enhance my skill set and contribute to innovative projects. Whether developing cutting-edge web applications or crafting intuitive mobile experiences, I am dedicated to driving success and delivering exceptional results.</div>
        </motion.div>
        <Link className='flex gap-1 mb-3'>
          <div>See more about me </div>
          <div className='mt-1'><FaCaretRight color='tomato' /></div>
        </Link>
        <div className='flex gap-2'>
          <a href=""><FaFacebook color='blue' /></a>
          <a href=""><FaInstagram color='red' /></a>
          <a href=""><FaX color='black' /></a>
        </div>
      </section>
    
      <Footer />
    </Fragment>
  )
}

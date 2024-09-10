import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'

export default function Header() {
  const [toggleNav, setToggleNav] = useState(false)
  const handleToggleNav = () =>{
    setToggleNav(!toggleNav)
  }
  return (
    <nav className='flex justify-between px-[18px] lg:px-[150px] py-5'>
      <div>AS</div>
      <div className={toggleNav ? 'absolute top-[45px] left-[18px] lg:left-[150px] lg:right-[150px] right-[18px] z-50 bg-white h-fit w-auto py-5' : 'absolute top-[-100%] left-[18px] lg:left-[150px] lg:right-[150px] right-[18px] z-50 bg-white h-fit w-auto'}>
        <div className='mb-1'>
          <Link>About</Link>
        </div>
        <div className='mb-1'>
          <Link to='/projects'>Projects</Link>
        </div>
        <div className='mb-1'>
          <Link>Resume</Link>
        </div>
        <div>
          <Link>Contact</Link>
        </div>
      </div>
      <div>
          {toggleNav ? <FaTimes onClick={handleToggleNav} className='cursor-pointer'/> : <FaBars onClick={handleToggleNav} className='cursor-pointer'/>}
      </div>
    </nav>
  )
}

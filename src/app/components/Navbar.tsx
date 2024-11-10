import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='logo'>
      <h2>IQRA IKRAM</h2>
      </div>
      


      <div className='navigate'>
        <ul className='navigate'>
            <li><Link href= "/" className='link' >Home</Link></li>
           <li><Link href= "/about" className='link'>About</Link></li>
           <li><Link href= "/skills" className='link' >Skills</Link></li>
           <li><Link href= "/contact" className='link'>Contact</Link></li>
        </ul>
      </div>
      <div className='btn'>
        <button className='bt'>
            Download Cv
        </button>
      </div>
    </div>
  )
}

export default Navbar

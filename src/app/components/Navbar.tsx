import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='logo'>
      <h2>BJ</h2>
      </div>
      


      <div className='navigate'>
        <ul className='navigate'>
            <li><Link href= "/" className='link' >Home</Link></li>
           <li><Link href= "/about" className='link'>About Us</Link></li>
           <li><Link href= "/contact" className='link'>Contact Us</Link></li>
           <li><Link href= "/Product" className='link'>Product</Link></li>

        </ul>
      </div>
      <div className='btn'>
        <button className='bt'>
          Get More
        </button>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const hero = () => {
  return (
    <div  className='hero'>
      <div className='img'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwr6-3mgdHcpiVlG9abx1LdjPJLstDqx27hw&s" width="200" height="200" alt="" className='img' /></div>
      <div className='info-div'> <h1 className='name'> Hello <br /> I am , <br /> Iqra Ikram</h1></div>
      <div className='btn2'>
        <button className='bt'> <Link href="/">About Me</Link></button>
        <button className='bt'> <Link href="/">Contact Me</Link></button>
       
      </div>
      
    </div>
  )
}

export default hero

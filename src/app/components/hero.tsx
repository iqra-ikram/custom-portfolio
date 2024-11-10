import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const hero = () => {
  return (
    <div  className='hero'>
      <div className='img'><img src="https://discountstore.pk/cdn/shop/files/710xjNmRiNL.jpg?v=1721976830" width="200" height="200" alt="" className='img' /></div>
      <div className='info-div'> <h1 className='name'> A Fragrance for Every Moment</h1>
    </div>
      <div className='btn2'>
        <button className='bt'> <Link href="/">Order Now</Link></button>
        <button className='bt'> <Link href="/">Contact Us</Link></button>
       
      </div>
      
    </div>
  )
}

export default hero

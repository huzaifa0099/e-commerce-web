import React from 'react'
import bannerImg from "../../public/banner.png"
import Image from 'next/image'
import { FaShoppingBag } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='bg-PrimaryBG py-12 xl:px-28 px-4'>
      <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
        {/* Image  */}
      <div className='md:w-1/2'>
          <Image src={bannerImg} alt='Banner' />
        </div>
       
        <div className='md:w-1/2'>
        <h1 className='text-5xl font-light mb-5'>Collections</h1>
        <p className='text-xl mb-7'>you can explore ans shop many differnt collection
        from various barands here.</p>
        <button className='bg-Black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2'> <FaShoppingBag className='inline-flex' />   Shop Now</button>
        </div>
        
      </div>
    </div>

  )
}

export default Banner
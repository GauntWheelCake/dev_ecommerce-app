import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-300'>
            {/* Hero Left Side */}
            <div className='w-3/5 sm:w-1/2 flex items-center justify-center py-5 sm:py-2'>
                <div className='text-[#414141] text-center sm:text-left'>
                    <div className='flex items-center gap-2 justify-center sm:justify-start'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Furniture</h1>
                    <div className='flex items-center gap-2 justify-center sm:justify-start'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            {/* Hero Right Side */}
            <img className='w-2/5 sm:w-2/5' src={assets.hero_img1} alt="" />
        </div>
    )
}

export default Hero

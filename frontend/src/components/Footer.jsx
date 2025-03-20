import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Discover high-quality furniture designed to fit your home perfectly. Crafted with care, made for comfort.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2">
                    <h4 className="font-semibold text-lg text-gray-800">Company</h4>
                    <ul className="text-gray-600 space-y-1">
                        <li><a href="/about" className="hover:text-gray-500">About Us</a></li>
                        <li><a href="/collection" className="hover:text-gray-500">Our Collection</a></li>
                        <li><a href="#" className="hover:text-gray-500">Delivery Information</a></li>
                        <li><a href="#" className="hover:text-gray-500">Privacy Policy</a></li>
                    </ul>
                </div>


                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>group12@projectbaseddevelopment.com</li>
                    </ul>
                </div>

            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 202@ forever.com - All Right Reserved.</p>
            </div>

        </div>
    )
}

export default Footer

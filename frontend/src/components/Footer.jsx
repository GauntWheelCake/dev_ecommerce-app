import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <footer className="bg-blue-50 py-10 mt-10 border-t border-blue-200">
            {/* Footer Top */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-3 gap-10">
                
                {/* Brand Section */}
                <div className="space-y-4">
                    <img src={assets.logo} className="w-40" alt="Forever Logo" />
                    <p className="text-blue-800 text-sm">
                        Discover high-quality furniture designed to fit your home perfectly. Crafted with care, made for comfort.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2">
                    <h4 className="font-semibold text-lg text-blue-900">Company</h4>
                    <ul className="text-blue-800 space-y-1">
                        <li><a href="/about" className="hover:text-blue-700">About Us</a></li>
                        <li><a href="/collection" className="hover:text-blue-700">Our Collection</a></li>
                        <li><a href="/delivery" className="hover:text-blue-700">Delivery Information</a></li>
                        <li><a href="/privacy-policy" className="hover:text-blue-700">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="space-y-2">
                    <h4 className="font-semibold text-lg text-blue-900">Get in Touch</h4>
                    <p className="text-blue-800">+46-123-456-789</p>
                    <p className="text-blue-800">support@forever.com</p>
                    <div className="flex space-x-4 mt-3">
                        <a href="#" className="text-blue-800 hover:text-blue-700"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-blue-800 hover:text-blue-700"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-blue-800 hover:text-blue-700"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 text-center text-blue-600 text-sm border-t border-blue-200 pt-5">
                © 2024 Forever. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;

import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({cartList}) => {
    return (
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a href='#products-section'>Products</a></li>
                        <li><a href='#features-section'>Features</a></li>
                        <li><a href='#pricing-section'>Pricing</a></li>
                        <li><a href='#testimonials-section'>Testimonials</a></li>
                        <li><a href='#faq-section'>FAQ</a></li>
                    </ul>
                </div>
                <h2 className="text-2xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='#products-section'>Products</a></li>
                    <li><a href='#features-section'>Features</a></li>
                    <li><a href='#pricing-section'>Pricing</a></li>
                    <li><a href='#testimonials-section'>Testimonials</a></li>
                    <li><a href='#faq-section'>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-1">
                <div className='relative inline-block'>
                    <ShoppingCart className="w-6 h-6" /> 
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{cartList.length}</span>
                </div>
                <a className="px-4">Login</a>
                <a className="btn rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;
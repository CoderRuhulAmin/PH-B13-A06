import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#101727] text-white">
            <div className='flex flex-wrap flex-col text-center md:flex-row md:text-start justify-between gap-5 p-10'>
                <div className='flex-2'>
                    <h2 className="text-2xl font-extrabold mb-4">DigiTools</h2>
                    <p className='font-extralight'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <nav className='flex-1'>
                    <h6 className="footer-title">Services</h6>
                    <ul className='font-extralight space-y-1'>
                        <li><a className="link link-hover">Branding</a></li>
                        <li><a className="link link-hover">Design</a></li>
                        <li><a className="link link-hover">Marketing</a></li>
                        <li><a className="link link-hover">Advertisement</a></li>
                    </ul>
                </nav>
                <nav className='flex-1'>
                    <h6 className="footer-title">Company</h6>
                    <ul className='font-extralight space-y-1'>
                        <li><a className="link link-hover">About us</a></li>
                        <li><a className="link link-hover">Contact</a></li>
                        <li><a className="link link-hover">Jobs</a></li>
                        <li><a className="link link-hover">Press kit</a></li>
                    </ul>
                </nav>
                <nav className='flex-1'>
                    <h6 className="footer-title">Legal</h6>
                    <ul className='font-extralight space-y-1'>
                        <li><a className="link link-hover">Terms of use</a></li>
                        <li><a className="link link-hover">Privacy policy</a></li>
                        <li><a className="link link-hover">Cookie policy</a></li>
                    </ul>
                </nav>
                <nav className='flex-1'>
                    <h6 className="footer-title">Social Links</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a className='w-8 h-8 bg-base-100 rounded-full p-1.5 text-xl text-[#101727]'><AiFillInstagram /></a>
                        <a className='w-8 h-8 bg-base-100 rounded-full p-1.5 text-xl text-[#101727]'><FaFacebookSquare /></a>
                        <a className='w-8 h-8 bg-base-100 rounded-full p-1.5 text-xl text-[#101727]'><FaXTwitter /></a>
                        <a className='w-8 h-8 bg-base-100 rounded-full p-1.5 text-xl text-[#101727]'><FaYoutube /></a>
                    </div>
                </nav>
            </div>
            <div className='flex flex-wrap justify-between items-center border-t border-base-50 p-10'>
                <p className='font-extralight'>© {new Date().getFullYear()} - All right reserved.</p>
                <div className='flex justify-between items-center gap-4 font-extralight'>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Cookies</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
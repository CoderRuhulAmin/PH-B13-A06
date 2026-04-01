import React from 'react';

const Stats = () => {
    return (
        <section id='testimonials-section' className='stats w-full rounded-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-10 mt-20'>
            <div className="container mx-auto text-white flex flex-col md:flex-row justify-around items-center gap-10">
                <div className="stat">
                    <div className="stat-value text-6xl font-extrabold text-center mb-2">50K+</div>
                    <div className="stat-title text-2xl font-medium text-center text-white">Active Users</div>
                </div>
                <div className="hidden md:block w-px h-full bg-white/50"></div>
                <div className="stat">
                    <div className="stat-value text-6xl font-extrabold text-center mb-2">200K+</div>
                    <div className="stat-title text-2xl font-medium text-center text-white">Premium Tools</div>
                </div>
                <div className="hidden md:block w-px h-full bg-white/50"></div>
                <div className="stat">
                    <div className="stat-value text-6xl font-extrabold text-center mb-2">4.9</div>
                    <div className="stat-title text-2xl font-medium text-center text-white">Rating</div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
import React from 'react';

const Stats = () => {
    return (
        <section className='stats w-full rounded-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-10'>
            <div className="container mx-auto text-white flex justify-around items-center">
                <div className="stat">
                    <div className="stat-value text-6xl font-extrabold text-center mb-2">50K+</div>
                    <div className="stat-title text-2xl font-medium text-center text-white">Active Users</div>
                </div>
                <span className="w-0.5 h-full bg-white/50 text-center"></span>
                <div className="stat">
                    <div className="stat-value text-6xl font-extrabold text-center mb-2">200K+</div>
                    <div className="stat-title text-2xl font-medium text-center text-white">Premium Tools</div>
                </div>
                <span className="w-0.5 h-full bg-white/50 text-center"></span>
                <div className="stat">
                    <div className="stat-value text-6xl font-extrabold text-center mb-2">4.9</div>
                    <div className="stat-title text-2xl font-medium text-center text-white">Rating</div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
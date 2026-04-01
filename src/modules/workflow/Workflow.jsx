import React from 'react';

const Workflow = () => {
    return (
        <section id='features-section' className='main-section w-full py-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
            <div className="container mx-auto space-y-5">
                <h2 className='text-5xl font-extrabold text-center'>Ready to Transform Your Workflow?</h2>
                <p className='text-center'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center gap-5 rounded-full px-1 py-1'>
                        <button className={`btn border-base-100 hover:opacity-75 font-bold rounded-3xl px-5 py-4 ${`border-0 bg-base-100 text-[#9514FA]`}`}>Explore Products</button>
                        <button className={`btn border-base-100 hover:opacity-75 font-bold rounded-3xl px-5 py-4 ${`border bg-transparent`}`}>View Pricing</button>
                    </div>
                </div>
                <p className='text-center'>14-day free trial • No credit card required • Cancel anytime</p>
                
            </div>
        </section>
    );
};

export default Workflow;
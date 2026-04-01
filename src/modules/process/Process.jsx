import React from 'react';
import ProcessCard from './components/ProcessCard';

const steps = [
    {
        step: "01",
        title: "Create Account",
        desc: "Sign up for free in seconds",
    },
    {
        step: "02",
        title: "Choose Products",
        desc: "Browse our catalog and select the toolsthat fit your needs.",
    },
    {
        step: "03",
        title: "Start Creating",
        desc: "Download and start using your premium tools immediately.",
    }
]

const Process = () => {
    return (
        <section id='faq-section' className='main-section w-full py-10 mt-20'>
            <div className="container mx-auto space-y-5">
                <h2 className='text-5xl font-extrabold text-center'>Get Started in 3 Steps</h2>
                <p className='text-center'>Start using premium digital tools in minutes, not hours.</p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        steps.map(step => (
                            <ProcessCard key={step.step} step={step}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Process;
import React, { use } from 'react';
import PricingCard from './components/PricingCard';

const Pricing = ({pricingPromise}) => {
    // console.log(pricingPromise);

    const pricingPlans = use(pricingPromise);
    // console.log(pricingPlans);


    return (
        <section className='main-section w-full py-10'>
            <div className="container mx-auto space-y-5">
                <h2 className='text-5xl font-extrabold text-center'>Simple, Transparent Pricing</h2>
                <p className='text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                
                <PricingCard pricingPlans={pricingPlans}/>
               
            </div>
        </section>
    );
};

export default Pricing;
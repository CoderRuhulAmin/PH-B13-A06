import React from 'react';
import FeatureList from '../../main/components/FeatureList';

const PricingSingleCard = ({plan}) => {
    // console.log(plan);
    return (
        <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
               <h2 className="text-3xl font-bold">{plan.name}</h2>
                <p className="text-xl">{plan.subtitle}</p>
                <span className="text-xl">${plan.price}/{plan.period}</span>
                
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {
                        plan.features.map((feature, index) => <FeatureList key={index} feature={feature} />)
                    }
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary rounded-full btn-block">{plan.buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default PricingSingleCard;
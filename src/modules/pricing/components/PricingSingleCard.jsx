import React from 'react';
import FeatureList from '../../main/components/FeatureList';

const PricingSingleCard = ({ plan }) => {

    // console.log(plan);
    if(plan.highlight === true){
        return (
            <div className="card bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg relative">
                <span className={`badge badge-sm rounded-full bg-[#FEF3C6] text-[#BB4D00] text-sm font-medium p-4 absolute left-1/2 -top-4 transform -translate-x-1/2`}>Most Popular</span>
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
                        <button className="btn btn-base-100 text-black rounded-full btn-block">{plan.buttonText}</button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="card bg-[#F2F2F2] shadow-lg">
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
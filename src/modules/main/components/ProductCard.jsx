import React from 'react';
import FeatureList from './FeatureList';

const ProductCard = () => {
    return (
        <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className='w-15 h-15 border-2 border-gray-100 rounded-full p-3 mt-3'>
                        <img src="./products/ai-writing-pro.png" alt="AI Writing Pro" />
                    </div>
                    <span className="badge badge-sm rounded-full bg-[#FEF3C6] text-sm text-[#BB4D00] font-medium p-4">Most Popular</span>
                </div>
                <h2 className="text-3xl font-bold">AI Writing Pro</h2>
                <p className="text-xl">Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                <span className="text-xl">$29/mo</span>
                
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <FeatureList />
                    <FeatureList />
                    <FeatureList />
                    <FeatureList />
                    <FeatureList />
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary rounded-full btn-block">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
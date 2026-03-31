import React from 'react';
import FeatureList from './FeatureList';

const ProductCard = ({product}) => {
    console.log(product);

    // const tagColorMap = {

    //     "Best Seller"   : "bg-[#FEF3C6] text-[#BB4D00]",
    //     "Popular"       : "bg-[#E1E7FF] text-[#4F39F6]",
    //     "New"           : "bg-[#DBFCE7] text-[#0A883E]"

    // }

    return (
        <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className='w-15 h-15 border-2 border-gray-100 rounded-full p-3 mt-3'>
                        <img src={product.icon} alt="AI Writing Pro" />
                    </div>

                    <span 
                    className={`badge badge-sm rounded-full
                        ${
                            // tagColorMap([product.tag])
                            product.tag === "Best Seller" ? "bg-[#FEF3C6] text-[#BB4D00]" : 
                            product.tag === "Popular" ? "bg-[#E1E7FF] text-[#4F39F6]" : 
                            product.tag === "New" ? "bg-[#DBFCE7] text-[#0A883E]" : null
                        } 
                        text-sm font-medium p-4`
                    }>{product.tag}</span>
                </div>
                <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-xl">{product.description}</p>
                <span className="text-xl">${product.price}/{product.period}</span>
                
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {
                        product.features.map((feature, index) => <FeatureList key={index} feature={feature} />)
                    }
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary rounded-full btn-block">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
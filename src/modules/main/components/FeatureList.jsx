import { Check } from 'lucide-react';
import React from 'react';

const FeatureList = ({feature}) => {
    // console.log(feature)
    return (
        <li className='flex gap-2 items-center'>
            <Check className='text-green-500' size={20} />
            <span>{feature}</span>
        </li>
    );
};

export default FeatureList;
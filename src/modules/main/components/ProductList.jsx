import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({productsList}) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                productsList.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    );
};

export default ProductList;
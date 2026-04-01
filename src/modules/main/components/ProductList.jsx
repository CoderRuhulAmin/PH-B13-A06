import ProductCard from './ProductCard';

const ProductList = ({ productsList, cartItemsPrice, setCartItemsPrice, cartList, setCartList }) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                productsList.map(product => <ProductCard
                    key={product.id}
                    product={product}
                    cartItemsPrice={cartItemsPrice}
                    setCartItemsPrice={setCartItemsPrice}
                    cartList={cartList}
                    setCartList={setCartList}

                />)
            }
        </div>
    );
};

export default ProductList;
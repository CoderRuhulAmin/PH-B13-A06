import { Trash2 } from 'lucide-react';
import React from 'react';
import CartListItem from './CartListItem';

const CartList = ({ cartList, setCartList }) => {
    
    const handleDeleteSelectedProduct = (item) => {
        // console.log(cartList );
        // const filteredCartList = cartList.filter(
        //     (selectedCartItem) => selectedCartItem.id !== item.id,
        // );
        // console.log(filteredCartList);
        // setCartList(filteredCartList);

        setCartList(prev =>
            prev.filter(cartItem => cartItem.id !== item.id)
        );
        
    }


    if (cartList.length === 0) {
        return (
            <div className='flex flex-col justify-center items-center py-10 bg-gray-100 space-y-4'>
                <h3 className='text-3xl font-bold'>No product is added to Cart!</h3>
                <p>Go to product list and select your favourite product to cart.</p>
            </div>
        )
    }else{
        return (
            <div>
                <h3>Your Cart</h3>
                <ul className="list bg-white rounded-box space-y-4">
                    {
                        cartList.map(item => <CartListItem 
                            key={item.id} 
                            item={item} 
                            handleDeleteSelectedProduct={handleDeleteSelectedProduct}
                        />)
                    }
                </ul>
            </div>
        )
    }
};

export default CartList;
import { Trash2 } from 'lucide-react';
import React from 'react';
import CartListItem from './CartListItem';

const CartList = ({ cartList, setCartList }) => {
    if (cartList.length === 0) {
        return (
            <div>
                <h3>Your Cart</h3>
                <p>No Product add to cart.</p>
            </div>
        )
    }else{
        return (
            <div>
                <h3>Your Cart</h3>
                <ul className="list bg-white rounded-box space-y-4">
                    {
                        cartList.map(item => <CartListItem key={item.id} item={item} />)
                    }
                </ul>
            </div>
        )
    }
};

export default CartList;
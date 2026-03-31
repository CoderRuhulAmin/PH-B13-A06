import { Trash2 } from 'lucide-react';
import React from 'react';
import CartListItem from './CartListItem';

const CartList = () => {
    return (
        <div>
            <h3>Your Cart</h3>
            <ul className="list bg-white rounded-box space-y-4">

                <CartListItem />
                <CartListItem />
                <CartListItem />
                <CartListItem />

            </ul>
        </div>
    );
};

export default CartList;
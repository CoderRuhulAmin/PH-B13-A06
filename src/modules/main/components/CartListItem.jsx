import { Trash2 } from 'lucide-react';

const CartListItem = ({item, handleDeleteSelectedProduct}) => {

    return (
        <li className="list-row bg-gray-50 rounded-lg">
            <div className="text-4xl font-thin opacity-30 tabular-nums">{item.id}</div>
            <div><img className="size-10 rounded-box" src={item.icon} alt={item.name} /></div>
            <div className="list-col-grow">
                <div>{item.name}</div>
                <div className="text-xs uppercase font-semibold opacity-60">${item.price}/{item.period}</div>
            </div>
            <button onClick={()=>handleDeleteSelectedProduct(item)} className="btn btn-square btn-ghost">
                <Trash2 />
            </button>
        </li>
    );
};

export default CartListItem;
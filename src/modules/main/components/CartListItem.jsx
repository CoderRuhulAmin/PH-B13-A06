import { Trash2 } from 'lucide-react';

const CartListItem = () => {
    return (
        <li className="list-row bg-gray-50 rounded-lg">
            <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
            <div><img className="size-10 rounded-box" src="./products/ai-writing-pro.png" alt="AI Writing Pro" /></div>
            <div className="list-col-grow">
                <div>AI Writing Pro</div>
                <div className="text-xs uppercase font-semibold opacity-60">$29/mo</div>
            </div>
            <button className="btn btn-square btn-ghost">
                <Trash2 />
            </button>
        </li>
    );
};

export default CartListItem;
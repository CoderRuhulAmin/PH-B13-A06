import { use } from 'react';
import CartList from './components/CartList';
import ProductList from './components/ProductList';

const Main = ({productsPromise}) => {
    // console.log(productsPromise);
    const productsList = use(productsPromise);
    // console.log(productsList);

    return (
        <section className='main-section w-full py-10'>
            <div className="container mx-auto space-y-5">
                <h2 className='text-5xl font-extrabold text-center'>Premium Digital Tools</h2>
                <p className='text-center'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className='flex justify-center items-center'>
                    <div className='border border-gray-100 bg-base-100 flex justify-center items-center gap-5 rounded-full px-1 py-1'>
                        <button className={`btn border-0 hover:opacity-75 font-bold rounded-3xl px-5 py-4 ${`bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white`}`}>Products</button>
                        <button className={`btn border-0 hover:opacity-75 font-bold rounded-3xl px-5 py-4 ${`bg-base-100`}`}>Cart (2)</button>
                    </div>
                </div>
                
                <ProductList productsList={productsList}/>
                <CartList />

            </div>
        </section>
    );
};

export default Main;
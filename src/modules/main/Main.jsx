import { use, useState } from 'react';
import CartList from './components/CartList';
import ProductList from './components/ProductList';

const Main = ({ productsPromise, cartItemsPrice, setCartItemsPrice, cartList, setCartList }) => {
    // console.log(productsPromise);
    // console.log(cartItemsPrice);
    const productsList = use(productsPromise);
    // console.log(productsList);

    const [selectedType, setSelectedType] = useState("available");
    // console.log(selectedType);

    return (
        <section className='main-section w-full py-10'>
            <div className="container mx-auto space-y-5">
                <h2 className='text-5xl font-extrabold text-center'>Premium Digital Tools</h2>
                <p className='text-center'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className='flex justify-center items-center'>
                    <div className='border border-gray-100 bg-base-100 flex justify-center items-center gap-5 rounded-full px-1 py-1'>

                        <button onClick={() => setSelectedType("available")} className={`btn border-0 hover:opacity-75 font-bold rounded-3xl px-5 py-4 transition-colors ease-in-out duration-700 ${selectedType === "available" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-base-100"}`}>Products</button>
                        <button onClick={() => setSelectedType("selected")} className={`btn border-0 hover:opacity-75 font-bold rounded-3xl px-5 py-4 transition-colors ease-in-out duration-700 ${selectedType === "selected" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-base-100"}`}>Cart ({cartList.length})</button>
                    </div>
                </div>
                {
                    selectedType === "available" ?
                        <ProductList
                            productsList={productsList}
                            cartItemsPrice={cartItemsPrice}
                            setCartItemsPrice={setCartItemsPrice}
                            cartList={cartList}
                            setCartList={setCartList}
                        /> :
                        <CartList
                            cartItemsPrice={cartItemsPrice}
                            setCartItemsPrice={setCartItemsPrice}
                            cartList={cartList}
                            setCartList={setCartList}
                        />
                }

            </div>
        </section>
    );
};

export default Main;
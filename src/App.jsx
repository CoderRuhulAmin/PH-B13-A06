import './App.css'
import Hero from './modules/hero/Hero'
import Navbar from './modules/navbar/Navbar'
import Stats from './modules/stats/Stats'
import Main from './modules/main/Main'
import Process from './modules/process/Process'
import Pricing from './modules/pricing/Pricing'
import Workflow from './modules/workflow/Workflow'
import Footer from './modules/footer/Footer'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'


const fetchProducts = async () => {
  const res = await fetch("./data/products.json");
  return res.json();
}
const fetchPricing = async () => {
  const res = await fetch("./data/pricing.json");
  return res.json();
}



function App() {

  const pricingPromise = fetchPricing();
  // console.log(pricingPromise)
  const productsPromise = fetchProducts();
  // console.log(productsPromise)

  const [cartItemsPrice, setCartItemsPrice] = useState(0);
  const [cartList, setCartList] = useState([]);
  // console.log(cartList)

  return (
    <>
      <header className='w-full sticky top-0 z-10 bg-base-100 shadow-sm'>
        <Navbar cartList={cartList} />
      </header>
      <Hero />
      <main>
        <Stats />
        <Suspense>
          <Main 
            productsPromise={productsPromise} 
            cartItemsPrice={cartItemsPrice} 
            setCartItemsPrice={setCartItemsPrice} 
            cartList={cartList}
            setCartList={setCartList}
          />
        </Suspense>
        <Process />
        <Suspense>
          <Pricing pricingPromise={pricingPromise} />
        </Suspense>
        <Workflow />
      </main>

      <Footer />

      {/* React Toastify  */}
      <ToastContainer />
    </>
  )
}

export default App

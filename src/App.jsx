import './App.css'
import Hero from './modules/hero/Hero'
import Navbar from './modules/navbar/Navbar'
import Stats from './modules/stats/Stats'
import Main from './modules/main/Main'
import Process from './modules/process/Process'
import Pricing from './modules/pricing/Pricing'
import Workflow from './modules/workflow/Workflow'
import Footer from './modules/footer/Footer'
import { Suspense } from 'react'


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

  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Stats />
        <Suspense>
          <Main productsPromise={productsPromise}/>
        </Suspense>
        <Process />
        <Suspense>
          <Pricing pricingPromise={pricingPromise} />
        </Suspense>
        <Workflow />
      </main>

      <Footer />
    </>
  )
}

export default App

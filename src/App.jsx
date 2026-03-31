import './App.css'
import Hero from './modules/hero/Hero'
import Navbar from './modules/navbar/Navbar'
import Footer from './modules/footer/Footer'




function App() {


  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>

      <Footer/>
    </>
  )
}

export default App

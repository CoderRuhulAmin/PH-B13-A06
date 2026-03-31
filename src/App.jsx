import './App.css'
import Hero from './modules/hero/Hero'
import Navbar from './modules/navbar/Navbar'
import Footer from './modules/footer/Footer'
import Workflow from './modules/workflow/Workflow'





function App() {


  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        
        <Workflow />
      </main>

      <Footer/>
    </>
  )
}

export default App

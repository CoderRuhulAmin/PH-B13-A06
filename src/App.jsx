import './App.css'
import Hero from './modules/hero/Hero'
import Navbar from './modules/navbar/Navbar'
import Stats from './modules/stats/Stats'
import Process from './modules/process/Process'

import Workflow from './modules/workflow/Workflow'
import Footer from './modules/footer/Footer'





function App() {


  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Stats/>

        <Process />
        
        <Workflow />
      </main>

      <Footer/>
    </>
  )
}

export default App

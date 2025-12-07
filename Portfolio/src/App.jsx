import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <About></About>
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  )
}

export default App;

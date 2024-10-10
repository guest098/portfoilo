import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experirence/Experirence'
import Services from './components/services/Services'
import Portfoilo from './components/portfoilo/Portfoilo'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About/>
    <Experience/>
    <Services/>
    <Portfoilo/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App

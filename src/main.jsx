import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import Navbar from './Components/components/Navbar';
import Hero from './Components/components/Hero';
import About from './Components/components/About';
import Feature from './Components/components/Feature';
<<<<<<< HEAD
import Card from './Components/components/Card';
import Footer from './Components/components/Footer';
=======

import Opensource from './Components/components/Opensource';
>>>>>>> 4eb6fb991e85834c4e6c9044d3e780bdd649b5be

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
<<<<<<< HEAD
  <Navbar/> 
  <Hero />
   <About />
   <Feature />
   <Card/>

   <Footer/>
=======
   <Hero />
   
     <Feature />
   <About />

   <Opensource />
   

>>>>>>> 4eb6fb991e85834c4e6c9044d3e780bdd649b5be
  </React.StrictMode>,
)

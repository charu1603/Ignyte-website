import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import Navbar from './Components/components/Navbar';
import Hero from './Components/components/Hero';
import About from './Components/components/About';
import Feature from './Components/components/Feature';
import Session from './Components/components/Session';
import Card from './Components/components/Card';
import Footer from './Components/components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
  <Navbar/> 
  <Hero />
   <About />
   <Feature />
   <Card/>
   <Session />
   <Footer/>
  </React.StrictMode>,
)

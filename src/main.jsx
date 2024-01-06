import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import Navbar from './Components/components/Navbar';
import Hero from './Components/components/Hero';
import About from './Components/components/About';
import Feature from './Components/components/Feature';
import Card from './Components/components/Card';
import Opensource from './Components/components/Opensource';
import Footer from './Components/components/Footer';
import Workshop from './Components/components/Workshop';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
  <Navbar />
  <Hero />
  <Card />
  <About />
  <Feature />
  <Workshop/>
  <Opensource />
  <Footer />

  </React.StrictMode>,
)

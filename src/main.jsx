import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import Hero from './Components/components/Hero';
import About from './Components/components/About';
import Feature from './Components/components/Feature';

import Opensource from './Components/components/Opensource';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
   <Hero />
   
     <Feature />
   <About />

   <Opensource />
   

  </React.StrictMode>,
)

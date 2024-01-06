import Navbar from "./Components/components/Navbar";
import Hero from "./Components/components/Hero";
import Card from "./Components/components/Card";
import About from "./Components/components/About";
import Feature from "./Components/components/Feature";
import Workshop from "./Components/components/Workshop";
import Opensource from "./Components/components/Opensource";
import Footer from "./Components/components/Footer";
import './App.css';

function App() {
    return(
        <>
            <Navbar />
            <Hero />
            <Card />
            <About />
            <Feature />
            <Workshop/>
            <Opensource />
            <Footer />
        </>
    )
}

export default App
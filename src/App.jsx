import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
// import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


export default function App() {
    return (
        <>
            <Navbar/>
            <Header />
            <About/>
            {/* <Work/> */}
            <Contact />
            <Footer/>
            
        </>
    )
}

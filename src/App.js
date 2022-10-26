import React from "react";
import Footer from "./components/Footer"
import About from "./components/About"
import Info from "./components/Info"
import Interests from "./components/Interests"


export default function App(){
    return (
        <div className="rootchild">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

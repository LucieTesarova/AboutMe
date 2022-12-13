import React from "react"
import About from "./components/About.js"
import Header from "./components/Header.js"
import Interests from "./components/Interests.js"
import Icons from "./components/Icons.js"

export default function App(){
    return(
        <div className="App">
        <Header />
         <About />
         <Interests />
         <Icons />
        </div>
    )
}
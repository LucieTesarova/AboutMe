import React from "react"

export default function Header(){
    return(
        <div className="Header">
            <div className="Header--imagecontainer">
            <img className="Header--image" src="./images/me2.jpg" alt="Photo of me"></img>
            </div>
            <h1 className="Header--heading">Lucie Tesařová</h1>
             <h2 className="Header--heading">Brno</h2>
             <div className="Header--buttons">
                <div className="Header--button_container">
                    <a href="mailto:tesarova.lucie.2021@gmail.com" className="Header--button_email">Email</a>
                </div>
                <div className="Header--button_container Header--button_container-linkedin">
                    <a href="https://www.linkedin.com/in/lucie-tesa%C5%99ov%C3%A1-9996161b2/" className="Header--button_linkedin">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}
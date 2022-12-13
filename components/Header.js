import React from "react"

export default function Header(){
    return(
        <div className="Header">
            <img className="Header--image" src="./images/girl.png"></img>
            <h1 className="Header--heading">Name Surname</h1>
             <h2 className="Header--heading">Position</h2>
             <h3 className="Header--heading">Website</h3>
             <div className="Header--buttons">
                <div className="Header--button_container">
                    <a href="#" className="Header--button_email">Email</a>
                </div>
                <div className="Header--button_container Header--button_container-linkedin">
                    <a href="#" className="Header--button_linkedin">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}
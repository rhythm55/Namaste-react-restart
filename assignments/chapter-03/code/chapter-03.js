import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.jpeg";
import userIcon from "./user.jpeg"

const HeaderComponent = () => {
   return (
   <header className="header">
        <img src={logo} alt="logo"/>
        <div className="search">
            <input 
            type="text"
            placeholder="search anything here .."
            >
            </input>
            <button type="submit">search</button>
        </div>
        <img src={userIcon} alt="user"/>
    </header>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeaderComponent/>)
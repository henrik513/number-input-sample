import React from "react"
import CustomInputNumber from "./components/CustomInputNumber/CustomInputNumber";

export default function App() {

    function greetUser() {
        console.log("Hi there, user!");
      }

    return (<div>
        <h2>Welcome to React App</h2>
        <h3>Date : {new Date().toDateString()}</h3>
        <div className="room-manager111">
            <CustomInputNumber value={2} disabled={true}/>
        </div>
        <div>
            <p>Click this text to see the event bubbling</p>     
            <button onClick={greetUser}>Click me</button>   
        </div>
    </div>)
}
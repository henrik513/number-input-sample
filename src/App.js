import React from "react"
import { CustomInputNumber } from "./components/CustomInputNumber/CustomInputNumber";

function App() {
    return (<div>
        <h2>Welcome to React App</h2>
        <h3>Date : {new Date().toDateString()}</h3>
        <CustomInputNumber />
    </div>)
}

export default App
import React from "react"
import RoomAllocation from "./components/RoomAllocation/RoomAllocation";

export default function App() {

    function checkFunction(event) {
        console.log(`check function event target name : ${event.target.name}` )
    }

    function handleBlur(event) {
        console.log(`blur event fired ${event.target.name}`);
    }

    return (<div>
            <RoomAllocation guest={10} room={3} onChange={result=>console.log(result)} />
    </div>)
}
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import CustomInputNumber from "../CustomInputNumber/CustomInputNumber";
import "./RoomAllocation.css";

// { guest, room, onChange }
function RoomAllocation(props) {
    const defaultGuest = 1;
    const [unassigned, setUnassigned] = useState(props.guest - props.room*defaultGuest);
    const [rooms, setRooms] = useState( Array(props.room).fill(defaultGuest) );
    
    function checkFunction(event) {
        // check sum
        let _i = parseInt(event.target.name.replace('room_', ""), 10 );
        let _rooms = rooms.slice(0);
        _rooms[_i-1] = parseInt(event.target.value, 10);
   
        let sum = _rooms.reduce((a,b) =>a+b);
        if( sum < props.guest ) {
            setUnassigned(props.guest-sum);
        }
        setRooms(_rooms);
    }

    function handleBlur(event) {
        console.log(`blur event fired ${event.target.name}`);
    }
    // TO DO exceed case
    
    useEffect(()=> {
        if(props.onChange) {
            return props.onChange(rooms);
        }
    }, rooms);

    return (
        <div className="room-allocation-container">
            <div>未分配人數 {unassigned}</div>
            {rooms.map(function(_room, i){
                return <div key={i}><label className="room-lable">房間 {i+1}</label> <CustomInputNumber name={`room_${i+1}`} min={1} max={4} value={1} onChange={checkFunction} onBlur={handleBlur} /></div>
            })}
        </div>
        )
}

RoomAllocation.propTypes = {
    guest: PropTypes.number, 
    room: PropTypes.number,
    onChange: PropTypes.func, 
}
RoomAllocation.defaultProps = {
    guest: 1, 
    room: 1,
}


export default RoomAllocation;

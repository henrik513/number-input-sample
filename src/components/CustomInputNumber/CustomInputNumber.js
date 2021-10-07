import React, { useState } from 'react';
import PropTypes from 'prop-types'
import "./CustomInputNumber.css";

function CustomInputNumber(props) {
    let { min, max, step} = props;
    const [counter, setCounter] = useState(props.value || 0);

    function handleIncrease(event) {
        if(max && max < counter+step) {
            setCounter(max);
            return;
        }
        console.log(counter+step);
        setCounter(counter+step);
    }
    
    function handleDecrease(event) {
        if(min && min > counter-step) {
            setCounter(min);
            return;
        }
        setCounter(counter-step);
    }

    function handleOnChange(event){
        if(props.onChange) {
            props.onChange();
        }
        
        console.log(`call on chage ${event.target.value}`);
        setCounter( parseInt(event.target.value, 10));
    }

    return (
        <div className="number-box">
            <button onMouseDown={handleDecrease} disabled={props.disabled}> - </button>
            <input type="number" value={counter} step={step} onChange={handleOnChange} disabled={props.disabled} />
            <button onMouseDown={handleIncrease} disabled={props.disabled} > + </button>
        </div>
    )
}

CustomInputNumber.propTypes = {
    min: PropTypes.number, 
    max: PropTypes.number, 
    step: PropTypes.number, 
    name: PropTypes.string, 
    value: PropTypes.number, 
    onChange: PropTypes.func, 
    onBlur: PropTypes.func, 
    disabled: PropTypes.bool
}

CustomInputNumber.defaultProps = {
    min: 0, 
    step: 1,
    value: 1,
    disabled: false
}

export default CustomInputNumber
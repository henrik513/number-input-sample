import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import useLongPress from "../../shared/useLongPress/useLongPress";
import "./CustomInputNumber.css";

function CustomInputNumber(props) {
    let { min, max, step} = props;
    let inputElement = null;
    const [counter, setCounter] = useState(props.value || 0);
    const inheritsKey = ['min', 'max', 'step', 'disabled'];
    const inherits = {};

    Object.keys(props).map(function(key) {
        if(inheritsKey.includes(key)) {
            inherits[key] = props[key];
        }
    });


    function handleIncrease(event) {
        if(max && max < counter+step) {
            setCounter(max);
            return;
        }
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
        // check max and min values
        let _value = parseInt(event.target.value, 10);

        if( _value > props.max ){
            _value = props.max;
        }else if( _value < props.min){
            _value = props.min;
        }

        if(props.onChange) {
            props.onChange(event);
        }
        console.log(`change fired value : ${event.target.value}`);
        setCounter( _value);
    }

    function handleOnBlur(event){
        if(props.onBlur) {
            props.onBlur(event);
        }

        console.log(`blur fired value : ${event.target.value}`);
    }

    const decreaseLongPressProps = useLongPress(handleDecrease);
    const increaseLongPressProps = useLongPress(handleIncrease);

    useEffect(() => {
        if( props.onChange ){
            props.onChange({target: inputElement});
        }
    }, [counter]);

    return (
        <div className="number-box">
            <button disabled={props.disabled} onClick={handleDecrease} {...decreaseLongPressProps}> - </button>
            <input type="number" name={props.name} value={counter} ref={el=>{ inputElement = el} } onChange={handleOnChange} onBlur={handleOnBlur} { ...inherits} />
            <button disabled={props.disabled} onClick={handleIncrease} {...increaseLongPressProps}> + </button>
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
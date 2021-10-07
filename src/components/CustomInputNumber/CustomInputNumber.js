import React from 'react';
import "./CustomInputNumber.css";

export function CustomInputNumber() {
    return (
        <div className="number-box">
            <button >-</button>
            <input type="number" />
            <button >+</button>
        </div>
    )
}
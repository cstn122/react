import React, { useRef, useImperativeHandle, forwardRef } from "react";
import classes from './Input.module.css';

const Input = forwardRef((props, ref) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return ({
            focus: activate,
        }
        );
    }
    );

    return (
        <div
            className={`${classes.control} ${props.state.isValid === false ? classes.invalid : ''
                }`}
        >
            <label htmlFor={props.labelFor}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.state.value}
                onChange={props.changeHandler}
                onBlur={props.validateHandler}
            />
        </div>);

});

export default Input;
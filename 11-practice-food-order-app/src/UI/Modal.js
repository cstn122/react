import { getElementError } from '@testing-library/react';
import React from 'react';
import { ReactDOM } from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
    console.log(props);
    return (
        <>
            {/* {ReactDOM.createPortal(
                <div className={classes.backdrop} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <div className={`${classes.modal} ${props.classes}`}>
                    {props.children}
                </div>,
                document.getElementById('overelay-root')
            )} */}
            <div className={classes.backdrop} />
            <div className={`${classes.modal} ${props.classes}`}>
                {props.children}
            </div>
        </>

    );
};

export default Modal;
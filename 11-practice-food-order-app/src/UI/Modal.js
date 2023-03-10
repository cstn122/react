import React from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return (<div className={classes.backdrop} onClick={props.onClose} />);
};

const ModalOverlay = (props) => {
    return (<div className={`${classes.modal} ${props.classes}`}>{props.children}</div>);
};

const Modal = (props) => {
    console.log(props);
    return (
        <>
            {createPortal(
                <Backdrop onClose={props.onClose} />,
                document.getElementById('overlays')
            )}
            {createPortal(
                <ModalOverlay >{props.children}</ModalOverlay>,
                document.getElementById('overlays')
            )}
        </>
    );
};

export default Modal;
import React, { useState } from 'react';
import classes from './Modal.module.css';
import Button from './Button';
import ReactDOM from 'react-dom';

const Backdrop = () => {
    return <div className={classes.backdrop} />
};

const Overlay = props => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredData = {
            name: enteredName,
            description: enteredDescription,
        };
        props.onSave(enteredData);
    };

    const cancelHandler = (event) => {
        event.preventDefault();
        props.onCancel(props.title);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <h3>{props.title}</h3>
            <label>Name</label>
            <input
                value={enteredName}
                onChange={e => setEnteredName(e.target.value)}
            />
            <label>Description</label>
            <input
                value={enteredDescription}
                onChange={e => setEnteredDescription(() => e.target.value)}
            />
            <Button type="submit" classes={classes.save}>Save</Button>
            <Button onClick={cancelHandler} classes={classes.cancel}>Cancel</Button>
        </form>
    );
};

function Modal(props) {

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Overlay
                    title={props.title}
                    onSave={props.onSave}
                    onCancel={props.onCancel}
                />,
                document.getElementById('overlay-root')
            )}
        </>
    );
}

export default Modal;
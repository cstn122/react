import React from 'react';
import classes from './AlertWindow.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';

const AlertWindow = props => {
    // let alertMessage = '';
    // if ((props.nameIsValid === false) & (props.ageIsValid === false)) {
    //     alertMessage = 'Please enter a valid name and age (non-empty values).';
    // }
    // else if (props.nameIsValid === false) {
    //     alertMessage = 'Please enter a valid name (non-empty values).';
    // }
    // else if (props.ageIsValid === false) {
    //     alertMessage = 'Please enter a valid age (> 0).';
    // }


    // return <div onClick={dismissAlertHandler} className={classes}>
    //     <h2>Invalid input</h2>
    //     <p>{alertMessage}</p>
    //     <button onClick={dismissAlertHandler}>Okay</button>
    // </div>;

    return (
        <div>
            <div className={classes.backdrop} onClick={props.onDismiss}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onDismiss}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
};

export default AlertWindow;
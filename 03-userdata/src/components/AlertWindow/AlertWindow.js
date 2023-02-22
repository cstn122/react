import React from 'react';
import './AlertWindow.module.css'

import Card from '../UI/Card';

const AlertWindow = () => {
    let alertMessage = '';
    if ((nameInvalid === true) & (ageInvalid === true)) {
        alertMessage = 'Please enter a valid name and age (non-empty values).';
    }
    else if (nameInvalid === true) {
        alertMessage = 'Please enter a valid name (non-empty values).';
    }
    else if (ageInvalid === true) {
        alertMessage = 'Please enter a valid age (> 0).';
    }

    const dismissAlertHandler = () => {
        return;
    };

    return <div onClick={dismissAlertHandler}>
        <Card>
            <h2>Invalid input</h2>
            <p>{alertMessage}</p>
            <button onClick={dismissAlertHandler}>Okay</button>
        </Card>
    </div>;
};

export default AlertWindow;
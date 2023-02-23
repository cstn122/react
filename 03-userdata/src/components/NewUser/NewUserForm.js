import React, { useState } from 'react';
import './NewUserForm.module.css'

const NewUserForm = props => {
    // record states
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    // update states dynamically
    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    };

    // todo when submitted
    const submitHandler = event => {
        event.preventDefault();  // to avoid leaving the page after submitting

        // merge name and age into one object, add id
        const enteredUserData = {
            id: Math.random().toString(),
            name: enteredName,
            age: +enteredAge,
        };

        props.saveUserData(enteredUserData);
        
        setEnteredName('');
        setEnteredAge('');
    };

    return <form onSubmit={submitHandler} >
        <div>
            <h3>Username</h3>
            <input type='text' onChange={nameChangeHandler} value={enteredName} />
        </div>
        <div>
            <h3>Age (Years)</h3>
            <input type='number' min='0' step='1' onChange={ageChangeHandler} value={enteredAge} />
        </div>
        <div>
            <button type='submit' >Add User</button>
        </div>
    </form>;
};

export default NewUserForm;
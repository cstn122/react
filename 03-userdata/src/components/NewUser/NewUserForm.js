import React, { useState } from 'react';
import './NewUserForm.module.css'

const NewUserForm = props => {
    // record states
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [nameIsValid, setNameIsValid] = useState(true);
    const [ageIsValid, setAgeIsValid] = useState(true);

    // update states dynamically
    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    };


    // evaluate validity: empty name/age and negative age not allowed
    if (enteredName.trim().length === 0) {
        setNameIsValid(false);
    }

    if ((enteredAge.trim().length === 0) | (enteredAge.trim() < 0)) {
        setAgeIsValid(false);
    }

    // todo when submitted
    const submitHandler = event => {
        event.preventDefault();  // to avoid leaving the page after submitting

        // merge name and age into one object, add id
        const enteredUserData = {
            id: Math.random().toString(),
            name: enteredName,
            age: +enteredAge,
        };

        // condition: name and age are both invalid
        if ((nameIsValid === false) || (ageIsValid === false)) {
            return;
        }

        // condition: all input are valid
        props.saveUserData(enteredUserData);
        setEnteredName('');
        setEnteredAge('');
    };

    return <form onSubmit={submitHandler} >
        <div>
            <h3>Username</h3>
            <input type='text' onChange={nameChangeHandler} value={enteredName}/>
        </div>
        <div>
            <h3>Age (Years)</h3>
            <input type='number' min='0' step='1' onChange={ageChangeHandler} value={enteredAge}/>
        </div>
        <div>
            <button type='submit' >Add User</button>
        </div>
    </form>;
};

export default NewUserForm;
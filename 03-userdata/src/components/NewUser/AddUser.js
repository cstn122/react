import React, { useState } from 'react';
import './AddUser.module.css'

const AddUser = props => {

    // record states
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [nameIsValid, setNameIsValid] = useState(true);
    const [ageIsValid, setAgeIsValid] = useState(true);

    // update states dynamically
    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
        setNameIsValid(true);
    };

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
        setAgeIsValid(true);
    };

    // todo when submitted
    const submitHandler = event => {
        event.preventDefault();  // to avoid leaving the page after submitting

        // evaluate validity: empty name/age and negative age not allowed
        if (props.enteredName.trim().length === 0) {
            setNameIsValid(false);
        }

        if ((props.enteredAge.trim().length === 0) | (props.enteredAge.trim() < 0)) {
            setAgeIsValid(false);
        }
        // merge name and age into one object, add id
        const enteredUserData = {
            id: Math.random().toString(),
            name: enteredName,
            age: +enteredAge,
        };
        props.saveUserData(enteredUserData);

        setEnteredName('');
        setEnteredAge('');
    }

    return <form onSubmit={submitHandler} >
        <div>
            <h3>Username</h3>
            <input type='text' onChange={nameChangeHandler} value={enteredName} onNameIsValid={nameIsValid} />
        </div>
        <div>
            <h3>Age (Years)</h3>
            <input type='number' min='0' step='1' onChange={ageChangeHandler} value={enteredAge} onAgeIsValid={ageIsValid} />
        </div>
        <div>
            <button type='submit' >Add User</button>
        </div>
    </form>;
};

export default AddUser;
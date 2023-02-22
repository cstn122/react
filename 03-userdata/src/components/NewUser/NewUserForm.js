import React, { useState } from 'react';
import './NewUserForm.module.css'

const NewUserForm = (props) => {
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [nameInvalid, setNameInvalid] = useState(false);
    const [ageInvalid, setAgeInvalid] = useState(false);

    if (inputName.trim().length === 0) {
        setNameInvalid(true);
    }
    else {
        setNameInvalid(false);
    }

    if ((inputAge.trim().length === 0) | (inputAge.trim() < 0)) {
        setAgeInvalid(true);
    }
    else {
        setAgeInvalid(false);
    }

    const submitHandler = event => {
        event.preventDefault();
        if (props.nameInvalid === true) {
            console.log('Invalid username')
            return;
        }
        else {
            // return data
        }

        if (props.ageInvalid === true) {
            console.log('Invalid age')
        }
        else {
            // return data
        }
    };

    const inputNameHandler = event => {
        setInputName(event.target.value);
    };

    const inputAgeHandler = event => {
        setInputAge(event.target.value);
    };

    return <div>
        <h3>Username</h3>
        <input type='text' onChange={inputNameHandler} />

        <h3>Age (Years)</h3>
        <input type='text' onChange={inputAgeHandler} />

        <button type='submit' onClick={submitHandler}>Add User</button>
    </div>;
};

export default NewUserForm;
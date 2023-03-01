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
        setEnteredName(prev => { return event.target.value; })
        setNameIsValid(prev => { return true; });
    };

    const ageChangeHandler = event => {
        setEnteredAge(prev => { return event.target.value; });
        setAgeIsValid(prev => { return true; });
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
        console.log(enteredUserData);

        // evaluate validity: empty name/age and negative age not allowed
        if (enteredUserData.name.toString().trim().length === 0) {
            setNameIsValid(prev => { return false; });
            const name_invalid = !nameIsValid;
            props.onNameInvalid(name_invalid);

        }

        if ((enteredUserData.age.toString().trim().length === 0) | (enteredUserData.age.toString().trim() < 0)) {
            setAgeIsValid(prev => { return false; });
            const age_invalid = !ageIsValid;
            props.onNameInvalid(age_invalid);
        }

        props.saveUserData(enteredUserData);
        console.log('New user added!');

        setEnteredName(prev => { return ''; });
        setEnteredAge(prev => { return ''; });
        console.log('validity check in AddUser.js');
        console.log('name is valid? ' + nameIsValid);
        console.log('age is valid? ' + ageIsValid);
    };

    return <form onSubmit={submitHandler} className='body'>
        <div>
            <h3>Username</h3>
            <input className='input' type='text' onChange={nameChangeHandler} value={enteredName} />
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

export default AddUser;
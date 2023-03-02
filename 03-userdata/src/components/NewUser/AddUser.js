import React, { useState } from 'react';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import Card from '../UI/Card';

import AlertWindow from '../AlertWindow/AlertWindow';

const AddUser = props => {

    // record states
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [nameIsValid, setNameIsValid] = useState(true);
    const [ageIsValid, setAgeIsValid] = useState(true);

    const [alert, setAlert] = useState();
    const [alertMessage, setAlertMessage] = useState({ title: 'Input Error', message: '' });

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
            age: enteredAge,
        };
        console.log(enteredUserData);

        // evaluate validity: empty name/age and negative age not allowed
        if (enteredUserData.name.toString().trim().length === 0) {
            // setNameIsValid(prev => { return false; });
            // const name_invalid = !nameIsValid;
            // props.onNameInvalid(name_invalid);
            setAlert(prev => true);
            setAlertMessage(prev => ({...prev, message: 'Enter a name!'}));
            return;
        }

        if (enteredUserData.age.toString().trim().length === 0) {
            // setAgeIsValid(prev => { return false; });
            // const age_invalid = !ageIsValid;
            // props.onNameInvalid(age_invalid);
            setAlert(prev => true);
            setAlertMessage(prev => ({...prev, message: 'Age should be larger than zero!'}));
            return;
        }

        console.log('validity check in AddUser.js');
        console.log('name is valid? ' + nameIsValid);
        console.log('age is valid? ' + ageIsValid);

        props.saveUserData(enteredUserData);
        console.log('New user added!');

        setEnteredName(prev => { return ''; });
        setEnteredAge(prev => { return ''; });
    };

    // if ((nameIsValid === false) || (ageIsValid === false)) {
    //     return <AlertWindow alert={alertMessage} />;
    // }

    const dismissAlertHandler = () => {
        setAlert(false);
    };

    return (
        <div>
            {alert && (
                <AlertWindow
                    title={alertMessage.title}
                    message={alertMessage.message}
                    onDismiss={dismissAlertHandler}
                />
            )}

            <Card className={classes.input}>
                <form onSubmit={submitHandler} >
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        onChange={nameChangeHandler}
                        value={enteredName}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input
                        id='age'
                        type='number'
                        step='1'
                        onChange={ageChangeHandler}
                        value={enteredAge}
                        className={classes.input}
                    />

                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
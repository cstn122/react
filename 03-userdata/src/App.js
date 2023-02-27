import React, { useState } from 'react';
import './App.module.css';

import Card from './components/UI/Card';
import AddUser from './components/NewUser/AddUser';
import UserList from './components/UserList/UserList';
import AlertWindow from './components/AlertWindow/AlertWindow';
const DUMMY_USER_DATA = [
    {
        id: 'u1',
        name: 'Max',
        age: 30
    },
    {
        id: 'u2',
        name: 'Anne',
        age: 20
    }
];
const App = () => {
    const [userList, setUserList] = useState(DUMMY_USER_DATA);
    const saveDataHandler = userList => {
        // updatedData = userList.unshift(props.userData);
        // console.log('Data updated!')
        // return updatedData;
        setUserList(prevData => { return [userList, ...prevData]; })
    };

    // valid input
    return <div className='body'>
        {/* <AddUser onNameIsValid={props.nameIsValid} onAgeIsValid={props.ageIsValid} /> */}
        <AddUser saveUserData={saveDataHandler} />
        <UserList userData={userList} />
    </div>

    // // invalid name & age
    // if ((props.nameIsValid === false) || (props.ageIsValid === false)) {
    //     return <AlertWindow nameIsValid={props.nameIsValid} ageIsValid={props.ageIsValid} />;
    // }

};

export default App;

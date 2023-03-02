import React, { useState } from 'react';
import './App.module.css';

import AddUser from './components/NewUser/AddUser';
import UserList from './components/UserList/UserList';

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

const App = props => {
    const [userList, setUserList] = useState(DUMMY_USER_DATA);
    let content = '';

    const nameInvalidHandler = nameInvalid => {
        console.log('               ' + nameInvalid);
        content = 'name invalid';
        return;
    };

    const ageInvalidHandler = ageInvalid => {
        console.log('               ' + ageInvalid);
        content = 'age invalid';
        return;
    };

    if (content !== '') {
        alert(content);
    };

    const saveDataHandler = (userList) => {
        setUserList(prevData => { return [userList, ...prevData]; })
    };

    // valid input
    return (
        <div className='body'>
            <AddUser saveUserData={saveDataHandler} onNameInvalid={nameInvalidHandler} onAgeInvalid={ageInvalidHandler} />
            {/* <AddUser saveUserData={saveDataHandler} /> */}
            <UserList userData={userList} />
        </div>
    );
};

export default App;

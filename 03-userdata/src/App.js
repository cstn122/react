import React from 'react';
import './App.module.css';

import Card from './components/UI/Card';
import AddUser from './components/NewUser/AddUser';
import UserList from './components/UserList/UserList';
import AlertWindow from './components/AlertWindow/AlertWindow';

const DUMMY_USER_DATA = [
    {
        name: 'Max',
        age: 30
    },
    {
        name: 'Anne',
        age: 20
    }
];

const App = props => {

    // // valid input
    // if ((props.nameIsValid === true) & (props.ageIsValid === true)) {
    //     return <div>
    //         <AddUser onNameIsValid={nameIsValid} onAgeIsValid={ageIsValid} />
    //         <UserList userData={DUMMY_USER_DATA} />
    //     </div>
    // }

    // // invalid name & age
    // else if ((props.nameIsValid === false) || (props.ageIsValid === false)) {
    //     return <AlertWindow nameIsValid={nameIsValid} ageIsValid={ageIsValid} />;
    // }
    return <div>
        <AddUser />
        <UserList userData={DUMMY_USER_DATA} />
    </div>;

};

export default App;

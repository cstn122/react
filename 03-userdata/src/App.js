import React from 'react';
import './App.module.css';

import Card from './components/UI/Card';
import AddUser from './components/NewUser/AddUser';
import UserList from './components/UserList/UserList';

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
    return <div>
        <Card>
            <AddUser />
        </Card>

        <Card>
            <UserList userData={DUMMY_USER_DATA}/>
        </Card>
    </div>;
};

export default App;

import React from 'react';
import './App.module.css';

import Card from './components/UI/Card';
import AddUser from './components/NewUser/AddUser';
import UserList from './components/UserList/UserList';

const App = props => {
    return <div>
        <Card>
            <NewUser />
        </Card>

        <Card>
            <UserList />
        </Card>
    </div>;
};

export default App;

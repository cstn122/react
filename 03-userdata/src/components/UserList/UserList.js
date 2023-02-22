import React from 'react';
import './UserList.module.css'

import UserItem from './UserItem';

const UserList = props => {
    return <div >
        {props.userData.map((data) => <UserItem data={data}/>)}
    </div>;
};

export default UserList;
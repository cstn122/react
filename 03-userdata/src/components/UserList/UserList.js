import React from 'react';
import './UserList.module.css'

import UserItem from './UserItem';

const UserList = props => {
    console.log('In UserList.js: ' + props.userData);

    return <ul >
        {/* props.userData.unshift() */}
        {props.userData.map(data => {<UserItem data={data}/>})}
    </ul>;
};

export default UserList;
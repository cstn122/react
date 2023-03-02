import React from 'react';
import classes from './UserList.module.css'

import UserItem from './UserItem';

const UserList = props => {
    console.log('In UserList.js: ' + props.userData);

    return (
        <ul className={classes.users}>
            {props.userData.map((data) => (
                <UserItem key={data.id} name={data.name} age={data.age} />
            ))}
        </ul>
    );
};

export default UserList;
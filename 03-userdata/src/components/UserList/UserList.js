import React from 'react';
import classes from './UserList.module.css'

import Card from '../UI/Card';

const UserList = props => {
    console.log('In UserList.js: ' + props.userData);

    return (
        <Card className={classes.users}>
            <ul className={classes.users}>
                {props.userData.map((data) => (
                    <li key={data.id}>{data.name} ({data.age} years old)</li>
                ))}
            </ul>
        </Card>

    );
};

export default UserList;
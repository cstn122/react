import React from 'react';
import classes from './UserItem.module.css'
import Card from '../UI/Card';

const UserItem = props => {
    return (
        <Card >
            <div className={classes.body}>
                {props.name} ({props.age} years old)
            </div>
        </Card>
    );
};

export default UserItem;
import React from 'react';
import './UserItem.module.css'
import Card from '../UI/Card';

const UserItem = props => {
    return <Card className='body'>
        <div >
            {props.name} ({props.age} years old)
        </div>
    </Card>
};

export default UserItem;
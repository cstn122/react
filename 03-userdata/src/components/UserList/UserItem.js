import React from 'react';
import './UserItem.module.css'

const UserItem = props => {
    return <div data = {data}>
        {data.name} ({data.age} y/o)
    </div>;
};

export default UserItem;
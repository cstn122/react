import React from 'react';
import './UserItem.module.css'

const UserItem = props => {
    return <li >
        {/* {props.name} ({props.age} y/o) */}
        {props.data}
    </li>;
};

export default UserItem;
import React from 'react';
import './AddUser.module.css'

import Card from '../UI/Card'
import NewUserForm from './NewUserForm';
import '../AlertWindow/AlertWindow'
import AlertWindow from '../AlertWindow/AlertWindow';

const AddUser = props => {
    if (invalid === true) {
        return <AlertWindow />;
    }
    else {
        return <Card>
            <NewUserForm inputInvalid={invalid} />
        </Card>;
    }
};

export default AddUser;
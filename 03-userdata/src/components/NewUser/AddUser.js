import React from 'react';
import './AddUser.module.css'

import Card from '../UI/Card'
import NewUserForm from './NewUserForm';
import AlertWindow from '../AlertWindow/AlertWindow';

const AddUser = props => {



    if ((nameInvalid === true) | (ageInvalid === true)) {
        return <AlertWindow nameInvalid={nameInvalid} ageInvalid={ageInvalid} />;
    }
    else {
        return <Card>
            <NewUserForm onSaveUserData={enteredData} nameInvalid={nameInvalid} ageInvalid={ageInvalid} />
        </Card>;
    }
};

export default AddUser;
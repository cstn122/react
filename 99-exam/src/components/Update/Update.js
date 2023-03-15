import React, { useContext } from "react";
import Modal from '../UI/Modal';
import { FullDataDispatchContext } from "../../FullDataContext";

const Update = (props) => {
    const fullDataDispatchContext = useContext(FullDataDispatchContext);

    const saveUpdateHandler = (enteredData) => {
        fullDataDispatchContext({
            type: 'changed',
            payload: {
                id: props.updateItem.id,
                name: enteredData.name,
                description: enteredData.description,
                is_demo: props.updateItem.is_demo,
            },
        });
        props.onCancel('Update');
    };
    
    const cancelHandler = (cancel) => {
        console.log(cancel);
        props.onCancel(cancel);
    };

    return (<Modal title='Update' onSave={saveUpdateHandler} onCancel={cancelHandler} />);
}

export default Update;
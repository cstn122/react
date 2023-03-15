import React, { useContext } from "react";
import Modal from '../UI/Modal';
import { FullDataDispatchContext } from "../../FullDataContext/FullDataContext";

const Create = (props) => {
    const fullDataDispatchContext = useContext(FullDataDispatchContext);

    const saveCreateHandler = (enteredData) => {
        fullDataDispatchContext({
            type: 'added',
            payload: {
                id: Math.random(),
                name: enteredData.name,
                description: enteredData.description,
                is_demo: false,
            },
        });
        props.onCancel('Create');
    };

    const cancelHandler = (cancel) => {
        console.log(cancel);
        props.onCancel(cancel);
    };

    return (<Modal title='Create' onSave={saveCreateHandler} onCancel={cancelHandler} />);
}

export default Create;

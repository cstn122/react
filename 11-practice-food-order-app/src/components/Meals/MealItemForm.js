import React, { useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
    const [amount, setAmount] = useState(1);

    const addToCartHandler = (event) => {
        event.preventDefault();
        console.log('current amount: ', amount);
        props.onAddToCart(amount);
        setAmount(1);
    };

    return (
        <form onSubmit={addToCartHandler} className={classes.form}>
            {/* <Input type='number' min={1} step={1} label='Amount' value={amount} onChange={e => setAmount(() => e.target.value)} /> */}
            <Input
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: 1,
                    step: 1,
                    max: 5,
                    value: amount,
                    onChange: e => setAmount(() => e.target.value)
                }}
            />
            <button type='submit'>+ Add</button>
        </form>
    );
};

export default MealItemForm;
import React, { useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
    const [amount, setAmount] = useState(1);

    const amountChangeHandler = (event) => {
        setAmount(event.targe.value);
        console.log('amount changed to ', amount);
    };

    const addToCartHandler = (event) => {
        event.preventDefault();
        // add AMOUNT of meals to cart
        console.log('current amount: ', amount);
        console.log('item added to cart!');
        setAmount(1);
    };
    console.log(amount);

    return (
        <form onSubmit={addToCartHandler} className={classes.form}>
            <Input type='number' min={1} step={1} label='Amount' value={amount} onChange={amountChangeHandler} />
            <button type='submit'>+ Add</button>
        </form>
    );
};

export default MealItemForm;
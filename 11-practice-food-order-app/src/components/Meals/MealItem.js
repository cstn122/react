import React from 'react';
import classes from './MealItem.module.css';
import Input from '../../UI/Input';

const MealItem = ({ mealInfo }) => {
    const addAmountHandler = (prevAmount) => {
        return prevAmount + 1;
    };

    return (
        <div className={classes.meal} key={mealInfo.id}>
            <h3>{mealInfo.name}</h3>
            <p className={classes.description}>{mealInfo.description}</p>
            <p className={classes.price}>${mealInfo.price}</p>
            <label>Amount</label>
            <Input></Input>
            <button onClick={addAmountHandler}>+ Add</button>
        </div>
    );
};

export default MealItem;
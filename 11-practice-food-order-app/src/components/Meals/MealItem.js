import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (addedMeal) => {
    const addToCartHandler = (amount) => {
        console.log('addedMeal is', addedMeal);
        addedMeal.onAdd(addedMeal, amount);
    };

    return (
        <li className={classes.meal} key={addedMeal.id}>
            <div>
                <h3>{addedMeal.name}</h3>
                <p className={classes.description}>{addedMeal.description}</p>
                <p className={classes.price}>${addedMeal.price}</p>
            </div>
            <MealItemForm onAddToCart={addToCartHandler} id={addedMeal.id}/>
        </li>
    );
};

export default MealItem;
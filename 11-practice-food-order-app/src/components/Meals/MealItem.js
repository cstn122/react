import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ key, name, description, price }) => {

    return (
        <li className={classes.meal} key={key}>
            <h3>{name}</h3>
            <p className={classes.description}>{description}</p>
            <p className={classes.price}>${price}</p>
            <MealItemForm></MealItemForm>
        </li>
    );
};

export default MealItem;
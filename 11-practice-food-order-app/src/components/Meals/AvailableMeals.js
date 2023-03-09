import React, { useState } from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import Card from '../../UI/Card';

const AvailableMeals = (props) => {


  const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
  const [meals, setMeals] = useState(DUMMY_MEALS);

  const addMealHandler = (mealToAdd, amount) => {
    console.log('Adding', amount, mealToAdd.name, 'to cart...');
    props.onAdd(mealToAdd, amount);
  };

  return (
    <section >
      <Card classes={classes.meals}>
        <ul >
          {meals.map(meal =>
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              onAdd={addMealHandler} />)}
        </ul>
      </Card>
    </section>

  );
};

export default AvailableMeals;
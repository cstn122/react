import React from 'react';
import Header from './components/Header/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import MealsSummary from './components/MealsSummary/MealsSummary';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </>
  );
};

export default App;
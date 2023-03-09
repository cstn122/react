import React, { useState, useContext } from 'react';
import Header from './components/Header/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import MealsSummary from './components/MealsSummary/MealsSummary';
import Cart from './components/Cart/Cart';
import { CartItemsContext } from './CartItemsContext';

const App = (props) => {
  const [cartModal, setCartModal] = useState(null);
  const [mealToAdd, setMealToAdd] = useState(null);
  const [amountToAdd, setAmountToAdd] = useState(null);
  const [isAdding, setIsAdding] = useState(false);


  const cartItems = useContext(CartItemsContext);

  const showCartModal = (show) => {
    if (show) {
      setCartModal(
        <Cart
          addedMeal={mealToAdd}
          addedAmount={amountToAdd}
          onClose={() => setCartModal(() => null)}
          adding={isAdding}
        />
      );
    }
  };

  const addHandler = (meal, amount) => {
    setIsAdding(true);
    setMealToAdd(() => meal);
    setAmountToAdd(() => amount);
    
  };

  return (
    <CartItemsContext.Provider value={itemsIncart}>
      {cartModal}
      <Header onShowCartModal={showCartModal} />
      <MealsSummary />
      <AvailableMeals onAdd={addHandler} />
    </CartItemsContext.Provider>
  );
};

export default App;
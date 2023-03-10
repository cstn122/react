import React, { useState, useContext } from 'react';
import Header from './components/Header/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import MealsSummary from './components/MealsSummary/MealsSummary';
import Cart from './components/Cart/Cart';
import { CartItemsContext, SetCartItemsContext } from './CartItemsContext';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartModal, setCartModal] = useState(null);

  const showCartModal = (show) => {
    show && setCartModal(<Cart onClose={() => setCartModal(() => null)} />);
  };

  const addToCartHandler = (meal, amount) => {
    setCartItems(() =>
      [...cartItems, { key: meal.id, item: meal.name, price: meal.price, amount: amount }]
    );
    console.log('done adding', cartItems);
  };

  return (
    <CartItemsContext.Provider value={cartItems}>
      <SetCartItemsContext.Provider value={setCartItems}>
        {cartModal}
        <Header onShowCartModal={showCartModal} />
        <MealsSummary />
        <AvailableMeals onAdd={addToCartHandler} />
      </SetCartItemsContext.Provider>
    </CartItemsContext.Provider>
  );
};

export default App;
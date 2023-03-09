import React, { useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../../UI/Modal';
import CartItem from '../Cart/CartItem';

const Cart = ({ addedMeal, addedAmount, onClose, adding }) => {
  const [cartItems, setCartItems] = useState([{
    item: '',
    price: null,
    amount: null,
  }]);

  if (adding) {
    setCartItems([...cartItems, { item: addedMeal.item, price: addedMeal.price, amount: addedAmount }]);
    console.log('adding', adding);
  }

  const closeHandler = () => {
    console.log('closing');
    onClose(true);
  };

  const orderHandler = (e) => {
    e.preventDefault();
    onClose(true);
    console.log('ordering');
  };

  return (
    <Modal >
      <ul classes={classes['cart-items']}>
        {cartItems.map(item => <CartItem
          name={item.name}
          price={item.price}
          amount={addedAmount} >
          {item.name}
        </CartItem>)}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$50</span>
      </div>
      <div className={classes.actions}>
        <button onClick={closeHandler} className={classes['button--alt']}>Close</button>
        <button onClick={orderHandler} className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
import React, { useState, useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../../UI/Modal';
import CartItem from '../Cart/CartItem';
import { CartItemsContext, SetCartItemsContext } from '../../CartItemsContext';

const Cart = ({ onClose }) => {
  const cartItems = useContext(CartItemsContext);
  const setCartItems = useContext(SetCartItemsContext);

  const closeHandler = () => {
    console.log('closing');
    onClose(true);
  };

  const orderHandler = (e) => {
    e.preventDefault();
    onClose(true);
    console.log('ordering');
    setCartItems([]);
  };

  console.log(cartItems);

  let totalPrice = 0;
  cartItems.map(item => totalPrice += item.price);

  return (
    <Modal >
      <ul classes={classes['cart-items']}>
        {cartItems.map(item => <CartItem
        key={item.key}
          name={item.item}
          price={item.price}
          amount={item.amount} >
        </CartItem>)}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={closeHandler} className={classes['button--alt']}>Close</button>
        <button onClick={orderHandler} className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
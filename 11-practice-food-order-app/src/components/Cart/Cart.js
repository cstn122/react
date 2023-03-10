import React, { useState, useEffect, useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../../UI/Modal';
import CartItem from '../Cart/CartItem';
import { CartItemsContext, SetCartItemsContext } from '../../CartItemsContext';

const Cart = ({ onClose }) => {

  const cartItems = useContext(CartItemsContext);
  const setCartItems = useContext(SetCartItemsContext);

  const orderHandler = (e) => {
    e.preventDefault();
    onClose(true);
    console.log('ordering');
    setCartItems([]);
  };

  console.log(cartItems);

  let totalPrice = 0;
  cartItems.map(item => totalPrice += item.price);
  const cartItem = cartItems.map(item => <CartItem
    key={item.key}
    name={item.item}
    price={item.price}
    amount={item.amount}
  />);

  return (
    <Modal onClose={onClose}>
      <ul classes={classes['cart-items']}>{cartItem}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onClose} className={classes['button--alt']}>Close</button>
        <button onClick={orderHandler} className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
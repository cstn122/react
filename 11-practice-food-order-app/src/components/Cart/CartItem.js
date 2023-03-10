import React, { useContext, useEffect } from 'react';
import classes from './CartItem.module.css';
import { CartItemsContext, SetCartItemsContext } from '../../CartItemsContext';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartItems = useContext(CartItemsContext);
  const setCartItems = useContext(SetCartItemsContext);

  const increaseHandler = () => {
    // props.amount += 1;
    console.log(props);
    props = {...props, amount: 99};
  };
  const decreaseHandler = () => {
    props.amount -= 1;
  };

  return (
    <li className={`${classes['cart-item']} ${props.classes}`}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={decreaseHandler}>−</button>
        <button onClick={increaseHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

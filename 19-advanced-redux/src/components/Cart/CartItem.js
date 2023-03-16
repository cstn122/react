import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { CartSliceActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const { name, id, price, quantity, totalPrice } = props;
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(CartSliceActions.addItemToCart({
      id: id,
      name: name,
      price: price,
      quantity: quantity,
      totalPrice: totalPrice,
    }));
  };

  const decreaseHandler = () => {
    dispatch(CartSliceActions.removeItemFromCart({
      id: id,
      name: name,
      price: price,
      quantity: quantity,
      totalPrice: totalPrice,
    }));
  };

  return (
    <li className={classes.item} key={id}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

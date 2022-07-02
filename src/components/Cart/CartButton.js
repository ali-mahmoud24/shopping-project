import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

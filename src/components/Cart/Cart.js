import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-slice'

import CartItem from './CartItem'
import Modal from '../UI/Modal'

import classes from './Cart.module.css'

const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const cartIsShown = useSelector(state => state.ui.cartIsShown)

  const onCloseHandler = () => {
    dispatch(uiActions.closeCart())
  }

  const cartItems = items.map(item => (
    <CartItem
      key={item.id}
      item={{
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        total: item.totalPrice,
        price: item.price,
      }}
    />
  ))

  let isEmpty = true
  if (cartItems.length > 0) {
    isEmpty = false
  }

  if (!cartIsShown) {
    return null
  }

  return (
    <Modal>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalPrice}</span>
      </div>

      {isEmpty && <p className={classes['cart-empty']}>Your shopping cart is empty!</p>}

      <ul>{cartItems}</ul>

      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onCloseHandler}>
          Close
        </button>
        {!isEmpty && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart

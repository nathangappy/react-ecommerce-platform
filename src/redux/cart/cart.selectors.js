import { createSelector } from 'reselect';

const selectCart = (state) => {
  return state.cart;
}

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity;
    }, 0)
)
import { Product } from "./product";

export interface Cart {
  items: CartItemSet;
}

export interface CartItem {
  id: number;
  qty: number;
}

export interface ProductCartItem extends CartItem {
  product: Product;
  amount: number;
}

export type CartItemSet = CartItem[];
export type ProductCartItemSet = ProductCartItem[];

export interface CartState {
  cart: Cart;
}

export enum ACTION_TYPES {
  FETCH_CART = "fetchCart",
  ADD_TO_CART = "addToCart",
  REMOVE_FROM_CART = "removeFromCart",
  CLEAR_CART = "clearCart"
}

export enum MUTATION_TYPES {
  SET_CART = "SET_CART",
  ADD_TO_CART = "ADD_TO_CART",
  UPDATE_CART_ITEM = "UPDATE_CART_ITEM",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CLEAR_CART = "CLEAR_CART"
}

export const CART_STATE_KEY = "cart";

export const initialCartState: CartState = {
  cart: {
    items: []
  }
};

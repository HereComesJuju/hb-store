import { MutationTree } from "vuex";
import {
  CartItem,
  Cart,
  MUTATION_TYPES,
  CartState,
  CartItemSet
} from "@/types/store/cart";

const mutations: MutationTree<CartState> = {
  [MUTATION_TYPES.ADD_TO_CART](state: CartState, cartItem: CartItem) {
    const { cart } = state;
    cart.items.push(cartItem);
  },

  [MUTATION_TYPES.UPDATE_CART_ITEM](state: CartState, { cartItem, qty }) {
    cartItem.qty += qty;
  },

  [MUTATION_TYPES.SET_CART](state: CartState, newCartState: CartState) {
    state = newCartState;
  },

  [MUTATION_TYPES.REMOVE_FROM_CART](state: CartState, id: number) {
    const newCartItemSet: CartItemSet = state.cart.items.filter(
      (item: CartItem) => item.id !== id
    );

    state.cart.items = newCartItemSet;
  }
};

export default mutations;

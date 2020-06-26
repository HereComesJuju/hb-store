import { ActionContext } from "vuex";
import {
  ACTION_TYPES,
  CartItem,
  MUTATION_TYPES,
  CartState
} from "@/types/store/cart";
import { ACTION_TYPES as NOTIFICATION_ACTION_TYPES } from "@/types/store/notification";
import { RootState } from "@/types/store/root";

const actions = {
  async [ACTION_TYPES.ADD_TO_CART](
    { commit, dispatch, getters }: ActionContext<CartState, RootState>,
    cartItem: CartItem
  ) {
    try {
      const { id, qty = 1 } = cartItem;
      const itemInCart = getters.getItemById(id);

      if (!itemInCart) {
        commit(MUTATION_TYPES.ADD_TO_CART, cartItem);
      } else {
        commit(MUTATION_TYPES.UPDATE_CART_ITEM, { cartItem: itemInCart, qty });
      }
    } catch (e) {
      const notification = {
        type: "error",
        message: `Failed to fetch products: ${e.message}`,
        stack: e.stack || "no stack"
      };
      dispatch(NOTIFICATION_ACTION_TYPES.PUSH, notification, { root: true });
    }
  },
  async [ACTION_TYPES.REMOVE_FROM_CART](
    { commit }: ActionContext<CartState, RootState>,
    id: number
  ) {
    commit(MUTATION_TYPES.REMOVE_FROM_CART, id);
  }
};

export default actions;

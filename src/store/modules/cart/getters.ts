import {
  CartItem,
  CartState,
  ProductCartItemSet,
  ProductCartItem
} from "@/types/store/cart";
import { RootState } from "@/types/store/root";
import { GetterTree } from "vuex";
import { Product } from "@/types/store/product";

const getters: GetterTree<CartState, RootState> = {
  getItemById: (state: CartState) => (itemId: number) =>
    state.cart.items.find(({ id }: CartItem) => id === itemId),
  cartSize: (state: CartState, getters) =>
    getters.cartProducts.reduce(
      (length: number, cartProduct: ProductCartItem) =>
        length + cartProduct.qty,
      0
    ),
  cartProducts: (state: CartState, getters: any, rootState: RootState) => {
    const cartItemProducts: ProductCartItemSet = state.cart.items.reduce(
      (list: ProductCartItemSet, item: CartItem) => {
        const product: Product | undefined = rootState.product.products.find(
          (product: Product) => product.id === item.id
        );

        if (product) {
          list.push({
            id: item.id,
            qty: item.qty,
            amount: item.qty * product.price,
            product
          });
        }

        return list;
      },
      []
    );

    return cartItemProducts;
  },
  cartTotalAmount: (state, getters) => {
    return getters.cartProducts.reduce(
      (total: number, { qty, product }: ProductCartItem) =>
        total + product.price * qty,
      0
    );
  }
};

export default getters;

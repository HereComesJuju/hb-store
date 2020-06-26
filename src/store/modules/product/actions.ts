import { ActionContext } from "vuex";
import { ACTION_TYPES, MUTATION_TYPES } from "@/types/store/product";
import { ProductSet, ProductState } from "@/types/store/product";
import { ACTION_TYPES as NOTIFICATION_ACTION_TYPES } from "@/types/store/notification";
import { RootState } from "@/types/store/root";
import { getProducts } from "@/services/ProductService";

const actions = {
  async [ACTION_TYPES.FETCH_PRODUCTS]({
    commit,
    dispatch
  }: ActionContext<ProductState, RootState>) {
    try {
      const products: ProductSet = await getProducts();
      commit(MUTATION_TYPES.SET_PRODUCTS, products);
    } catch (e) {
      const notification = {
        type: "error",
        message: `Failed to fetch products: ${e.message}`,
        stack: e.stack || "no stack"
      };
      dispatch(NOTIFICATION_ACTION_TYPES.PUSH, notification, { root: true });
    }
  }
};

export default actions;

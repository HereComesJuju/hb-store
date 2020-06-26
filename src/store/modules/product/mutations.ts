import {
  MUTATION_TYPES,
  ProductState,
  ProductSet
} from "@/types/store/product";

const mutations = {
  [MUTATION_TYPES.SET_PRODUCTS](state: ProductState, products: ProductSet) {
    state.products = products;
  }
};

export default mutations;

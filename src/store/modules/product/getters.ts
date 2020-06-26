import { GetterTree } from "vuex";
import { ProductState, Product } from "@/types/store/product";

const getters: GetterTree<ProductState, any> = {
  productSetLength: (state: ProductState): number => state.products.length,
  getProductById: (state: ProductState) => (productId: number) =>
    state.products.find(({ id }: Product) => id === productId)
};

export default getters;

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export type ProductSet = Product[];

export type ProductState = {
  products: ProductSet;
};

export enum ACTION_TYPES {
  FETCH_PRODUCTS = "fetchProducts",
  FETCH_PRODUCT = "fetchProduct"
}

export enum MUTATION_TYPES {
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_PRODUCT = "SET_PRODUCT"
}

<template>
  <section class="products">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { ProductSet, Product } from "@/types/store/product";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ProductList",
  components: {
    ProductCard
  },
  computed: {
    ...mapState({
      products: state => state.product.products
    }),
    ...mapGetters({
      productSetLength: "product/productSetLength"
    })
  },
  methods: {
    ...mapActions("product", ["fetchProducts"])
  }
};
</script>

<style scoped>
.products {
  @apply max-w-screen-xxl p-4 mx-auto my-0 flex flex-wrap;
}
</style>

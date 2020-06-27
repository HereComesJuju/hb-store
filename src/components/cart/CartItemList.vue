<template>
  <section class="cart-items">
    <CartItem
      v-for="cartItem in cartProducts"
      :key="cartItem.id"
      :cartItem="cartItem"
    />
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import CartItem from "@/components/cart/CartItem.vue";

export default {
  name: "CartItemList",
  components: {
    CartItem
  },
  computed: {
    ...mapState({
      items: state => state.cart.items
    }),
    ...mapGetters({
      cartSize: "cart/cartSize",
      cartProducts: "cart/cartProducts",
      cartTotalAmount: "cart/cartTotalAmount"
    })
  },
  methods: {
    ...mapActions("product", ["fetchProducts"])
  },
  async mounted() {
    await this.fetchProducts();
  }
};
</script>

<style scoped>
.cart-items {
  @apply w-full max-w-screen-xxl p-4 mx-auto my-0 overflow-y-auto;
}
</style>

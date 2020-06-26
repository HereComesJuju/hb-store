<template>
  <section class="cart">
    <header class="page-header">
      <h1 class="page-title">
        {{ pageHeader }} <span v-if="cartSize">({{ cartSize }})</span>
      </h1>
    </header>
    <div class="cart-item-list-wrapper">
      <EmptyCart v-if="isEmptyCart" />
      <CartItemList v-else />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import EmptyCart from "@/components/EmptyCart.vue";
import CartItemList from "@/components/cart/CartItemList.vue";

export default {
  name: "Cart",
  components: {
    EmptyCart,
    CartItemList
  },
  data() {
    return {
      pageHeader: "Cart"
    };
  },
  computed: {
    ...mapState({ cartItems: state => state.cart.cart.items }),
    ...mapGetters("cart", ["cartProducts", "cartSize", "cartTotalAmount"]),
    isEmptyCart() {
      return !this.cartProducts || !this.cartProducts.length;
    }
  },
  methods: {
    ...mapActions("cart", ["removeFromCart"]),
    ...mapActions("nav", ["setPageHeader"])
  },
  async mounted() {
    await this.setPageHeader(this.pageHeader);
  }
};
</script>

<style scoped>
.page-header {
  @apply w-full max-w-screen-xxl px-6 py-4 mx-auto my-0;
}

.page-title {
  @apply font-semibold text-2xl;
}

.image {
  height: 200px;
  width: auto;
}

.cart {
  @apply h-full w-full flex flex-col justify-center items-center;
}

.cart-item-list-wrapper {
  @apply h-full w-full overflow-y-auto flex flex-col justify-start items-center;
}
</style>

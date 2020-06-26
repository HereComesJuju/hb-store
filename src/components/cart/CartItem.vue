<template>
  <section class="cart-item">
    <div class="item-image cart-item-section">
      <img
        :src="cartItem.product.image"
        :alt="cartItem.product.title"
        :title="cartItem.product.title"
      />
    </div>
    <div class="product-info cart-item-section">
      <h5 class="title">{{ productCartItem.product.title }}</h5>
    </div>
    <div class="item-qty cart-item-section">
      <h6 class="qty">{{ productCartItem.qty }}</h6>
    </div>
    <div class="item-amount cart-item-section">
      <h6 class="amount">{{ productCartItem.formattedAmount }}</h6>
    </div>
    <div class="product-actions">
      <button
        @click="removeFromCart(productCartItem.id)"
        class="btn remove-from-cart"
      >
        <unicon name="multiply" fill="#718096" height="24" width="24" />
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { CartItem } from "@/types/store/cart";
import toCurrency from "@/helpers/formatters/currencyFormatter";

export default {
  name: "CartItem",
  props: {
    cartItem: {
      type: CartItem,
      required: true
    }
  },
  computed: {
    productCartItem() {
      return {
        ...this.cartItem,
        formattedAmount: toCurrency(this.cartItem.amount)
      };
    }
  },
  methods: {
    ...mapActions("cart", ["removeFromCart"]),
    ...mapActions("nav", ["setPageHeader"])
  }
};
</script>

<style scoped>
.cart-item {
  @apply w-full min-h-10r py-4 mx-auto flex justify-between items-center text-sm border-b border-gray-400;
}

.cart-item-section {
  @apply w-1/4 mx-1;
}

.item-image {
  @apply max-w-10r mr-4 mb-2 flex justify-center items-start;
}

.item-image img {
  @apply w-full object-cover;
}

.title {
  @apply font-semibold;
}

.item-qty {
  @apply text-center;
}

.product-actions {
  @apply absolute top-4 right-4 text-gray-500;
}
</style>

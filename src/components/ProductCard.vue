<template>
  <section class="product-card">
    <div class="product-image">
      <img
        :src="productItem.image"
        :alt="productItem.title"
        :title="productItem.title"
      />
    </div>
    <div class="product-info">
      <p class="title">{{ productItem.title }}</p>
      <p class="price">{{ productItem.price }}</p>
    </div>
    <div class="product-actions">
      <a @click="add(productItem.id)" class="btn add-to-cart">Add to cart</a>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { Product } from "@/types/store/product";
import toCurrency from "@/helpers/formatters/currencyFormatter";

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Product,
      required: true
    }
  },
  computed: {
    productItem() {
      return {
        ...this.product,
        price: toCurrency(this.product.price)
      };
    }
  },
  methods: {
    add(id, qty = 1) {
      const cartItem = {
        id,
        qty
      };
      this.addToCart(cartItem);
    },
    ...mapActions("cart", ["addToCart"])
  }
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  flex: 1 24%;
  background-color: #fff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25);
  margin: 0.5rem;
  border-radius: 10px;
}

.product-image {
  @apply mb-2 flex justify-center items-start;
}

.product-image img {
  @apply h-48 object-contain;
}

.product-info {
  @apply w-5/6 mt-auto flex flex-col justify-between items-center text-center;
  height: calc(100% - 200px);
}

.title,
.price {
  @apply font-semibold text-lg;
}

.description {
  @apply w-full text-sm;
}

.title,
.price {
  @apply font-semibold;
}

.product-actions {
  @apply p-2 flex justify-center items-center;
  /* display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem; */
}

.btn.add-to-cart {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
  margin: 1rem 0;
}

.btn.add-to-cart:hover {
  @apply bg-blue-700;
}

@media (max-width: 920px) {
  .product-card {
    flex: 1 46%;
  }
}

@screen xs {
  .product-card {
    flex: 1 46%;
  }

  .product-image img {
    height: 150px;
    object-fit: contain;
  }
}

@screen xxs {
  .product-card {
    flex: 1 100%;
  }
}

@screen lg {
  .product-card {
    flex: 1 21%;
  }
}
</style>

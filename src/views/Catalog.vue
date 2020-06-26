<template>
  <section class="catalog">
    <header class="page-header">
      <h1 class="page-title">
        {{ pageHeader }}
        <span v-if="productSetLength">({{ productSetLength }})</span>
      </h1>
    </header>
    <div class="product-list-wrapper">
      <ProductList />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductList from "@/components/ProductList.vue";

export default {
  name: "Catalog",
  components: {
    ProductList
  },
  data() {
    return {
      pageHeader: "Products"
    };
  },
  computed: {
    ...mapGetters({
      cartSize: "cart/cartSize",
      productSetLength: "product/productSetLength"
    })
  },
  methods: {
    ...mapActions("nav", ["setPageHeader"])
  },
  async mounted() {
    await this.setPageHeader(this.pageHeader);
  }
};
</script>

<style scoped>
.catalog {
  @apply h-full w-full flex flex-col justify-center items-center;
}

.page-header {
  @apply w-full max-w-screen-xxl px-6 py-4 mx-auto my-0;
}

.page-title {
  @apply font-semibold text-2xl;
}

.product-list-wrapper {
  @apply h-full w-full overflow-y-auto;
}
</style>

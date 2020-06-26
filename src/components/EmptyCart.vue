<template>
  <div id="empty-cart-wrapper">
    <p>Your cart is currently empty</p>
    <router-link to="/" class="btn">Continue shopping &rarr;</router-link>
  </div>
</template>

<script>
export default {
  name: "EmptyCart"
};
</script>

<style scoped>
#empty-cart-wrapper {
  @apply h-full w-full flex flex-col justify-center items-center;
}

.btn {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
  margin: 1rem 0;
}

.btn:hover {
  @apply bg-blue-700;
}
</style>

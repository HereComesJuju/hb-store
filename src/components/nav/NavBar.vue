<template>
  <nav>
    <ul id="nav-list">
      <li class="nav-item">
        <router-link to="/" class="nav-item-link">Products</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cart" class="nav-item-link"
          >Cart ({{ cartSize }})</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters({
      cartSize: "cart/cartSize"
    })
  }
};
</script>

<style scoped>
#nav-list {
  @apply flex;
}

nav a.router-link-exact-active {
  @apply text-blue-500 font-bold;
}

.nav-item {
  @apply text-center;
}

.nav-item-link:hover {
  @apply font-bold;
}

.nav-item:first-of-type {
  @apply mr-2;
}
</style>

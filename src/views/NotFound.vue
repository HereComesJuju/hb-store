<template>
  <div id="not-found-wrapper">
    <p>Page not found</p>
    <router-link to="/" class="btn">Back to home page &rarr;</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NotFound",
  data() {
    return {
      pageHeader: ""
    };
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
#not-found-wrapper {
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

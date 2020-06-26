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
  @apply mr-0 my-4 px-4 py-2 bg-blue-500 text-white font-bold rounded;
}

.btn:hover {
  @apply bg-blue-700;
}
</style>

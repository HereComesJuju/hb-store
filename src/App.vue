<template>
  <div id="app">
    <NotificationContainer />
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import DefaultLayout from "@/components/layout/DefaultLayout.vue";
import NotificationContainer from "@/components/notifications/NotificationContainer.vue";

export default {
  name: "App",
  components: {
    DefaultLayout,
    NotificationContainer
  },
  computed: {
    ...mapState({
      nav: state => state.nav
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
#app {
  @apply h-full w-full;
}
</style>

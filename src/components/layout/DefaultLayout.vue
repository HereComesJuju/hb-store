<template>
  <div id="default" class="layout">
    <TopBar />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import NavBar from "@/components/nav/NavBar.vue";
import TopBar from "@/components/layout/topbar/TopBar.vue";

export default {
  name: "DefaultLayout",
  components: {
    // NavBar,
    TopBar
  },
  computed: {
    ...mapState({
      nav: state => state.nav
    })
  }
};
</script>

<style scoped>
.layout {
  @apply h-full w-full;
}

main {
  @apply h-full w-full pt-16;
}
</style>

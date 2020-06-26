<template>
  <div class="wrapper">
    <div id="top-bar">
      <div id="logo" class="left">
        <router-link to="/">{{ nav.appName }}</router-link>
      </div>
      <div class="right">
        <NavBar />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "@/components/nav/NavBar.vue";

export default {
  name: "TopBar",
  components: {
    NavBar
  },
  computed: {
    ...mapState({
      nav: state => state.nav
    })
  }
};
</script>

<style scoped>
.wrapper {
  @apply fixed h-16 w-screen p-4 flex justify-center items-center z-50 bg-main-bg text-lg;
}
#top-bar {
  @apply h-full w-full max-w-screen-xxl px-2 py-4 mx-auto my-0 flex justify-between items-center;
}

@screen lg {
  #page-header {
    @apply top-5 text-5xl;
  }
}
</style>

<template>
  <div class="notification-container">
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationBar from "@/components/notifications/NotificationBar.vue";

export default {
  name: "NotificationContainer",
  computed: {
    ...mapState({
      notifications: state => state.notification.notifications
    })
  },
  components: {
    NotificationBar
  }
};
</script>

<style scoped>
.notification-container {
  @apply fixed bottom-0 right-0 pr-40;
}
</style>

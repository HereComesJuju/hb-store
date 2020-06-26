import { v4 } from "uuid";
import {
  MUTATION_TYPES,
  NotificationState,
  NotificationSet,
  Notification
} from "@/types/store/notification";

const mutations = {
  [MUTATION_TYPES.PUSH](state: NotificationState, notification: Notification) {
    state.notifications.push({
      ...notification,
      id: v4()
    });
  },
  [MUTATION_TYPES.REMOVE](
    state: NotificationState,
    notification: Notification
  ) {
    state.notifications = state.notifications.filter(
      ({ id }) => id !== notification.id
    );
  }
};

export default mutations;

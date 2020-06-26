import { ActionContext } from "vuex";
import { ACTION_TYPES, MUTATION_TYPES } from "@/types/store/notification";
import { Notification, NotificationState } from "@/types/store/notification";
import { RootState } from "@/types/store/root";

const actions = {
  [ACTION_TYPES.PUSH](
    { commit }: ActionContext<NotificationState, RootState>,
    notification: Notification
  ) {
    commit(MUTATION_TYPES.PUSH, notification);
  },
  [ACTION_TYPES.REMOVE](
    { commit }: ActionContext<NotificationState, RootState>,
    notification: Notification
  ) {
    commit(MUTATION_TYPES.REMOVE, notification);
  }
};

export default actions;

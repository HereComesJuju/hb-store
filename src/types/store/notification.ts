export interface Notification {
  id: string;
  type: string;
  message: number;
  stack: string;
}

export type NotificationSet = Notification[];

export interface NotificationState {
  notifications: NotificationSet;
}

export enum ACTION_TYPES {
  PUSH = "push",
  REMOVE = "remove"
}

export enum MUTATION_TYPES {
  PUSH = "PUSH",
  REMOVE = "REMOVE"
}

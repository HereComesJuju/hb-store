import { CartState } from "./cart";
import { NavState } from "./nav";
import { NotificationState } from "./notification";
import { ProductState } from "./product";

export interface RootState {
  cart: CartState;
  nav: NavState;
  notifcation: NotificationState;
  product: ProductState;
}

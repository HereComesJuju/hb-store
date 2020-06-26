import { ActionContext } from "vuex";
import { ACTION_TYPES, MUTATION_TYPES } from "@/types/store/nav";
import { NavState } from "@/types/store/nav";
import { RootState } from "@/types/store/root";

const actions = {
  async [ACTION_TYPES.SET_PAGE_HEADER](
    { commit }: ActionContext<NavState, RootState>,
    title: string
  ) {
    commit(MUTATION_TYPES.SET_PAGE_HEADER, title);
  },
  async [ACTION_TYPES.TOGGLE_MENU]({
    commit
  }: ActionContext<NavState, RootState>) {
    commit(MUTATION_TYPES.TOGGLE_MENU);
  },
  async [ACTION_TYPES.OPEN_MENU]({
    commit
  }: ActionContext<NavState, RootState>) {
    commit(MUTATION_TYPES.OPEN_MENU);
  },
  async [ACTION_TYPES.CLOSE_MENU]({
    commit
  }: ActionContext<NavState, RootState>) {
    commit(MUTATION_TYPES.CLOSE_MENU);
  }
};

export default actions;

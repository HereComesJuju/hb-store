import { MUTATION_TYPES } from "@/types/store/nav";
import { NavState } from "@/types/store/nav";

const mutations = {
  [MUTATION_TYPES.SET_PAGE_HEADER](state: NavState, title: string) {
    state.pageHeader = title;
  },
  [MUTATION_TYPES.TOGGLE_MENU](state: NavState) {
    state.isMenuOpen = !state.isMenuOpen;
  },
  [MUTATION_TYPES.OPEN_MENU](state: NavState) {
    state.isMenuOpen = true;
  },
  [MUTATION_TYPES.CLOSE_MENU](state: NavState) {
    state.isMenuOpen = false;
  }
};

export default mutations;

export interface NavState {
  isFirstPageLoading: boolean;
  pageHeader: string;
  isMenuOpen: boolean;
}

export enum ACTION_TYPES {
  SET_PAGE_HEADER = "setPageHeader",
  TOGGLE_MENU = "toggleMenu",
  OPEN_MENU = "openMenu",
  CLOSE_MENU = "closeMenu"
}

export enum MUTATION_TYPES {
  SET_PAGE_HEADER = "SET_PAGE_HEADER",
  TOGGLE_MENU = "TOGGLE_MENU",
  OPEN_MENU = "OPEN_MENU",
  CLOSE_MENU = "CLOSE_MENU"
}

import { NavState } from "@/types/store/nav";

const getters = {
  pageHeader: (state: NavState) => state.pageHeader
};

export default getters;

import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultstate = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalpage: 1
});

export default (state = defaultstate, action) => {
  switch (action.type) {
    case constants.CHANG_PAGE:
      return state.set("page",);
    case constants.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case constants.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case constants.SEARCH_FOCUS:
      return state.set("focused", true);
    case constants.SEARCH_BLUR:
      return state.set("focused", false);
    case constants.CHANG_LIST:
      return state.set("list", action.data).set("totalpage", action.totalpage);
    default:
      return state;
  }
};

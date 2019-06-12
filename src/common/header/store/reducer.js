import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultstate = fromJS({
  focused: false,
  list: []
});

export default (state = defaultstate, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set("focused", true);
    case constants.SEARCH_BLUR:
      return state.set("focused", false);
    case constants.CHANG_LIST:
      return state.set("list", action.data);
    default:
      return state;
  }
};

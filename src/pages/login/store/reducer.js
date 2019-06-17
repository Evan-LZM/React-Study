import { fromJS } from "immutable";
import * as constants from "./constants";
const defaultstate = fromJS({
  login: false
});

export default (state = defaultstate, action) => {
  switch (action.type) {
    case constants.CHANGELOGIN:
      return state.set("login", action.value);
    case constants.CHANGELOGOUT:
      return state.set("login", action.value);
    default:
      return state;
  }
};

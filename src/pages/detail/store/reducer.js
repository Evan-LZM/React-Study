import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultstate = fromJS({
  id: "",
  title: "",
  content: ""
});

export default (state = defaultstate, action) => {
  switch (action.type) {
    case constants.CHANGEDETAIL:
      return state.merge({
        id: fromJS(action.id),
        title: fromJS(action.title),
        content: fromJS(action.content)
      });
    default:
      return state;
  }
};

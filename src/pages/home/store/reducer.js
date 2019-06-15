import { fromJS } from "immutable";
import * as constants from "./constants";
const defaultstate = fromJS({
  topicList: [],
  articleList: [],
  advertisementList: [],
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    advertisementList: fromJS(action.advertisementList)
  });
};

const toTopShow = (state, action) => {};
export default (state = defaultstate, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    //方法一：
    // state
    // .set("topicList", fromJS(action.topicList))
    // .set("articleList", fromJS(action.articleList))
    // .set("advertisementList", fromJS(action.advertisementList));
    case constants.ToTopShow:
      return state.set("showScroll", action.show);
    default:
      return state;
  }
};

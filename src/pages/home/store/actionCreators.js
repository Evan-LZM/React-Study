import axios from "axios";
import * as constants from "./constants";

const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  advertisementList: result.advertisementList
});

export const getHomeInfo = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
      const data = res.data.data;
      dispatch(changeHomeData(data));
    });
  };
};

export const scrollToTopShow = flag => ({
  type: constants.ToTopShow,
  show: flag
});

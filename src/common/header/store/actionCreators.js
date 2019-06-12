import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";

const changeList = data => ({
  type: constants.CHANG_LIST,
  data: fromJS(data),
  totalpage: Math.ceil(data.length / 10)
});
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const changePage = page => ({
  type: constants.CHANG_PAGE,
  page: page
});

export const getList = () => {
  return dispatch => {
    axios
      .get("/api/headerList.json")
      .then(res => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch(() => {});
  };
};

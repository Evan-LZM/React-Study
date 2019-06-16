import axios from "axios";
import * as constants from "./constants";
const changeDetail = (id, title, content) => ({
  type: constants.CHANGEDETAIL,
  id: id,
  title: title,
  content: content
});

export const getDetailInfo = id => {
  return dispatch => {
    axios.get("/api/detail.json?id=" + id).then(res => {
      const result = res.data.data;
      result.map(item => {
        if (item.id === id) {
          dispatch(changeDetail(item.id, item.title, item.content));
        }
      });
    });
  };
};

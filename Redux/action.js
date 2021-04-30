import axios from "axios";

export const DATA_RESPONSE = "DATA_REQUEST";

export const DATA_RESPONSE_END = "DATA_REQUEST_END";

export const STORE_DATAS = "STORE_DATAS";

export const CLEAR_DATAS = "CLEAR_DATAS";

export const CraeteTopicOfDB = (title, description) => (dispatch, getState) => {
  dispatch({ type: DATA_RESPONSE_END });
  axios
    .post("https://bambwc20.loca.lt/api/topics/create", {
      data: {
        title,
        description,
      },
    })
    .then(() => {
      axios.get("https://bambwc20.loca.lt/api/topics").then((res) => {
        dispatch({ type: STORE_DATAS, community1_datas: res.data });
        dispatch({ type: DATA_RESPONSE });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

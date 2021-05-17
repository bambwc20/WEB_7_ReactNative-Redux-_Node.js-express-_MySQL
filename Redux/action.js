import axios from "axios";

export const DATA_RESPONSE = "DATA_REQUEST";

export const DATA_RESPONSE_END = "DATA_REQUEST_END";

export const STORE_DATAS = "STORE_DATAS";

export const CLEAR_DATAS = "CLEAR_DATAS";

export const CraeteTopicOfDB =
  (title, description, callback) => (dispatch, getState) => {
    dispatch({ type: DATA_RESPONSE_END });
    axios
      .post("https://bambwc20.loca.lt/api/topics/create", {
        data: {
          title,
          description,
        },
      })
      .then((res1) => {
        const redirectId = res1.data.insertId;
        axios
          .get("https://bambwc20.loca.lt/api/topics")
          .then((res2) => {
            dispatch({ type: STORE_DATAS, community1_datas: res2.data });
            dispatch({ type: DATA_RESPONSE });
          })
          .then((res3) => {
            callback(redirectId);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const DeleteTopicOfDB = (id) => (dispatch, getState) => {
  dispatch({ type: DATA_RESPONSE_END });
  axios
    .post(`https://bambwc20.loca.lt/api/topics/delete/${id}`, {
      data: {
        id: id,
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

export const UpdateTopicOfDB =
  (id, title, description, callback) => (dispatch, getState) => {
    dispatch({ type: DATA_RESPONSE_END });
    axios
      .post(`https://bambwc20.loca.lt/api/topics/update/${id}`, {
        data: {
          id: id,
          title: title,
          description: description,
        },
      })
      .then(() => {
        axios
          .get("https://bambwc20.loca.lt/api/topics")
          .then((res) => {
            dispatch({ type: STORE_DATAS, community1_datas: res.data });
            dispatch({ type: DATA_RESPONSE });
          })
          .then(() => {
            callback();
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

//action 모음

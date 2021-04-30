import {
  DATA_RESPONSE,
  DATA_RESPONSE_END,
  STORE_DATAS,
  CLEAR_DATAS,
} from "./action";

const initState = {
  IsLoading: true,
  community1_datas: null,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case DATA_RESPONSE:
      return { ...state, IsLoading: false };

    case DATA_RESPONSE_END:
      return { ...state, IsLoading: true };

    case STORE_DATAS:
      return {
        ...state,
        community1_datas: action.community1_datas,
      };

    case CLEAR_DATAS:
      return { ...state, community1_datas: null };

    default:
      return state;
  }
};

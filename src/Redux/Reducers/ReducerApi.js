import { GET_POST } from "../Actions/ActionApi";

const initialState = {
  users: [],
};

function ReducerApi(state = initialState, action) {
  switch (action.type) {
    case GET_POST:

      console.log("----ReducrtApi----");
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
}

export default ReducerApi;

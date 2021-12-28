import { ADD_ONE, MINUS_ONE, RESET } from "../Actions/ActionCount";
const initialState = {
  number: 0,
};
function reducer(state = initialState, action) {
  console.log("----Reducers----");
  switch (action.type) {
    case ADD_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    case RESET:
      return {
        number: 0,
      };
    default:
      return state;
  }
}
export default reducer;

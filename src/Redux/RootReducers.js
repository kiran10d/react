import { combineReducers } from "redux";
import reducersCount from "./Reducers/ReducerCount";
import reducerApi from "./Reducers/ReducerApi";
const rootReducer = combineReducers({ reducersCount, reducerApi });
console.log("----Root Reducers----");
export default rootReducer;

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./RootReducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

console.log("----Store----");

export default store;

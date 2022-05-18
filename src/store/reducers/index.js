import { combineReducers } from "redux";
import loginReducer from "./loginReducers";

const reducers = combineReducers({
    userlogin : loginReducer
})


export default reducers;
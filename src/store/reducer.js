import { combineReducers } from "redux";
import { reducer as headerReducer } from "../common/header/store";

const reducer = combineReducers({ headers: headerReducer });

export default reducer;

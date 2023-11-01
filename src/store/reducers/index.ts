// reducers/index.ts
import { combineReducers } from "redux";
import { cryptoReducer } from "./cryptoReducers";

const rootReducer = combineReducers({
	crypto: cryptoReducer,
});

export default rootReducer;

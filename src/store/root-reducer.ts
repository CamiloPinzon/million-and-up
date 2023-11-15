import { combineReducers } from "redux";

import { cryproDataReducer } from "./crypto-data/crypto-data.reducer";

export const rootReducer = combineReducers({
	cryptoData: cryproDataReducer,
});

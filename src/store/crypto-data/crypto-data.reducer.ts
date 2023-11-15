import { cryptoActionTypes } from "@/types";

const INITIAL_STATE = {
	cryptoData: [],
	currentPage: 0,
	totalPages: 0,
};

export const cryproDataReducer = (
	state = INITIAL_STATE,
	action: { type: string; payload: any }
) => {
	const { type, payload } = action;

	switch (type) {
		case cryptoActionTypes.SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: payload,
			};
		case cryptoActionTypes.SET_TOTAL_PAGES:
			return {
				...state,
				totalPages: payload,
			};
		case cryptoActionTypes.SET_CRYPTODATA:
			return {
				...state,
				cryptoData: payload,
			};
		default:
			return state;
	}
};

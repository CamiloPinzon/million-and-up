import { ACTION_TYPES } from "../actions/types";

type coinTypeT = {
	id: string;
	symbol: string;
	name: string;
};

type coinInfoT = {
	symbol: string;
	name: string;
	rank: number;
	price_usd: string;
	usd_exchange: number;
};

interface CryptoState {
	cryptoData: coinTypeT[];
	isModalOpen: boolean;
	coinInfo: coinInfoT;
}

const coinInfoInitialValue: coinInfoT = {
	symbol: "",
	name: "",
	rank: 0,
	price_usd: "",
	usd_exchange: 0,
};

const initialState: CryptoState = {
	cryptoData: [],
	isModalOpen: false,
	coinInfo: coinInfoInitialValue,
};

export const cryptoReducer = (
	state = initialState,
	action: { type: string; payload: {} }
) => {
	switch (action.type) {
		case ACTION_TYPES.SET_CRYPTO_DATA:
			return {
				...state,
				cryptoData: action.payload,
			};
		case ACTION_TYPES.TOGGLE_MODAL:
			return {
				...state,
				isModalOpen: !state.isModalOpen,
			};
		case ACTION_TYPES.SET_COIN_INFO:
			return {
				...state,
				coinInfo: action.payload,
			};
		default:
			return state;
	}
};

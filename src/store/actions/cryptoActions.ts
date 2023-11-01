import { ACTION_TYPES } from "./types";

// Action Creators
export const setCryptoData = (data: {}) => ({
	type: ACTION_TYPES.SET_CRYPTO_DATA,
	payload: data,
});

export const toggleModal = () => ({
	type: ACTION_TYPES.TOGGLE_MODAL,
});

export const setCoinInfo = (data: {}) => ({
	type: ACTION_TYPES.SET_COIN_INFO,
	payload: data,
});

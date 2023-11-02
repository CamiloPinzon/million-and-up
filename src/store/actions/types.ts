export const ACTION_TYPES = {
	SET_CRYPTO_DATA: "SET_CRYPTO_DATA",
	TOGGLE_MODAL: "TOGGLE_MODAL",
	SET_COIN_INFO: "SET_COIN_INFO",
};

export type coinInfoT = {
	symbol: string;
	name: string;
	rank: number;
	price_usd: string;
	usd_exchange: number;
};

export type CoinT = {
	id: string;
	symbol: string;
	name: string;
};

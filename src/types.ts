import { ReactNode } from "react";

export type ContextProviderProps = {
	children: ReactNode;
};

export type CryptosUpdatedT = [{}];

export type CryptoT = {
	id: string;
	symbol: string;
	name: string;
	nameid: string;
	rank: number;
	price_usd: string;
	percent_change_24h: string;
	percent_change_1h: string;
	percent_change_7d: string;
	price_btc: string;
	market_cap_usd: string;
	volume24: number;
	volume24a: number;
	csupply: string;
	tsupply: string;
	msupply: string;
};

export const cryptoActionTypes = {
	SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
	SET_TOTAL_PAGES: "SET_TOTAL_PAGES",
	SET_CRYPTODATA: "SET_CRYPTODATA",
	SET_MODAL_OPEN: "SET_MODAL_OPEN",
	SET_SELECTED_CRYPTO: "SET_SELECTED_CRYPTO",
	SET_SELECTED_CRYPTOS: "SET_SELECTER_CRYPTOS",
};

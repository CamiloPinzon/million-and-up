import { type } from "os";
import { ReactNode } from "react";

export type SelectedContextType = {
	info: {
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
	setSelected: (id: string) => void;
};

export type CryptoDataContextType = {
	cryptoData: [
		{
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
		}
	];
	currentPage: number;
	totalPages: number;
	maxLoadedPages: number;
	nextPage: () => void;
	prevPage: () => void;
};

export type CoinInfoT = {
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

export type ModalContextType = {
	isModalOpen: boolean;
	toggleModalOpen: () => void;
	cryptosSelected: Array<CoinInfoT>;
	addCrypto: (id: string) => void;
	selectedCrypto: CoinInfoT;
};

export type ContextProviderProps = {
	children: ReactNode;
};

export type PagesContextType = {
	currentPage: number;
	totalPages: number;
	maxLoadedPages: number;
	nextPage: () => void;
	prevPage: () => void;
};

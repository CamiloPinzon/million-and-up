import { ReactNode } from "react";

export type CryptoDataContextType = {
	data: [
		{
			id: string;
			symbol: string;
			name: string;
		}
	];
};

export type CoinInfoT = {
	symbol: string;
	name: string;
	rank: number;
	price_usd: string;
	usd_exchange: number;
};

export type ModalContextType = {
	isModalOpen: boolean;
	toggleModalOpen: () => void;
};

export type ContextProviderProps = {
	children: ReactNode;
};

export type PagesContextType = {
	currentPage: number;
	totalPages: number;
};

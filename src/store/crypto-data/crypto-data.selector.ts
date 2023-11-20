import { CryptoT } from "@/types";

type stateTypeT = {
	cryptoData: {
		cryptoData: [];
		currentPage: number;
		totalPages: number;
		isModalOpen: boolean;
		cryptosSelected: Array<CryptoT>;
		selectedCrypto: CryptoT;
	};
};

export const selectPaginationData = (state: stateTypeT) => state.cryptoData;

export const selectCryptoData = (state: stateTypeT) =>
	state.cryptoData.cryptoData;

export const selectModalOpen = (state: stateTypeT) =>
	state.cryptoData.isModalOpen;

export const selectCryptosSelected = (state: stateTypeT) =>
	state.cryptoData.cryptosSelected;

export const selectSelectedCrypto = (state: stateTypeT) =>
	state.cryptoData.selectedCrypto;

import { createAction } from "@/utils/reducer/reducer.utils";

import { cryptoActionTypes } from "@/types";

export const setTotalPages = (totalPages: number) =>
	createAction(cryptoActionTypes.SET_TOTAL_PAGES, totalPages);

export const setCurrentPage = (currentPage: number) =>
	createAction(cryptoActionTypes.SET_CURRENT_PAGE, currentPage);

export const setCryptoData = (cryptoData: []) =>
	createAction(cryptoActionTypes.SET_CRYPTODATA, cryptoData);

export const setIsModalOpen = (isModalOpen: boolean) =>
	createAction(cryptoActionTypes.SET_MODAL_OPEN, isModalOpen);

export const setSelectedCrypto = (selectedCrypto: {}) =>
	createAction(cryptoActionTypes.SET_SELECTED_CRYPTO, selectedCrypto);

export const setSelectedCryptos = (selectedCrypto: [{}]) =>
	createAction(cryptoActionTypes.SET_SELECTED_CRYPTOS, selectedCrypto);

import { createAction } from "@/utils/reducer/reducer.utils";

import { cryptoActionTypes } from "@/types";

export const setTotalPages = (totalPages: number) =>
	createAction(cryptoActionTypes.SET_TOTAL_PAGES, totalPages);

export const setCurrentPage = (currentPage: number) =>
	createAction(cryptoActionTypes.SET_CURRENT_PAGE, currentPage);

export const setCryptoData = (cryptoData: []) =>
	createAction(cryptoActionTypes.SET_CRYPTODATA, cryptoData);

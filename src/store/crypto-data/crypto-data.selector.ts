type stateTypeT = {
	cryptoData: {
		cryptoData: [];
		currentPage: number;
		totalPages: number;
	};
};

export const selectPaginationData = (state: stateTypeT) => state.cryptoData;

export const selectCryptoData = (state: stateTypeT) =>
	state.cryptoData.cryptoData;

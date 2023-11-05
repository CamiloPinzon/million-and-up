import { createContext, useState, useContext, useEffect } from "react";

import { ContextProviderProps, CryptoDataContextType } from "@/types";

const CryptoDataDefaultValue: CryptoDataContextType = {
	cryptoData: [
		{
			id: "",
			symbol: "",
			name: "",
			nameid: "",
			rank: 0,
			price_usd: "",
			percent_change_24h: "",
			percent_change_1h: "",
			percent_change_7d: "",
			price_btc: "",
			market_cap_usd: "",
			volume24: 0,
			volume24a: 0,
			csupply: "",
			tsupply: "",
			msupply: "",
		},
	],
	currentPage: 0,
	totalPages: 0,
	maxLoadedPages: 0,
	nextPage: () => {},
	prevPage: () => {},
};

const CryptoDataContext = createContext<CryptoDataContextType>(
	CryptoDataDefaultValue
);

export const useCryptoData = () => useContext(CryptoDataContext);

export const CryptoDataProvider = ({ children }: ContextProviderProps) => {
	const [cryptoData, setCryptoData] = useState(
		CryptoDataDefaultValue.cryptoData
	);

	const [currentPage, setCurrentPage] = useState(
		CryptoDataDefaultValue.currentPage
	);

	const [totalPages, setTotalPages] = useState(
		CryptoDataDefaultValue.totalPages
	);
	const [maxLoadedPages, setMaxLoadedPages] = useState(
		CryptoDataDefaultValue.maxLoadedPages
	);

	const nextPage = () => {
		currentPage < totalPages - 1 && setCurrentPage(currentPage + 1);
	};
	const prevPage = () => {
		currentPage > 0 && setCurrentPage(currentPage - 1);
	};

	useEffect(() => {
		fetch(
			`https://api.coinlore.net/api/tickers/?start=${
				currentPage * 100
			}&limit=100`
		)
			.then((result) => result.json())
			.then((data) => setCryptoData(data.data));
	}, [currentPage]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://api.coinlore.net/api/global/");
			const data = await response.json();
			const totalPages = Math.ceil(data[0].coins_count / 100);

			setTotalPages(totalPages);
		};
		fetchData();
	}, []);

	const value = {
		cryptoData,
		currentPage,
		totalPages,
		nextPage,
		prevPage,
		maxLoadedPages,
	};

	return (
		<>
			<CryptoDataContext.Provider value={value}>
				{children}
			</CryptoDataContext.Provider>
		</>
	);
};

import { createContext, useState, useContext, useEffect } from "react";

import { ContextProviderProps, CryptoDataContextType } from "@/types";

const CryptoDataDefaultValue: CryptoDataContextType = {
	data: [
		{
			id: "90",
			symbol: "BTC",
			name: "Bitcoin",
			nameid: "bitcoin",
			rank: 1,
			price_usd: "34731.19",
			percent_change_24h: "0.45",
			percent_change_1h: "0.13",
			percent_change_7d: "1.72",
			price_btc: "1.00",
			market_cap_usd: "676249150967.00",
			volume24: 13917435585.203705,
			volume24a: 19066673321.912624,
			csupply: "19470946.00",
			tsupply: "19470946",
			msupply: "21000000",
		},
	],
};

const CryptoDataContext = createContext<CryptoDataContextType>(
	CryptoDataDefaultValue
);

export const useCryptoData = () => useContext(CryptoDataContext);

export const CryptoDataProvider = ({ children }: ContextProviderProps) => {
	const [cryptoData, setCryptoData] = useState<CryptoDataContextType>(
		CryptoDataDefaultValue
	);

	const { data } = cryptoData;

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://api.coinlore.net/api/tickers/");
			const data = await response.json();
			setCryptoData({ data: data.data });
		};
		fetchData();
	}, []);

	const value = { data };

	return (
		<>
			<CryptoDataContext.Provider value={value}>
				{children}
			</CryptoDataContext.Provider>
		</>
	);
};

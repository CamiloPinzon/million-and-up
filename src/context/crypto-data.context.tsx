import { createContext, useState, useContext, useEffect } from "react";

import { ContextProviderProps, CryptoDataContextType } from "@/types";

const CryptoDataDefaultValue: CryptoDataContextType = {
	data: [{ id: "90", symbol: "BTC", name: "Bitcoin" }],
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

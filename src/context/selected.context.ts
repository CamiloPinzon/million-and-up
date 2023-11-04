import { createContext, useState, useContext, useEffect } from "react";

import { SelectedContextType, ContextProviderProps } from "@/types";

const SelectedContextDefaultValue: SelectedContextType = {
	info: {
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
	setSelected: () => {},
};

const SelectedContext = createContext<SelectedContextType>(
	SelectedContextDefaultValue
);

export const useSelected = () => useContext(SelectedContext);

export const SelectedProvider = ({ children }: ContextProviderProps) => {
	const [selectedInfo, setSelectedInfo] = useState<SelectedContextType>(
		SelectedContextDefaultValue
	);
};

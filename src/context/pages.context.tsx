import { createContext, useState, useContext, useEffect } from "react";

import { PagesContextType, ContextProviderProps } from "@/types";

const pagesContextDefaultValue: PagesContextType = {
	currentPage: 0,
	totalPages: 0,
};

const PagesContext = createContext<PagesContextType>(pagesContextDefaultValue);

export const usePages = () => useContext(PagesContext);

export const PagesProvider = ({ children }: ContextProviderProps) => {
	const [pages, setPages] = useState<PagesContextType>(
		pagesContextDefaultValue
	);

	const { currentPage, totalPages } = pages;

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://api.coinlore.net/api/global/");
			const data = await response.json();
			const totalPages = data[0].coins_count;
			const currentPage = 0;
			setPages({ currentPage: currentPage, totalPages: totalPages });
		};
		fetchData();
	}, []);

	const value = { currentPage, totalPages };

	return (
		<>
			<PagesContext.Provider value={value}>{children}</PagesContext.Provider>
		</>
	);
};

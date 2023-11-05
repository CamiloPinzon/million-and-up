import { createContext, useState, useContext, useEffect } from "react";

import { PagesContextType, ContextProviderProps } from "@/types";

const pagesContextDefaultValue: PagesContextType = {
	currentPage: 0,
	totalPages: 0,
	maxLoadedPages: 0,
	nextPage: () => {},
	prevPage: () => {},
};

const PagesContext = createContext<PagesContextType>(pagesContextDefaultValue);

export const usePages = () => useContext(PagesContext);

export const PagesProvider = ({ children }: ContextProviderProps) => {
	const [currentPage, setCurrentPage] = useState(
		pagesContextDefaultValue.currentPage
	);
	const [totalPages, setTotalPages] = useState(
		pagesContextDefaultValue.totalPages
	);
	const [maxLoadedPages, setMaxLoadedPages] = useState(
		pagesContextDefaultValue.maxLoadedPages
	);

	const nextPage = () => {
		currentPage < totalPages - 1 && setCurrentPage(currentPage + 1);
	};
	const prevPage = () => {
		currentPage > 0 && setCurrentPage(currentPage - 1);
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://api.coinlore.net/api/global/");
			const data = await response.json();
			const totalPages = Math.ceil(data[0].coins_count / 100);

			setTotalPages(totalPages);
		};
		fetchData();
	}, []);

	const value = { currentPage, totalPages, maxLoadedPages, nextPage, prevPage };

	return (
		<>
			<PagesContext.Provider value={value}>{children}</PagesContext.Provider>
		</>
	);
};

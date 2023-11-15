"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "@/components/modal/modal.component";
import Header from "@/components/header/header.component";
import CoinsList from "@/components/coins-list/coins-list.component";
import Paginator from "@/components/paginator/paginator.component";
import {
	setTotalPages,
	setCryptoData,
} from "@/store/crypto-data/crypto-data.actions";
import { selectPaginationData } from "@/store/crypto-data/crypto-data.selector";

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://api.coinlore.net/api/global/");
			const data = await response.json();
			const totalPages = Math.ceil(data[0].coins_count / 100);

			dispatch(setTotalPages(totalPages));
		};
		fetchData();
	}, []);

	const { currentPage } = useSelector(selectPaginationData);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://api.coinlore.net/api/tickers/?start=${
					currentPage * 100
				}&limit=100`
			);
			const data = await response.json();
			const firstData = data.data;

			dispatch(setCryptoData(firstData));
		};
		fetchData();
	}, [currentPage]);

	return (
		<>
			<Modal />
			<Header />
			<CoinsList />
			<Paginator />
		</>
	);
};

export default Home;

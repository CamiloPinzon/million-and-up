"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "@/components/modal/modal.component";
import Header from "@/components/header/header.component";
import Search from "@/components/search/search.component";
import CurrencyList from "@/components/currency-list/currency-list.component";

import {
	setCryptoData,
	toggleModal,
	setCoinInfo,
} from "../store/actions/cryptoActions";

const Home = () => {
	const dispatch = useDispatch();
	const cryptoData = useSelector((state) => state.crypto.cryptoData);
	const isModalOpen = useSelector((state) => state.crypto.isModalOpen);
	const coinInfo = useSelector((state) => state.crypto.coinInfo);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://api.coinlore.net/api/tickers/");
				const data = await response.json();
				dispatch(setCryptoData(data.data));
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [dispatch]);

	const dispatchToggleModal = () => {
		dispatch(toggleModal());
	};

	const handleCurrencyInfo = (id: string) => {
		fetch(`https://api.coinlore.net/api/ticker/?id=${id}`)
			.then((response) => response.json())
			.then((data) => {
				dispatch(setCoinInfo(data[0]));
				dispatchToggleModal();
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<>
			<Modal
				isModalOpen={isModalOpen}
				toggleModal={() => dispatchToggleModal()}
				coinInfo={coinInfo}
			/>
			<Header />
			<Search />
			<CurrencyList
				cryptoData={cryptoData}
				handlerCurrencyInfo={handleCurrencyInfo}
			/>
		</>
	);
};

export default Home;

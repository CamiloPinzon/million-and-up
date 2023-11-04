"use client";

import { useState } from "react";

import { CoinInfoT } from "@/types";

import { useModal } from "@/context/modal.context";
import { usePages } from "@/context/pages.context";
import { useCryptoData } from "@/context/crypto-data.context";

import Modal from "@/components/modal/modal.component";
import Header from "@/components/header/header.component";
import CoinsList from "@/components/coins-list/coins-list.component";

const COIN_INFO_INITIAL_STATE = {
	symbol: "",
	name: "",
	rank: 0,
	price_usd: "",
	usd_exchange: 0,
};

const Home = () => {
	const { toggleModalOpen } = useModal();
	const { totalPages } = usePages();
	const { data } = useCryptoData();
	const [coinInfo, setCoinInfo] = useState<CoinInfoT>(COIN_INFO_INITIAL_STATE);

	return (
		<>
			<Modal coinInfo={coinInfo} />
			<Header />
			<CoinsList />
			<div>Total pages: {Math.ceil(totalPages / 100)}</div>
		</>
	);
};

export default Home;

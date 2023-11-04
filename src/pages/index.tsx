"use client";

import { usePages } from "@/context/pages.context";

import Modal from "@/components/modal/modal.component";
import Header from "@/components/header/header.component";
import CoinsList from "@/components/coins-list/coins-list.component";

const Home = () => {
	const { totalPages } = usePages();

	return (
		<>
			<Modal />
			<Header />
			<CoinsList />
			<div>Total pages: {Math.ceil(totalPages / 100)}</div>
		</>
	);
};

export default Home;

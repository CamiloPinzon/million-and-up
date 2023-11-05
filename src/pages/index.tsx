"use client";

import Modal from "@/components/modal/modal.component";
import Header from "@/components/header/header.component";
import CoinsList from "@/components/coins-list/coins-list.component";
import Paginator from "@/components/paginator/paginator.component";

const Home = () => {
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

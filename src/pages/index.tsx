"use client";

import { useState, useEffect } from "react";

import SearchIcon from "@/assets/images/search";
import TriangleIcon from "@/assets/images/triangle";
import CloseIcon from "@/assets/images/close";

type coinTypeT = {
	id: string;
	symbol: string;
	name: string;
};

type pagesTypeT = {
	currentPage: number;
	totalPages: number;
};

const PAGES_INITIAL_STATE = {
	currentPage: 0,
	totalPages: 0,
};

const Home = () => {
	const [pages, setPages] = useState(PAGES_INITIAL_STATE);
	const [coinsCount, setCoinsCount] = useState(0);
	const [cryptoData, setCryptoData] = useState<coinTypeT[]>([]);

	useEffect(() => {
		fetch("https://api.coinlore.net/api/global/")
			.then((response) => response.json())
			.then((data) => setCoinsCount(data[0].coins_count));
	}, []);

	useEffect(() => {
		fetch("https://api.coinlore.net/api/tickers/")
			.then((response) => response.json())
			.then((crypto) => setCryptoData(crypto.data));
	}, []);

	const handlerCurrencyInfo = (id: string): void => {
		fetch(`https://api.coinlore.net/api/ticker/?id=${id}`)
			.then((response) => response.json())
			.then((data) => console.log(data[0]));
	};

	return (
		<>
			<div className="modal-window">
				<div className="modal-content">
					<div className="close-icon">
						<CloseIcon />
					</div>
				</div>
			</div>
			<div className="header-container">
				<h1>Cripto Info App</h1>
				<p>Select any crypto coin and get updated info</p>
			</div>
			<div className="search-container">
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search crypto"
				/>
				<SearchIcon />
			</div>
			<div className="currency-container">
				<div
					className={`triangle-container left-triangle ${
						pages.currentPage === 0 && "div-disabled"
					}`}
				>
					<TriangleIcon />
				</div>
				<div className="cryptos-container">
					{cryptoData.map((currency) => {
						return (
							<div
								key={currency.id}
								className="currency-item"
								title={currency.name}
								onClick={() => handlerCurrencyInfo(currency.id)}
							>
								{currency.symbol}
							</div>
						);
					})}
				</div>
				<div
					className={`triangle-container rigth-triangle ${
						pages.currentPage === pages.totalPages && "div-disabled"
					}`}
				>
					<TriangleIcon />
				</div>
			</div>
			<p>
				<span>Total Pages: {Math.ceil(coinsCount / 100)}</span>
			</p>
		</>
	);
};

export default Home;

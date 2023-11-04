import { createContext, useState, useContext } from "react";

import { ModalContextType, ContextProviderProps, CoinInfoT } from "@/types";

const cryptoDefaultValue: CoinInfoT = {
	id: "",
	symbol: "",
	name: "",
	nameid: "",
	rank: 0,
	price_usd: "",
	percent_change_24h: "",
	percent_change_1h: "",
	percent_change_7d: "",
	price_btc: "",
	market_cap_usd: "",
	volume24: 0,
	volume24a: 0,
	csupply: "",
	tsupply: "",
	msupply: "",
};

const modalContextDefaultValues: ModalContextType = {
	isModalOpen: false,
	toggleModalOpen: () => {},
	cryptosSelected: [cryptoDefaultValue],
	addCrypto: (id: string) => {},
	selectedCrypto: cryptoDefaultValue,
};

const existCrypto = (cryptosSelected: any, idToAdd: string) => {
	const existingCrypto = cryptosSelected.find(
		(crypto: CoinInfoT) => crypto.id === idToAdd
	);

	return existingCrypto;
};

const ModalContext = createContext<ModalContextType>(modalContextDefaultValues);

export const useModal = () => useContext(ModalContext);

const getCryptoFromApi = (id: string) => {
	const cryptoSelected = async () => {
		const response = await fetch(
			`https://api.coinlore.net/api/ticker/?id=${id}`
		);
		const data = await response.json();
		return data[0];
	};

	return cryptoSelected();
};

export const ModalProvider = ({ children }: ContextProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [cryptosSelected, setCryptosSelected] = useState(
		modalContextDefaultValues.cryptosSelected
	);
	const [selectedCrypto, setSelectedCrypto] = useState(
		modalContextDefaultValues.selectedCrypto
	);

	const toggleModalOpen = () => {
		setIsModalOpen(!isModalOpen);
	};

	const addCrypto = async (idToAdd: string) => {
		const exist = existCrypto(cryptosSelected, idToAdd);
		if (!exist) {
			const crypto = await getCryptoFromApi(idToAdd);
			await setSelectedCrypto(crypto);
			await setCryptosSelected([...cryptosSelected, crypto]);
			console.log(crypto);
		} else {
			const selected = cryptosSelected.filter(
				(crypto) => crypto.id === idToAdd
			);
			setSelectedCrypto(selected[0]);
			console.log(selected);
		}
		toggleModalOpen();
	};

	const value = {
		isModalOpen,
		toggleModalOpen,
		selectedCrypto,
		addCrypto,
		cryptosSelected,
	};
	return (
		<>
			<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
		</>
	);
};

import { createContext, useContext, useReducer } from "react";

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

const modalReducer = (state: {}, action: { type: string; payload: any }) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_IS_MODAL_OPEN":
			return {
				...state,
				isModalOpen: payload,
			};
		case "SET_CRYPTOS_SELECTED":
			return {
				...state,
				cryptosSelected: payload,
			};
		case "SET_SELECTED_CRYPTO":
			return {
				...state,
				selectedCrypto: payload,
			};
		default:
			throw new Error(`unhandled type: ${type}`);
	}
};

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

const INITIAL_STATE = {
	isModalOpen: false,
	cryptosSelected: [],
	selectedCrypto: {},
};

export const ModalProvider = ({ children }: ContextProviderProps) => {
	const [{ isModalOpen, cryptosSelected, selectedCrypto }, dispatch] =
		useReducer(modalReducer, INITIAL_STATE);

	const setIsModalOpen = (isModalOpen: boolean) => {
		dispatch({ type: "SET_IS_MODAL_OPEN", payload: isModalOpen });
	};

	const setCryptosSelected = (cryptosSelected: []) => {
		dispatch({ type: "SET_CRYPTOS_SELECTED", payload: cryptosSelected });
	};

	const setSelectedCrypto = (selectedCrypto: {}) => {
		dispatch({ type: "SET_SELECTED_CRYPTO", payload: selectedCrypto });
	};

	const toggleModalOpen = () => {
		setIsModalOpen(!isModalOpen);
	};

	const addCrypto = async (idToAdd: string) => {
		const exist = existCrypto(cryptosSelected, idToAdd);
		if (!exist) {
			const crypto = await getCryptoFromApi(idToAdd);
			await setSelectedCrypto(crypto);
			await setCryptosSelected([...cryptosSelected, crypto]);
		} else {
			const selected = cryptosSelected.filter(
				(crypto) => crypto.id === idToAdd
			);
			setSelectedCrypto(selected[0]);
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

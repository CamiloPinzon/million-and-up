import { useSelector, useDispatch } from "react-redux";

import {
	selectCryptoData,
	selectCryptosSelected,
	selectModalOpen,
} from "@/store/crypto-data/crypto-data.selector";
import {
	setIsModalOpen,
	setSelectedCrypto,
	setSelectedCryptos,
} from "@/store/crypto-data/crypto-data.actions";

const CoinsList = () => {
	const dispatch = useDispatch();
	const cryptoData = useSelector(selectCryptoData);
	const cryptosSelected = useSelector(selectCryptosSelected);
	const isModalOpen = useSelector(selectModalOpen);
	const data = [...cryptoData];

	const existCrypto = (idToAdd: string) => {
		if (cryptosSelected.length > 0) {
			const existingCrypto = cryptosSelected.find(
				(crypto) => crypto.id === idToAdd
			);

			return existingCrypto;
		} else {
			return false;
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

	const handleAddCrypto = async (id: string) => {
		const exist = existCrypto(id);
		if (!exist) {
			const crypto = await getCryptoFromApi(id);
			await setSelectedCrypto(crypto);
			console.log(cryptosSelected);
			console.log(crypto);

			const cryptosUpdated = [...cryptosSelected, crypto];
			await dispatch(setSelectedCryptos(cryptosUpdated));
			await dispatch(setSelectedCrypto(crypto));
		} else {
			const selected = cryptosSelected.filter((crypto) => crypto.id === id);
			await dispatch(setSelectedCrypto(selected[0]));
		}
		dispatch(setIsModalOpen(!isModalOpen));
	};

	return (
		<div className="cryptos-container">
			{data.map((crypto) => {
				const { id, name, symbol } = crypto;
				return (
					<div
						key={id}
						className="currency-item"
						title={name}
						onClick={() => handleAddCrypto(id)}
					>
						{symbol}
					</div>
				);
			})}
		</div>
	);
};

export default CoinsList;

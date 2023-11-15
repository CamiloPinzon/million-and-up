import { useSelector } from "react-redux";

import { selectCryptoData } from "@/store/crypto-data/crypto-data.selector";
import { useModal } from "@/context/modal.context";

const CoinsList = () => {
	const cryptoData = useSelector(selectCryptoData);
	const data = [...cryptoData];

	const { addCrypto } = useModal();

	const handleAddCrypto = (id: string) => {
		addCrypto(id);
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

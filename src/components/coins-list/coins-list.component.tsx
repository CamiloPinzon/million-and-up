import { useCryptoData } from "@/context/crypto-data.context";
import { useModal } from "@/context/modal.context";

const CoinsList = (): any => {
	const { cryptoData } = useCryptoData();
	const { toggleModalOpen, addCrypto } = useModal();

	const handleModalOpen = () => {
		toggleModalOpen();
	};

	const handleAddCrypto = (id: string) => {
		addCrypto(id);
	};

	return (
		<div className="cryptos-container">
			{cryptoData.map((crypto) => {
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

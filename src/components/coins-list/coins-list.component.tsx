import { useCryptoData } from "@/context/crypto-data.context";
import { useModal } from "@/context/modal.context";

import TriangleIcon from "@/assets/images/triangle";

const CoinsList = (): any => {
	const { data } = useCryptoData();
	const { toggleModalOpen, addCrypto } = useModal();

	const handleModalOpen = () => {
		toggleModalOpen();
	};

	const handleAddCrypto = (id: string) => {
		addCrypto(id);
	};

	return (
		<div className="currency-container">
			<div className="triangle-container left-triangle">
				<TriangleIcon />
			</div>
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
			<div className="triangle-container rigth-triangle">
				<TriangleIcon />
			</div>
		</div>
	);
};

export default CoinsList;

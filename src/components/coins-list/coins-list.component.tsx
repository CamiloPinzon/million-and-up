import { useCryptoData } from "@/context/crypto-data.context";

import { CryptoDataContextType } from "@/types";

import TriangleIcon from "@/assets/images/triangle";

const CoinsList = (): any => {
	const { data } = useCryptoData();

	return (
		<div className="currency-container">
			<div className="triangle-container left-triangle">
				<TriangleIcon />
			</div>
			<div className="cryptos-container">
				{data.map((crypto) => {
					const { id, name, symbol } = crypto;
					return (
						<div key={id} className="currency-item" title={name}>
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

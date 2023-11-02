import { CoinT } from "@/store/actions/types";

import TriangleIcon from "@/assets/images/triangle";

type CurrencyPropsT = {
	cryptoData: CoinT[];
	handlerCurrencyInfo: (id: string) => void;
};

const PAGES_INITIAL_STATE = {
	currentPage: 0,
	totalPages: 0,
};

const pages = PAGES_INITIAL_STATE;

const CurrencyList = ({ cryptoData, handlerCurrencyInfo }: CurrencyPropsT) => {
	return (
		<div className="currency-container">
			<div
				className={`triangle-container left-triangle ${
					pages.currentPage === 0 ? "div-disabled" : ""
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
	);
};

export default CurrencyList;

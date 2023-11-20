import { useSelector, useDispatch } from "react-redux";

import {
	selectModalOpen,
	selectSelectedCrypto,
} from "@/store/crypto-data/crypto-data.selector";
import { setIsModalOpen } from "@/store/crypto-data/crypto-data.actions";
import CloseIcon from "@/assets/images/close";

const Modal = () => {
	const dispatch = useDispatch();
	const isModalOpen = useSelector(selectModalOpen);
	const toggleModalOpen = () => {
		dispatch(setIsModalOpen(!isModalOpen));
	};

	const selectedCrypto = useSelector(selectSelectedCrypto);

	const { symbol, name } = selectedCrypto;

	return (
		<div className={`modal-window ${!isModalOpen ? "hide-modal" : ""}`}>
			<div className="modal-content">
				<div className="close-icon" onClick={toggleModalOpen}>
					<CloseIcon />
				</div>
				<div className="modal-info">
					<h2>{`${name} - ${symbol}`}</h2>
					<div className="info-content">
						<ul>
							<li>
								<b>Rank:</b> {selectedCrypto.rank}
							</li>
							<li>
								<b>Price in USD:</b> {selectedCrypto.price_usd}
							</li>
							<li>
								<b>Percent change 24h:</b> {selectedCrypto.percent_change_24h}
							</li>
							<li>
								<b>Percent change 1h:</b> {selectedCrypto.percent_change_1h}
							</li>
							<li>
								<b>Percent change 7d:</b> {selectedCrypto.percent_change_7d}
							</li>
							<li>
								<b>Price btc:</b> {selectedCrypto.price_btc}
							</li>
							<li>
								<b>Market cap usd:</b> {selectedCrypto.market_cap_usd}
							</li>
							<li>
								<b>Volume24:</b> {selectedCrypto.volume24}
							</li>
							<li>
								<b>Volume24a:</b> {selectedCrypto.volume24a}
							</li>
							<li>
								<b>Csupply:</b> {selectedCrypto.csupply}
							</li>
							<li>
								<b>Tsupply:</b> {selectedCrypto.tsupply}
							</li>
							{selectedCrypto.msupply ? (
								<li>
									<b>Msupply:</b> {selectedCrypto.msupply}
								</li>
							) : (
								""
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;

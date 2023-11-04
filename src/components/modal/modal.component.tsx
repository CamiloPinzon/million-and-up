import { useContext } from "react";

import { useModal } from "@/context/modal.context";
import { CoinInfoT } from "@/types";
import CloseIcon from "@/assets/images/close";

interface ModalInterface {
	coinInfo: CoinInfoT;
}

const Modal = ({ coinInfo }: ModalInterface) => {
	const { isModalOpen, toggleModalOpen } = useModal();

	return (
		<div className={`modal-window ${!isModalOpen ? "hide-modal" : ""}`}>
			<div className="modal-content">
				<div className="close-icon" onClick={toggleModalOpen}>
					<CloseIcon />
				</div>
				<div className="modal-info">
					<h2>{`${coinInfo.name} - ${coinInfo.symbol}`}</h2>
					<div className="info-content">
						<ul>
							<li>Rank: {coinInfo.rank}</li>
							<li>Price in USD: {coinInfo.price_usd}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;

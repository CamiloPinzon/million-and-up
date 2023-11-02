import { coinInfoT } from "@/store/actions/types";

import CloseIcon from "@/assets/images/close";

type ModalPropsT = {
	isModalOpen: boolean;
	toggleModal: () => void;
	coinInfo: coinInfoT;
};

const Modal = ({ isModalOpen, toggleModal, coinInfo }: ModalPropsT) => {
	return (
		<div className={`modal-window ${!isModalOpen ? "hide-modal" : ""}`}>
			<div className="modal-content">
				<div className="close-icon" onClick={toggleModal}>
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

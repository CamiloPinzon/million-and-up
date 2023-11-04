import { useModal } from "@/context/modal.context";
import CloseIcon from "@/assets/images/close";

const Modal = () => {
	const { isModalOpen, toggleModalOpen, selectedCrypto } = useModal();

	const { symbol, name, rank, price_usd } = selectedCrypto;

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
							<li>Rank: {rank}</li>
							<li>Price in USD: {price_usd}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;

import { useCryptoData } from "@/context/crypto-data.context";

import TriangleIcon from "@/assets/images/triangle";

const Paginator = () => {
	const { currentPage, totalPages, nextPage, prevPage } = useCryptoData();
	return (
		<div className="paginator-container">
			<div
				className={`triangle-container left-triangle ${
					currentPage === 0 ? "div-disabled" : ""
				}`}
				onClick={() => prevPage()}
			>
				<TriangleIcon />
			</div>
			<div>
				<p>{`Page ${currentPage + 1} of ${totalPages}`}</p>
			</div>
			<div
				className={`triangle-container rigth-triangle ${
					currentPage === totalPages ? "div-disabled" : ""
				}`}
				onClick={() => nextPage()}
			>
				<TriangleIcon />
			</div>
		</div>
	);
};

export default Paginator;

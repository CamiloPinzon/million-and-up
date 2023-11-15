import { useSelector, useDispatch } from "react-redux";

import { selectPaginationData } from "../../store/crypto-data/crypto-data.selector";
import { setCurrentPage } from "@/store/crypto-data/crypto-data.actions";

import TriangleIcon from "@/assets/images/triangle";

const Paginator = () => {
	const dispatch = useDispatch();
	const { currentPage, totalPages } = useSelector(selectPaginationData);

	const nextPage = () => {
		currentPage < totalPages - 1 && dispatch(setCurrentPage(currentPage + 1));
	};

	const prevPage = () => {
		currentPage > 0 && dispatch(setCurrentPage(currentPage - 1));
	};

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

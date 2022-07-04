import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/pagination.scss";

function Pagination() {
	return (
		<div className="pagination-group">
			<div className="previous">
				<button className="previous-button">
					<FontAwesomeIcon icon={faAngleLeft} />
				</button>
			</div>
			<div className="number-buttons">
				<button className="number active">1</button>
				<button className="number">2</button>
				<button className="number">3</button>
			</div>
			<div className="next">
				<button className="next-button">
					<FontAwesomeIcon icon={faAngleRight} />
				</button>
			</div>
		</div>
	);
}

export default Pagination;

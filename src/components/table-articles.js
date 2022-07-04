import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import Table from "./table";

import "../assets/styles/table-articles.scss";

function TableArticles() {
	return (
		<div className="table-articles">
			<div className="header">
				<div className="title">
					<h1>Articles</h1>
				</div>
				<div className="add-article">
					<button className="add-article-button">
						<FontAwesomeIcon className="add-icon" icon={faCirclePlus} />
						Add Article
					</button>
				</div>
			</div>
			<div className="table">
				<Table></Table>
			</div>
			<div className="pagination"></div>
		</div>
	);
}

export default TableArticles;

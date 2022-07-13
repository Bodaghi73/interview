import axios from "axios";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import Table from "./table";
import Pagination from "./pagination";

import "../assets/styles/table-articles.scss";

function TableArticles() {
	const [list, setList] = useState([]);
	useEffect(() => {
		async function getData() {
			const respose = await axios.get("https://api.realworld.io/api/articles");
			setList(respose.data.articles);
			console.log(respose);
		}
		getData();
	}, []);

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
				<Table list={list}></Table>
			</div>
			<div className="pagination">
				<Pagination></Pagination>
			</div>
		</div>
	);
}

export default TableArticles;

import Sidebar from "../components/sidebar";
import TableArticles from "../components/table-articles";

import "../assets/styles/articles-page.scss";

function ArticlesPage() {
	return (
		<div className="articles-page">
			<Sidebar></Sidebar>
			<TableArticles></TableArticles>
		</div>
	);
}

export default ArticlesPage;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import "../assets/styles/show-article.scss";

function ShowArticle() {
	return (
		<div className="show-article-buttons">
			<div className="all-articles">
				<button className="all-articles-button">
					<FontAwesomeIcon className="icon" icon={faInbox} />
					All Articles
				</button>
			</div>
			<div className="favorites-articles">
				<button className="favorites-articles-button">
					<div>
						<FontAwesomeIcon className="icon" icon={faHeart} />
						Favorites
					</div>
					<span className="coming-soon">Coming Soon</span>
				</button>
			</div>
		</div>
	);
}

export default ShowArticle;

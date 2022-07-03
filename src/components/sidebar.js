import Logo from "./logo";
import ShowArticle from "./show-article";

import '../assets/styles/sidebar.scss';

function Sidebar() {
	return (
		<aside className="sidebar">
			<div className="top-sidebar">
				<div className="sidebar-logo">
					<Logo></Logo>
					<span className="part">Part Software Group</span>
                    <span className="challenge">Challenge</span>
				</div>
                <div className="show-article">
                    <ShowArticle></ShowArticle>
                </div>
			</div>
			<div className="down-sidebar"></div>
		</aside>
	);
}

export default Sidebar;

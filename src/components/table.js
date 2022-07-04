import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import "../assets/styles/table.scss";

function Table() {
	return (
		<table className="articles">
			<thead>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Author</th>
					<th>Tags</th>
					<th>Excerpt</th>
					<th>Created At</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>Article Title</td>
					<td>
						<FontAwesomeIcon className="author-icon" icon={faCircle} />
						@author_user
					</td>
					<td>
						<span className="tag-name">tag name one</span>
						<span className="counter">+3</span>
					</td>
					<td>part of article body followed by ellipsis...</td>
					<td>Sep 6, 2021</td>
					<td>
						<FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
						<FontAwesomeIcon className="edit-icon" icon={faPen} />
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Article Title</td>
					<td>
						<FontAwesomeIcon className="author-icon" icon={faCircle} />
						@author_user
					</td>
					<td>
						<span className="tag-name">tag name one</span>
						<span className="counter">+3</span>
					</td>
					<td>part of article body followed by ellipsis...</td>
					<td>Sep 6, 2021</td>
					<td>
						<FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
						<FontAwesomeIcon className="edit-icon" icon={faPen} />
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Table;

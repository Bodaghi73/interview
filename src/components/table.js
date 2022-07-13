import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import "../assets/styles/table.scss";

function Table(props) {
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
				{/* console.log(props); */}
				{props.list.map((item, index) => {
					return (
						<tr key={item.slug}>
							<td>{index + 1}</td>
							<td>{item.title}</td>
							<td className="author">
								<FontAwesomeIcon className="author-icon" icon={faCircle} />
								{item.author.username}
							</td>
							<td>
								<span className="tag-name">{item.tagList}</span>
								<span className="counter">+3</span>
							</td>
							<td>part of article body followed by ellipsis...</td>
							<td>{item.createdAt}</td>
							<td className="options">
								<FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
								<FontAwesomeIcon className="edit-icon" icon={faPen} />
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default Table;

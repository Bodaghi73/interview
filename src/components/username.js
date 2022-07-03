import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/username.scss";

function UserName() {
	return (
		<div className="user-active">
			<div className="user-profile">
				<FontAwesomeIcon className="profile-icon" icon={faFaceSmileBeam} />
			</div>
			<div className="user-information">
				<span className="name">Username</span>
				<span className="email">user.email@example.com</span>
			</div>
		</div>
	);
}

export default UserName;

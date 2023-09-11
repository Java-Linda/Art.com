import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<div id="nav-bar-section">
			{/* <Link to="/home">Home</Link> */}
			<Link className="nav-link1" to="/artists">Artwork by Artist</Link>
			<Link className="nav-link2" to="/subjects">Artwork by Subject</Link>
			{/* <Link to="/login">Login</Link>
			<Link to="/logout">Logout</Link> */}
		</div>
	);
}
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<div id="nav-bar-section">
			{/* <Link to="/home">Home</Link> */}
			<Link class="nav-link" to="/artwork">Artwork</Link>
			<Link class="nav-link" to="/subjects">Subjects</Link>
			{/* <Link to="/login">Login</Link>
			<Link to="/logout">Logout</Link> */}
		</div>
	);
}
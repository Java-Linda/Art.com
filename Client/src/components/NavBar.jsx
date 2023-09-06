import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<div id="nav-bar-section">
			<h1>NAVIGATION BAR HERE</h1>
			{/* <Link to="/home">Home</Link> */}
			<Link to="/artwork">Artwork</Link>
			<Link to="/subjects">Subjects</Link>
			{/* <Link to="/login">Login</Link>
			<Link to="/logout">Logout</Link> */}
		</div>
	);
}
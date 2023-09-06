import { Routes, Route } from 'react-router-dom';
import AllArtwork from './AllArtwork';
import AllSubjects from './AllSubjects';
import AllBuyers from './AllBuyers'
// import Home from "./Home";
// import Login from "./Login";
// import Logout from "./Logout";

export default function MainSection() {
	return (
		<div id="main-section">
			<h1>MAIN SECTION HERE</h1>
			<Routes>
				{/* <Route path="/home" element={<Home />} /> */}
				<Route path="/artwork" element={<AllArtwork />} />
				<Route path="/subjects" element={<AllSubjects />} />
				<Route path="/buyers" element={<AllBuyers />} />
				{/* <Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} /> */}
			</Routes>
		</div>
	);
}
import { Routes, Route } from 'react-router-dom';
import AllArtwork from './AllArtwork';
import AllSubjects from './AllSubjects';
import AllArtists from './AllArtists';
import SingleSubject from './SingleSubject';
import SingleArtist from './SingleArtist';
//import AllBuyers from './AllBuyers'
// import Home from "./Home";
// import Login from "./Login";
// import Logout from "./Logout";

export default function MainSection() {
	return (
		<div id="main-section">
			<Routes>
				{/* <Route path="/home" element={<Home />} /> */}
				<Route exact path="/artwork" element={<AllArtwork />} />
				<Route exact path="/artists" element={AllArtists()} />
				<Route exact path="/subjects" element={AllSubjects()} />
				<Route exact path="/subjects/:subjectsId" element={<SingleSubject />} />
				<Route exact path="/artists/:artistsId" element={<SingleArtist />} />
				{/* <Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} /> */}
			</Routes>
		</div>
	);
}



//        <Route path="/" element={Home()} />
//        <Route path="/characters" element={Characters()} />
//        <Route path="/posts" element={Posts()} />
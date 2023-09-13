import Header from './components/Header';
import NavBar from './components/Navbar';
import MainSection from './components/MainSection';
import "./App.css";

export default function App() {
	return (
		<>
			<div id="app-section">
				<div id="main-header">
					<Header />
					<NavBar />
					<div id="search-bar">
					</div>		
				</div>	
				<MainSection id="app-body"/>	
			</div>
		</>
	);
};
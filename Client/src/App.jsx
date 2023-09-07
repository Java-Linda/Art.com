import Header from './components/Header';
import NavBar from './components/NavBar';
import MainSection from './components/MainSection';
import "./App.css";

export default function App() {
	return (
		<>
			<div id="app-section">
				<div id= "top-section">
				<Header />
				<NavBar />
				</div>
				
				<MainSection />
			</div>
		</>
	);
};


/*<SubjectsList subjects={allSubjects}/>
<BuyersList buyers={allBuyers}/>*/

// const [allArtwork, setAllArtwork] = useState([]);

// useEffect(() => {
//   async function fetchData() {
//     const artwork = await fetchAllArtwork();
//     setAllArtwork(artwork);
//     console.log(artwork);
//     return artwork;
//   }
//   fetchData();
// }, []);
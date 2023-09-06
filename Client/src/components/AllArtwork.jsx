import { useState, useEffect } from 'react';
import { fetchAllArtwork } from '../fetching';

export default function AllArtwork() {
	const [artwork, setArtwork] = useState([]);
	const [searchParam, setSearchParam] = useState("");

	useEffect(() => {
		async function getAllArtwork() {
			const APIResponse = await fetchAllArtwork();
			console.log(APIResponse);
			if (APIResponse) {
				setArtwork(APIResponse);
			} else {
				console.error("Unable to fetch all artwork");
			}
		}
		getAllArtwork();
	}, []);
};


// import Artwork from './Artwork';

// export default function AllArtwork(allArtwork){
    
//     return(
//         <>
//         { allArtwork.map((artwork) => {
//             return <Artwork key={artwork.artworkId} artwork={artwork}/>
//         }) }
//         </>
//     );
// }
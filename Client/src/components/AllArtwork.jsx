import { useState, useEffect } from 'react';
import { fetchAllArtwork } from '../fetching';
import Artwork from './Artwork';

export default function AllArtwork() {
	const [allArtwork, setAllArtwork] = useState([]);
	const [searchParam, setSearchParam] = useState("");

	useEffect(() => {
		async function getAllArtwork() {
			const APIResponse = await fetchAllArtwork();
			console.log(APIResponse);
			if (APIResponse) {
				setAllArtwork(APIResponse);
			} else {
				console.error("Unable to fetch all artwork");
			}
		}
		getAllArtwork();
	}, []);

	return(
        <>
        { allArtwork.map((artwork) => {
            return <Artwork key={artwork.artworkId} artwork={artwork}/>
        }) }
        </>
    );
};
    

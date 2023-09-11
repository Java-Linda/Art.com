import { useState, useEffect } from 'react';
import { fetchAllArtists } from '../fetching';
import Artists from './Artists';

export default function AllArtists() {
	const [allArtists, setAllArtists] = useState([]);
	const [searchParam, setSearchParam] = useState("");

	useEffect(() => {
		async function getAllArtists() {
			const APIResponse = await fetchAllArtists();
			console.log(APIResponse);
			if (APIResponse) {
				setAllArtists(APIResponse);
			} else {
				console.error("Unable to fetch all artists");
			}
		}
		getAllArtists();
	}, []);

	return(
        <>
        { allArtists.map((artists) => {
            return <Artists key={artists.artistsId} artists={artists}/>
        }) }
        </>
    );
};
import { useState, useEffect } from 'react';
import { fetchAllArtists } from '../fetching';
import { Link } from 'react-router-dom';

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

	function navigateToArtist(artistsId){
		useNavigate(`/artists/${artistsId}`)
	}

	return(
        <ul>
        { allArtists.map((artist) => {
			return <li>
				<Link class="artist-list-item" key={artist.artistsId}
                to={`/artists/${artist.artistsId}`}>
				{artist.name}</Link>
			</li>
        }) }
        </ul>
    );
};
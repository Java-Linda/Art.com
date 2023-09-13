import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchArtistById } from '../fetching';

export default function SingleArtist(){
    const params = useParams();
    const [artist, setArtist] = useState({});

    async function getSingleArtist(){
        try{
            setArtist(await fetchArtistById(params.artistsId)) 

            
        } catch(error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getSingleArtist()
    }, []);
    
    return(
        <>
        <Link class="artist-link"
                to={`/artists/${artist.artistsId}`}>
				{artist.name}</Link>
        </>

    )
}
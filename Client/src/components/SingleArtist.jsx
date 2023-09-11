import { useParams } from 'react-router-dom';
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
        <div
        key={artist.artistsId}>{artist.name}
        </div>
        </>

    )
}


//<button
//                onClick={() => {
//                  navigate(`/songs/${song.songId}`)
//                }}>See Details</button>
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchArtworkById } from '../fetching';

export default function SingleArtwork(){
    const params = useParams();
    const [artwork, setArtwork] = useState({});

    async function getSingleArtwork(){
        try{
            setArtwork(await fetchArtworkById(params.artworkId)) 

            
        } catch(error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getSingleArtwork()
    }, []);
    
    return(
        <>
        <div
        key={artwork.artworkId}>{artwork.name}
        </div>
        </>

    )
}
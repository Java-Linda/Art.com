export default function Artwork({ artwork }){
    
    return( 
       <p key={artwork.artworkId}> {artwork.name}</p>
    );
}
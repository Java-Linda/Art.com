export default function Artists({ artists }){
    //console.log(artists);
    
    return( 
       <h3 key={artists.artistsId}> {artists.name}</h3>
    );
}
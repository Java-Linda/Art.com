export default function Buyers({ buyers }){
    
    return( 
       <p key={buyers.buyerId}> {buyers.name}</p>
    );
}
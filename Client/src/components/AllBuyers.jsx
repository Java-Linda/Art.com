import { useState, useEffect } from 'react';
import { fetchAllBuyers } from '../fetching';

export default function AllBuyers() {
	const [buyers, setBuyers] = useState([]);
	const [searchParam, setSearchParam] = useState("");

	useEffect(() => {
		async function getAllBuyers() {
			const APIResponse = await fetchAllBuyers();
			console.log(APIResponse);
			if (APIResponse) {
				setBuyers(APIResponse);
			} else {
				console.error("Unable to fetch all buyers");
			}
		}
		getAllBuyers();
	}, []);
};



// import Buyers from './Buyers';

// export default function AllBuyers(allBuyers){
    
//     return(
//         <>
//         { allBuyers.map((buyers) => {
//             return <Buyers key={buyers.buyerId} buyers={buyers}/>
//         }) }
//         </>
//     );
// }
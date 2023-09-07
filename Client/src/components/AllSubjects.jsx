import { useState, useEffect } from 'react';
import { fetchAllSubjects } from '../fetching';

export default function AllSubjects() {
	const [allSubjects, setAllSubjects] = useState([]);
	const [searchParam, setSearchParam] = useState("");

	useEffect(() => {
		async function getAllSubjects() {
			const APIResponse = await fetchAllSubjects();
			console.log(APIResponse);
			if (APIResponse) {
				setAllSubjects(APIResponse);
			} else {
				console.error("Unable to fetch all subjects");
			}
		}
		getAllSubjects();
	}, []);
	return <h1>Subjects Here</h1>
};


// import Subjects from './Subjects';

// export default function AllSubjects(allSubjects){
    
//     return(
//         <>
//         { allSubjects.map((subjects) => {
//             return <Subjects key={subjects.subjectsId} subjects={subjects}/>
//         }) }
//         </>
//     );
// }
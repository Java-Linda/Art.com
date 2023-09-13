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

	return (
		<>
	    { allSubjects.map((subjects) => {
			return <div>
				<h3 key={subjects.subjectsId}>{subjects.type}</h3>
			<button onClick={() =>{
				Navigate(`/subjects/${subjects.subjectsId}`)
			}}> Click here for artwork by subject
			</button>
			      </div>

		}) }
		</>
	);
};



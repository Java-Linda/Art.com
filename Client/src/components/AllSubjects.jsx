import { useState, useEffect } from 'react';
import { fetchAllSubjects } from '../fetching';
import Subjects from './Subjects';

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
				<Subjects key={subjects.subjectsId} subjects={subjects}/>
			<button onClick={() =>{
				Navigate(`/subjects/${subjects.subjectsId}`)
			}}> Click here for artwork by subject
			</button>
			      </div>



		}) }
		</>
	);
};



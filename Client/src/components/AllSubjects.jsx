import { useState, useEffect } from 'react';
import { fetchAllSubjects } from '../fetching';
import { Link } from 'react-router-dom';

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

	function navigateToSubject(subjectsId){
		useNavigate(`/subjects/${subjectsId}`)
	}

	return(
		<ul>
		{ allSubjects.map((subject) => {
			return <li>
				<Link class="subject-list-item" key={subject.subjectsId}
				to={`/subjects/${subject.subjectsId}`}>
				{subject.type}</Link>
			</li>
		}) }
		</ul>
	);
};
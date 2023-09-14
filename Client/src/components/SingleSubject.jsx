import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSubjectsById } from '../fetching';

export default function SingleSubject(){
    const params = useParams();
    const [subject, setSubject] = useState({});

    async function getSingleSubject(){
        try{
            setSubject(await fetchSubjectsById(params.subjectsId)) 

            
        } catch(error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getSingleSubject()
    }, []);
    
    return(
        <>
        <Link class="subject-link"
                to={`/subjects/${subject.subjectsId}`}>
				{subject.type}</Link>
        </>

    )
}
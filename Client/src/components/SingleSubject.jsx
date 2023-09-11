import { useParams } from 'react-router-dom';
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
        <div
        key={subject.subjectsId}>{subject.type}
        </div>
        </>

    )
}
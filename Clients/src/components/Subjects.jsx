export default function Subjects({ subjects }){
    
    return( 
       <p key={subjects.subjectsId}> {subjects.name}</p>
    );
}
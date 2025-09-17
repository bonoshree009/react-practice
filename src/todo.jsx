 export default function Todo({course,duration = "20 houres"}){
    if (course == "js"){
        return (
            <>
        <p>course name : {course} </p> 
        <p> duration {duration}</p>
        </>

        )
         
    }
    return (
         <div>
        <p>course name : {course} </p>
        <p>duration :{duration}</p>
        </div> )
}
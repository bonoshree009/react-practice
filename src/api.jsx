import { use } from "react"

    export default function Users({apiusers}){
    const users = use(apiusers)
    console.log(users)


    return (
       <div className="event">
        <h3>Users:{users.length}</h3>
       </div>
    )
}
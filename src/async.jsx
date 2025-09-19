import { use } from "react"


    export default function Async({asyncfetch}){
        const data = use (asyncfetch)
        console.log(data)
    
    return (
       <div className="event">
        <h3>Users:</h3>
       </div>
    )
}
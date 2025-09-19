import { useState } from "react"

export function Boller(){
   
    let [run , setrun] = useState(0)
    if(run > 50){
   
        alert("congrats you get half century")
    }
  const run1 = ()=> setrun(run +1)
  const run4 = ()=> setrun(run + 4)
  const run6 = ()=> setrun(run + 6)
  
    return <div className="event">
       <h1>Count Runs: {run}</h1> 
       <button onClick={run1} >run 1</button>
       <button onClick={run4}>run 4</button>
       <button onClick={run6}> run 6</button>
    </div>
}
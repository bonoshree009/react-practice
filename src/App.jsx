import './App.css'
import Todo from './todo';
import Allactor from './array';
import Obj from './obj';
import { Suspense, useState } from 'react';
import { Boller } from './boller';
import Users from './api';
import Async from './async';

// fetch
const apiusers = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
 const allfetch = async () => {
  const res =  await fetch("https://jsonplaceholder.typicode.com/todos");
    return res.json();
 }
function App() {

const asyncfetch = allfetch()
// Event handler
 function Eventhandlerone(){
  alert("clicked")
 }
 function Eventhandlerfour(num){
     const number =num + 5
     alert(number)
 }

 function Count(){

const [count , setcount]= useState(0)
const addhandle =()=>{
    let newcount = count +1
    return setcount(newcount)
}

  return <div className='state'>
    <h1>count : {count}</h1>
    <button className='event' onClick={addhandle}>press</button>
  </div>
 }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Person name="no"></Person>
       <Person></Person>
       <Student></Student>
       <Developer name="saha" tech="js" ></Developer>
        <Developer name="sarkar" tech="rdux" ></Developer>
        <Pronami name ="eva" event= "durga puja" amount = "2000"></Pronami>
        <Pronami name ="omi" event= "durga puja"></Pronami> */}
        {/* <Todo course="js" duration ="200 hours"></Todo>
          <Todo course="html"></Todo> */}
          {/* <Ternary name="jahid" time = "209" isdone={true}></Ternary>
          <Ternary name="suraj" isdone={false}></Ternary> */}
          {/* <Favactor></Favactor>
          <Object></Object> */}
          <button className='event' onClick={Eventhandlerone}>Event-1</button>
          <button className='event' onClick={function eventhandlertwo(){alert("clicked button two")}}>Event-2</button>
          <button className='event' onClick={() => {alert("clicked button three")}}>Event-3</button>
          <button className='event' onClick={()=>Eventhandlerfour(7)}>Event-4</button>
        {/* <Count></Count>
        <Boller></Boller> */}
        {/* <Suspense fallback={ <h3>Loding...</h3>}>
             <Users apiusers ={apiusers}></Users>
        </Suspense> */}

         <Suspense fallback={ <h1>Loding...</h1>}>
             <Async asyncfetch = {asyncfetch}></Async>
        </Suspense>
        
      
    </>
  )
}
function Object(){
  const objects = [
    {id:1,name:"kakri",age:25},
    {id:2,name:"bakri",age:45},
    {id:3,name:"makri",age:35},
    {id:4,name:"fakri",age:25}
  ]
  return (
  <div> {
    objects.map(obj => <Obj obj={obj} key={obj.id}></Obj>)
  } </div>)
}

 function Favactor(){
  const actors =["rohit","sid","varun","aditya","srk","rajkuar"]

   return (
    <div> {actors.map(actor => <Allactor actor ={actor}></Allactor>)}</div>
   )
 }

 function Ternary({name,time = 0,isdone}){
   let displaytime = time > 200? time : "need more practice"
    if(isdone){
         return (
          <div><p>name :{name}</p>
          <p>coding time : {displaytime}</p>
          </div>
         )
    }
  return (
    <div>
      <p>name :{name}</p>
      <p>coding time : {time}</p>
      </div>
        
         )
 }

function Pronami({ name,event, amount=200}){

  return (
    <div className='student'>
      <p>name : {name}</p>
      <p>pronami for : {event}</p>
      <p>amount : {amount}</p>
      <p>year : 2025</p>
    </div>

  )
}

function Person(props){
  console.log(props)
  const age = 17;
  const name ="ahum";
  const personstyle = {
    fontSize : "20px",
    color : "red",
    padding : "20px",
    textAlign : "center",
    border : "2px solid red"

  }
 return (
  <>
  <p>am i a person : {props.name}</p>
  <p id='' style={personstyle}>i am a person: {name} {age}</p>
  </>

 )
}

function Student () {
  return (
    <div className='student'>
      <p>name</p>
      <p>depertment</p>
      </div>
  )
}

function Developer (props){
  console.log(props)
  return(
    <div style={{
        border: '2px solid green'
    }}>
      <h3>developer :{props.name}</h3>
      <p>technology : {props.tech}</p></div>
    
  )
}

export default App

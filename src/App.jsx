
import './App.css'
import Todo from './todo';

function App() {

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
        <Todo course="js" duration ="200 hours"></Todo>
          <Todo course="html"></Todo>

        
      
    </>
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

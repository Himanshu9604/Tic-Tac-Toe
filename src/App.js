import React from "react";
import { useState } from "react";
import "./App.css"

export default function App() {

    //Answer 1
     const[todo,setTodo]=useState("");
    const[arr,setArr]=useState(["Do Some Work Now!!"])

function handleChange(e) {
setTodo(e.target.value);
}

function handleText(){
    setArr([...arr,todo]);
}

// //answer 2

const[count,setCount]=useState(0);
function handleIncrease(){
    setCount(count+1);
}
function handleDecrease(){
    setCount(count-1 );
}

// //answer3
const[target,setTarget]=useState(true)

function handleName(){
    setTarget(!target);
}

return(
    <div id="Content">
        <h4>On clicking Add Button will show in below task list</h4>
         <input value={todo} type="text" onChange={handleChange}/>
        <button onClick={handleText}>Add</button>
        <ul>
            {
                arr.map((x)=>{
                    return <p>{x}</p>
                })
            }
        </ul>
        <br></br><br></br>

        {/* answer 2 */}
        <h1>{count}</h1>
        <button onClick={handleIncrease} >Increase</button>
        <button onClick={handleDecrease}>Decrease</button>






        <br></br><br></br>
        {/* answer 3 */}
        {target? <p>My Name Is Amit</p> : <p>My Name is Rajan</p> }
        <button onClick={handleName}>Change Name</button>
    </div>
);



//import { useState } from 'react';//
function LogButtonClicks() {
  const [count, setCount] = useState(0);
  
  const handle = () => {
    const updatedCount = count + 1;
    console.log(`Clicked ${updatedCount} times`);
    setCount(updatedCount);
  };
  console.log('I rendered!');
  return <button onClick={handle}>Click me</button>;
}
}
 import React ,{useState }from "react";

 function Counter(){
    const[counterOne, setCounterOne]=useState(0)
    const[counterTwo, setCounterTwo]=useState(0)
 

 function incrementOne (){
    setCounterOne(counterOne+1)
 }

 function incrementTwo(){
    setCounterTwo(counterTwo+1)
    
 }  


 return(
    <div>
        <div>
            <h1>{counterOne}</h1>
            <button onClick={incrementOne}>CounterOne-</button>
            <div>
                <h1>{counterTwo}</h1>
            <button onClick={incrementTwo}>CounterTwo-{counterTwo}</button>
            </div>
        </div>
    </div>
 );
 }
 export default Counter;
import { useState } from "react";
import React, {useState} from "react";

export default function Todos(){
    const[task, setTasks]=useState([])
    const[inputValue, setInputValue]=useState('')
    const[uncompletedCount,setUncompletedCount]=useState(0)
}
  const handleAddTask=()=>{
         if(inputValue!=''){
            setTasks
         }
  }
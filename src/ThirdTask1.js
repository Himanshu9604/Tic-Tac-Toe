import { useState} from "react";

export default function ThirdTask1(){
    const [name, setName]=useState('Himanshu');


const handleChange = ()=>{
    setName(name === 'Himanshu' ? 'Raju' : 'Akash' )

};
    return(
        <>
        <h1>Hello My Name is ,{name}</h1>
        <button  onClick={handleChange} >Change Name !!</button>
        </>
    )
};

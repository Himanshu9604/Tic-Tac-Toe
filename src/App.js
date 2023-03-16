import React,{useState} from "react";

// *****First  Task**********
// import FirstTask1 from "./FirstTask1";
// import './FirstTask1.css'

// *****Second Task**********
// import SecondTask from "./SecondTask";
// import './SecondTask.css'

// *****Third  Task**********
import { SignIn } from "./ThirdTask1";
import { SignUp } from "./ThirdTask2";

function App(){
  const [currentForm, setCurrentForm] = useState('signIn');
  function toggleForm(formName){
    setCurrentForm(formName)
  }
  return(
    <div>
      {/* <FirstTask1/> */}
    
    {/* <SecondTask/> */}

    <SignIn/>
    <SignUp/> 
     {currentForm === 'signIn' ? <SignIn formStatus={toggleForm}/> : <SignUp formStatus={toggleForm}/>}
    </div>
  );
}

export default App;
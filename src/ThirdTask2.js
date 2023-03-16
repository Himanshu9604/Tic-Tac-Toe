import './ThirdTask2.css'

export function SignUp(prop){
    return(
        <div className="form-container">
            <Greeting/>
        <form className="signIn-form">
        <label>First Name</label>
        <input placeholder="First Name" type="text"></input>
        <label>Last Name</label>
        <input  placeholder="Last Name" type="text"></input>
        <label>Email</label>
        <input placeholder="abc@gmail.com" type="email"></input>
        <label>Password</label>
        <input placeholder="**" type="password"></input>
        <button className="signIn-signUp">Sign Up</button>
      </form>
      <p>Have an account?</p>
      <button className="switch" onClick={()=>prop.formStatus('signIn')}>Sign In</button>
      </div>
        
    )
  }

function Greeting(){
    return(
      <div className="greetings">
        <h2 className="welcome">Welcome!</h2>
        <p className="instru">Please create an account</p>
      </div>
      
    )
  }
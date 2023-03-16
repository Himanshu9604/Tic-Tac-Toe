import './ThirdTask1.css'

export function SignIn(prop){
    return(
        <div className="form-container">
          <Greeting/>
        <form className="signUp-form">
        <label>Email</label>
        <input placeholder="abc@gmail.com" type="email"></input>
        <label>Password</label>
        <input placeholder="**" type="password"></input>
        <button className="signIn-signUp">Sign In</button>
      </form>
      <p>Don't have an account?</p>
      <button className="switch" onClick={()=>prop.formStatus('signUp')}>Sign up</button>
      
      </div>
      
    )
  }

function Greeting(){
    return(
      <div className="greetings">
        <h2 className="welcome">Welcome!</h2>
        <p className="instru">Sign In to your account</p>
      </div>
      
    )
  }
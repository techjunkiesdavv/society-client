import React, {useState} from 'react';
import login from './login.module.scss';
import logo1 from '../../assets/logo1.png';
import email from '../../assets/email1.svg';
import eyeopen from '../../assets/show.svg';
import eyeclose from '../../assets/hide.svg';
import lock from '../../assets/passw.svg';




const Login = () => {
  const [showpassword, setshowpassword]=useState(false);
  function Toggle() {
    var temp = document.getElementById("typepass");
    if (temp.type === "password") {
        temp.type = "text";
        setshowpassword(true);
    }
    else {
        temp.type = "password";
        setshowpassword(false);
    }
}
  return (
    <div className={login.loginpage}>
        <form className={login.form}>
      <img src={logo1} alt='logo' className={login.logo}/>
      <p className={login.head}>Hello, Welcome back!</p>
      <div className={login.emailinfo} >
        <img src={email} alt='email' className={login.emailimg}/>
        <input
          type='text'
          className={login.email}
          placeholder='Email'>
        </input> 
      </div> 
      <div className={login.passinfo} >
        <img src={lock} alt='password' className={login.passimg}/>
        <input
          type='password' 
          className={login.pass}
          placeholder='Password'
          id="typepass"
          >
        </input> 
        <img src={showpassword?eyeopen:eyeclose} alt='eyeopen' className={login.eyeopen} onClick={Toggle}/>
      </div>

      <div className={login.remember}>
        <input type="checkbox" className='remembercheck'/>
        <p className={login.remembertext}>Remember me</p>
      </div> 

      <div className={login.forgot}>
        Forgot password?
      </div>

      <button className={login.loginbtn}>
        Log in
      </button>

      <div className={login.register}>
        <p className={login.text1}>Don't have an account?</p>
        <p className={login.text2}>Register now!</p>
      </div>
      </form>
    </div> 
  );
};

export default Login;

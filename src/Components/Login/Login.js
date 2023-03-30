import React, {useState} from 'react';
import styles from './login.module.scss';
import logo1 from '../../assets/logo1.png';
import emailImg from '../../assets/email1.svg';
import eyeopen from '../../assets/show.svg';
import eyeclose from '../../assets/hide.svg';
import lock from '../../assets/passw.svg';
// images folder after merge

const Login = (props) => {
  const [showpassword, setshowpassword]=useState(false);
  const [email,setEmail] = useState('') ;
  const [password,setPassword] = useState('') ;
  const [isLogin,setIsLogin] = useState(false) ;

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

    const handleLogin =(e)=>{
      props.setLogin(true);
      setIsLogin(true) ;
        e.preventDefault() ;
      
      //call ;
      setIsLogin(false) ;

    }

  return (
    <div className={styles.loginpage}>
        <form className={styles.form} onSubmit={handleLogin} >
      <img src={logo1} alt='logo' className={styles.logo}/>
      <p className={styles.head}>Hello, Welcome back!</p>
      <div className={styles.emailinfo} >
        <img src={emailImg} alt='email' className={styles.emailimg}/>
        <input
          type='email'
          className={styles.email}
          placeholder='Email' 
          required
          onChange={(e)=> setEmail(e.target.value)}
          value={email} />
      </div> 
      <div className={styles.passinfo} >
        <img src={lock} alt='password' className={styles.passimg}/>
        <input
          type='password' 
          className={styles.pass}
          placeholder='Password'
          id="typepass"
          onChange={(e)=> setPassword(e.target.value)}
          value={password}
          required
          />
     
        <img src={showpassword?eyeopen:eyeclose} alt='eyeopen' className={styles.eyeopen} onClick={Toggle}/>
      </div>

      <div className={styles.wrapper}>
      <div className={styles.remember}>
        <input type="checkbox" className='remembercheck'/>
        <p className={styles.remembertext}>Remember me</p>
      </div> 

      <div className={styles.forgot}>
        Forgot password?
      </div>
      </div>

      <button className={styles.loginbtn}>
      { isLogin ? 'Logging in':' Log in' } 
      </button>

      <div className={styles.register}>
        <p className={styles.text1}>Don't have an account?</p>
        <p className={styles.text2}>Register now!</p>
      </div>
      </form>
    </div> 
  );
};

export default Login;

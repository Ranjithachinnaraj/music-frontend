import { useState } from 'react';
import HomePage from './HomePage';
import SignupPage from './SignupPage';
import './Style.css';
import WelcomePage from './WelcomePage';
import AuthContext from './context/AuthContext';
function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState(false);
  const [signup, setSignup] = useState(false);
  const [back, setBack] = useState(false);

  function handleSubmit() {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
          "username": username,
          "password": password
      });

      const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
      };

      fetch("http://localhost:3344/user/sign-in", requestOptions)
          .then((response) => response.json())
          .then((result) => {
              if(result.status) {
                  setAuth(true);
              }else{
                  alert(result.msg);
              }
          })
          .catch((error) => console.error(error));
  }


  if (auth) {
      return (
          <AuthContext.Provider value={[auth, setAuth]}>
              <HomePage />
          </AuthContext.Provider>
      );
  }

  function handleClick2() {
      setSignup(true);
  }
  if (signup) {
      return <SignupPage />
  }

  function handlClick3() {
      setBack(true);
  }
  if (back) {
      return <WelcomePage />
  }

       return (
       <>
        <div className="container3">
  <div className="form-box">
    <img src="spotify-logo.jpg" width="100px" className="login-logo" />
    <div className="sing-in-up">
      <a className="login" href="login.html">
        SIGN IN
      </a>
      <a className="login" href="signup.html">
        SIGN UP
      </a>
      {/* <a href="#" onclick="spotifyPage()">Sign Up</a> */}
    </div>
    <form action="" name="form">
      <div className="input-box">
        <ion-icon name="mail-outline" />
        <input type="text" name="Username" value={username}
                    onChange={(e) => setUsername(e.target.value)}  />
        <label>Username</label>
      </div>
      <div className="input-box">
        <ion-icon name="lock-closed-outline" />
        <input type="password" name="password"  value={password}
                    onChange={(e) => setPassword(e.target.value)} />
        <label>Password</label>
      </div>
      <div className="Remember">
        <label>
          {" "}
          <input type="checkbox" />
          Remember Me
        </label>
      </div>
      <div className="log-forget">
        <button className="login-btn" onClick={handleClick}>Sign up</button>
      </div>
    </form>
  </div>
</div>

       </>
    );
  }

  
  export default LoginPage;
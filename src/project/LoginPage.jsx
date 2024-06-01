import { useState } from 'react';
import HomePage from './HomePage';
import SignupPage from './SignupPage';
import './Style.css';
import WelcomePage from './WelcomePage';
import AuthContext from './context/AuthContext';
function LoginPage({ setTab }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState(false);
  const [signup, setSignup] = useState(false);
  const [back, setBack] = useState(false);

  function handleSubmit() {
      if(username === "user" && password === "pass") {
        setTab("main");
      }
      // const myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/json");

      // const raw = JSON.stringify({
      //     "username": username,
      //     "password": password
      // });

      // const requestOptions = {
      //     method: "POST",
      //     headers: myHeaders,
      //     body: raw,
      //     redirect: "follow"
      // };

      // fetch("http://localhost:3344/user/sign-in", requestOptions)
      //     .then((response) => response.json())
      //     .then((result) => {
      //         if(result.status) {
      //             setAuth(true);
      //         }else{
      //             alert(result.msg);
      //         }
      //     })
      //     .catch((error) => console.error(error));
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
    <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/8a/87/30/8a8730a7-2e29-bf1f-7840-8df85e6e8d27/Isai-1x_U007emarketing-0-7-0-85-220.jpeg/1200x630wa.png" width="100px" className="login-logo" />
    <div className="sing-in-up">
      <button  style={{color:"red"}} className="login">
        SIGN IN
      </button>
      <button  style={{color:"red"}} className="login">
        SIGN UP
      </button>
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
        <button className="login-btn" onClick={handleSubmit}>Sign up</button>
      </div>
    </form>
  </div>
</div>

       </>
    );
  }

  
  export default LoginPage;
import { useEffect, useState } from 'react';
import LoginPage from './LoginPage';
import './Style.css';
import WelcomePage from './WelcomePage';
function SignupPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [login, setLogin] = useState(false);
  const [back, setBack] = useState(false);

  const [count, setCount] = useState(0);

  useEffect(() => {
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

      fetch("http://localhost:3344/user/sign-up", requestOptions)
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
  }, [count]);

  function handleClick() {
      setLogin(true);
      setCount(count + 1);
  }
  if (login) {
      return <LoginPage />
  }

  function handleClick2() {
      setBack(true);
  }
  if (back) {
      return <WelcomePage />
  }

  return (
    <>
     <div className="container3">
<div className="form-box">
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
                 onChange={(e) => setUsername(e.target.value)} />
     <label>Username</label>
   </div>
   <div className="input-box">
     <ion-icon name="lock-closed-outline" />
     <input type="password" name="password" value={password}
                 onChange={(e) => setPassword(e.target.value)} />
     <label> Create Password</label>
   </div>
   <div className="input-box">
     <ion-icon name="lock-closed-outline" />
     <input type="password" name="password" />
     <label>Confirm Password</label>
   </div>
   <div className="Remember">
     <label>
       {" "}
       <input type="checkbox" />
       Remember Me
     </label>
   </div>
   <div className="log-forget">
     <button className="login-btn">Log in</button>
     <a className="forget" href="#">
       Forget your Password?
     </a>
   </div>
 </form>
</div>
</div>

    </>
 );


}
  export default SignupPage;
 
// import { useState } from "react";
// import HomeTask from './HomeTask';


// function LoginTask() {
//     const [username, setUsername] = useState("admin");
//     const [pass, setPass] = useState("admin");
//     const [value, setValue] = useState("");

//     function handleClick({value}) {
//         if(setValue===username){
//           return
//           <HomeTask/>
//         }

//     }

//     return (
//         <>
//         <input type="text">username</input>
//         <input type="password"></input>
//         <button onClick={handleClick( )}>submit </button>

//             {/* <ChildComp mode={mode} /> */}

//         </>
//     );
// }

// export default LoginTask;





import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom'; // Assuming you are using React Router for navigation
// import HomePage from '../project/HomePage';
import HomeTask from './HomeTask';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Normally you'd send this to a server to validate, but here we'll hardcode a check
    const correctUsername = 'user';
    const correctPassword = 'password';

    if (username === correctUsername && password === correctPassword) {
      setLoggedIn(true);
    } else {
      alert('Incorrect username or password. Please try again.');
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if (loggedIn) {
    // Redirect to home page if logged in
    return <HomeTask/>;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => {
        e.preventDefault(); // Prevent default form submission behavior
        handleLogin();
      }}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;

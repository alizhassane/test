import React, { useState } from "react";
import { database } from "../componts/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./RegisterAndLogin.css"
import Card from "../componts/Card";
function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then( (data) => {
          const id=data.user.uid
          console.log(data, "authData");
          localStorage.setItem('id',JSON.stringify(id));
          history("/submit");
          setLogin(true);
        })
        .catch((err) => {
          alert(err.code);

        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {

          const id=data.user.uid
          console.log(data, "authData");
          localStorage.setItem('id',JSON.stringify(id));
          history("/submit");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = ()=>{
    history("/reset");
  }
  return (

    <div className="App">
    <Card>
      <div className="row">
        <div
          className={login === false ? "activeColor" : "pointer"}
          onClick={() => setLogin(false)}
        >
          SignUp
        </div>
        <div
          className={login === true ? "activeColor" : "pointer"}
          onClick={() => setLogin(true)}
        >
          SignIn
        </div>
      </div>
      <h1 className="h">{login ? "SignIn" : "SignUp"}</h1>
      <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
        <input className="i" name="email" placeholder="Email" />
        <br />
        <br />
        <input className="i" name="password" type="password" placeholder="Password" />
        <br />
        <p onClick={handleReset} className="fp">Forgot Password?</p>
        <br />
        <div >
        <button className="btn">{login ? "SignIn" : "SignUp"}</button>
      </div>
      </form>

    </Card>
    </div>
  );
}
export default RegisterAndLogin;
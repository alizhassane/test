import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "../componts/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import Card from "../componts/Card";
import "./RegisterAndLogin.css"
function ForgotPassword(){
    const history = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(database,emalVal).then(data=>{
            alert("Check your gmail")
            history("/")
        }).catch(err=>{
            alert(err.code)
        })
    }
    return(

        <div className="App">
            <Card>
            <h1>Forgot Password</h1>
            <form onSubmit={(e)=>handleSubmit(e)} className="f">
                <input className="i" name="email" placeholder="Email"/><br/><br/>
                <button className="btn">Reset</button>
            </form>
            </Card>
        </div>

    )
}
export default ForgotPassword;
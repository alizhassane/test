import { signOut } from "firebase/auth";
import React from "react";
import { database } from '../componts/FirebaseConfig';
import { useNavigate } from "react-router-dom";
import Packs from "./Packs";
import "./packs.css"

function HomeScreen(){
    const history = useNavigate()

    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }
    return(
        <div className="si">

            <button onClick={handleClick}>SignOut</button>
            <Packs/>

        </div>
    )
}
export default HomeScreen;

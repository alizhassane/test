import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card';

export default function Pack(props) {
    const h = useNavigate();
    const uid=JSON.parse(localStorage.getItem('id'));
    const sub = (e) =>{
        e.preventDefault();
        const option={
            cat:props.categorie,
            id:uid};
        const res= fetch("https://test-5fcbc-default-rtdb.firebaseio.com/pack.json",{
            method:'POST',
            body:JSON.stringify(option),
            headers:{
                'Content-Type':'application/json'
            }
        });
        if(res)
        h("/Categories");
    }
    return (
    <div>
        <Card>
        <h1>{props.type}</h1>
        <ul>
            <li>Categorie :{props.categorie}</li>
            <li>souscategorie :{props.souscategorie}</li>
        </ul>
        <button onClick={sub}>
            onSubmit
        </button>
        </Card>
    </div>
  )
}

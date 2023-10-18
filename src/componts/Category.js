import React, { useState } from 'react'
import Card from './Card'
export default function Category() {
    const categorie =[{
        name: "metal",sub: [{
            name:"iron"
        },{
            name:"gold"
        },{
            name:"bronze"
        },{
            name:"silver"
        },{
            name:"aluminim"
        }]
    },{
        name:"hardware",sub:[{
            name:"mothercard"
        },{
            name:"gpu"
        },{
            name:"cpu"
        },{
            name:"ram"
        },{
            name:"ssd"
        }]
    },{
        name:"software",sub:[{
            name:"vsc"
        },{
            name:"chrome"
        },{
            name:"brave"
        },{
            name:"winrar"
        },{
            name:"idm"
        }]}];

        const [categories,setCategories] = useState();
        const [subb, setSub] = useState([]);
        function HandleCategories(event){
            setCategories(event.target.value)
            setSub(categorie.find(ctr => ctr.name === event.target.value).sub)
        }
    return (
        <div className='justify-content:center d-flex w-100 vh-100'>

            <div className='w-50 mt-5'>
                <div>

                <h2>select categorie</h2>
                <select className='form-control' onChange={HandleCategories}>
                    <option>-categorie-</option>
                    {categorie.map(ctr=> {
                        return (<option value={ctr.name}> {ctr.name} </option>);
                    })}
                </select>
                <br/>
                <br/>
                <select className='form-control'>
                    <option>-subcategorie-</option>
                    {subb.map(c => {
                        return (<option value={c.name}>{c.name}</option>)
                    })}
                </select>
                <br/>
                <br/>
                <select className='form-control'>
                    <option>-subcategorie-</option>
                    {subb.map(c => {
                        return (<option value={c.name}>{c.name}</option>)
                    })}
                </select>
                <br/>
                <br/>
                <select className='form-control'>
                    <option>-subcategorie-</option>
                    {subb.map(c => {
                        return (<option value={c.name}>{c.name}</option>)
                    })}
                </select>
                <br/>
                <br/>
                <select className='form-control'>
                    <option>-subcategorie-</option>
                    {subb.map(c => {
                        return (<option value={c.name}>{c.name}</option>)
                    })}
                </select>
                <br/>
                <br/>
                <select className='form-control'>
                    <option>-subcategorie-</option>
                    {subb.map(c => {
                        return (<option value={c.name}>{c.name}</option>)
                    })}
                </select>
                </div>
        </div>
            </div>

  )
}

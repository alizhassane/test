import React from 'react'
import Pack from '../componts/Pack'
import "./packs.css"
export default function Packs
() {


  return (
    <div className='body'>
        <Pack type='basic' categorie='1' souscategorie='10' />
        <Pack type='pro' categorie='2' souscategorie='10'  />
        <Pack type='expert' categorie='3' souscategorie='10' />
    </div>
  )
}

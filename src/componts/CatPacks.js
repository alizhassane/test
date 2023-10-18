import React from 'react'
import Category from './Category'
import Card from './Card';
import './fin.css'
export default function
(props) {
    const p = props.p;

  return (
    <div className='fin'>
      {Array.from({ length: p }).map((_, index) => (
        <Card>
        <Category key={index} />
        </Card>
      ))}
    </div>
  );
}

import React, { useEffect, useState } from 'react'
import Category from '../componts/Category'
import CatPacks from '../componts/CatPacks';


export default function Categories() {
  const uid = JSON.parse(localStorage.getItem('id'));
  const [pack, setPack] = useState(false);
  const [data, setData] = useState([]);
  const [loading,isloading]=useState(true);

  useEffect(() => {
    fetch('https://test-5fcbc-default-rtdb.firebaseio.com/pack.json')
      .then((response) => response.json())
      .then((data) => {

        const cate = [];

        for (const key in data) {
          const dat = {
            id: key,
            ...data[key],
          };
          cate.push(dat);
        }


        setData(cate);

        // Iterate over data to find the correct value
        for (const d of cate) {
          const i = d.id;
          if (uid === i) {
            setPack(d.cat);
          }
        }
        isloading(false);
      });
  }, [uid]);
if(loading){
  return(<div>
    <h1>loading</h1>
  </div>);
}else{return(
  <CatPacks p={pack}/>
)}
}






import React from 'react'
import { useState , useEffect } from 'react'


function Welcome() {

    const [name , setname] = useState();
    
    useEffect(()=>{
        const find = localStorage.getItem("name");
        setname(find);
    } , []);

  return (
    <div className='cont'>
    <div className='container1'>
     
      <h1>Welcome {name}</h1>
    </div>
    </div>
  )
}

export default Welcome

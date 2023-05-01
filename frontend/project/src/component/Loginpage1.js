import React from 'react'
import { useState } from 'react'


function Loginpage1() {

    const [name , setname] = useState();
    const [email , setemail] = useState();

    const handlesubmit = (e) =>{
        e.preventDefault();
        console.log(name , email);

    }


  return (

    <div>
        <form>
   <h2>Name -:</h2><br/>
   <input type='text'
   required
   onChange={(e)=>setname(e.target.value)}
    placeholder='ENter you name' />

   <h2>Email -:</h2><br/>
   <input type='text' 
   required
   onChange={(e)=>setemail(e.target.value)}
   placeholder='ENter you email' />
   <br/>
   <button type='submit' onClick={handlesubmit}>submit</button>
   </form>
    </div>
  )
}

export default Loginpage1;

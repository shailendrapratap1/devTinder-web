import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
const [emailId,setEmailId] = useState("");
const [password,setPassword] = useState("");
const handleLogin = async () =>{
try{


    const  res = await axios.post("http://localhost:7777/login",{
        emailId,password,
    });
    console.log(res)
}
catch(err){
    console.error(err);
}
}

  return (
    <div className='flex justify-center my-10'>
    <div className="card bg-base-300 w-96 shadow-sm">

  <div className="card-body">
    <h2 className="card-title">Login</h2>
<div>
<label className="label">Email</label>
  <input type="email" value={emailId} className="input" placeholder="enter your email" 
  onChange={(e)=>setEmailId(e.target.value)}/>
 

  <label className="label">Password</label>
  <input type="password" className="input" value={password} placeholder="Password" 
  onChange={(e)=> setPassword(e.target.value)} />
</div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin}> Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login

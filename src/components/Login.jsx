import axios from 'axios';
import React, { useState } from 'react'
import { addUser } from '../utils/UserSlice';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
const [emailId,setEmailId] = useState("");
const [password,setPassword] = useState("");
const[error,setError] = useState("")
const dispatch = useDispatch()
const navigate = useNavigate()
const handleLogin = async () =>{
try{


    const  res = await axios.post(BASE_URL + "/login",{
        emailId,password,
    },{
      withCredentials:true
    });;

    dispatch(addUser(res.data))
        return navigate("/")
}
catch(err){
  setError(err?.response?.data || "something went wrong")
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
<p className='text-red-500'>{error}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin}> Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login

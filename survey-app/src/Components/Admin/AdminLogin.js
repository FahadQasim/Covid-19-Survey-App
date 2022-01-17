import React from 'react'
import { auth } from '../../Firebase';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const AdminLogin = () => {
    const [password,SetPassword]=useState("");
    const email="Admin@gmail.com"
    let navigate=useNavigate()
    const handelAdminlogin=()=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    
    console.log(email,password)
    navigate("/admindashboard")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


    }

    return (
        <div>
           
            <h1>Admin Login</h1>
            <br />
            <h3>admin@gmail.com</h3>
            <label for="inputPassword5" class="form-label">Password</label>
            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"
             value={password}  onChange={(e) => SetPassword(e.target.value)} /> <br />
            <br />
            <button type="button" class="btn btn-primary" onClick={handelAdminlogin}>Login</button>


        </div>
    )
}

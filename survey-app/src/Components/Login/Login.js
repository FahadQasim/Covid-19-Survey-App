import React from 'react'
import { Form, Input, Button } from 'antd';
import "./Login.css"
import { auth } from '../../Firebase';
import { useState } from 'react';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Login = () => {
    const [email, Setemail] = useState("");
    const [password, SetPassword] = useState("");
    let navigate=useNavigate();
    
     const handelLogin = async(e) => {
         
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate("/surveyform")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
       
      
          


    }
    return (
        <div id="login">
            <h1>Login</h1>
            <form onSubmit={handelLogin}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    value={email} onChange={(e) => Setemail(e.target.value)}
    />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" 
    value={password}
     onChange={(e) => SetPassword(e.target.value)}
    />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
     Already have an account <Link to="/signup">Signup</Link> <br />
     <br />
     Login as <Link to="/adminlogin">Administrator</Link>
    
            
        </div>
    )
}
// 

// 
//  
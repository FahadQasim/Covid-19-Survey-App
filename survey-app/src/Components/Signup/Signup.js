import React from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../Firebase';
import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';




export const Signup = () => {
    const [email, Setemail] = useState("");
    const [password, SetPassword] = useState("");
    const [username, SetUserName] = useState("");
    let navigate=useNavigate();
    const handelSignup = (e) => {
       
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setDoc(doc(db, "usersData", user.uid), {
                    name: username,
                    email: email,
                    userUid: user.uid,
                })
                navigate("/")

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });




    }
    return (
        <form  onSubmit={handelSignup}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
     value={email} onChange={(e) => Setemail(e.target.value)}/>

    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    <br />
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    value={username} onChange={(e) => SetUserName(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1 " value={password} onChange={(e) => SetPassword(e.target.value)}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    )
}
// 
//
// 
//
// 
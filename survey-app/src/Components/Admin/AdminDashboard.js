import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext'
import { auth } from '../../Firebase';
import { signOut } from 'firebase/auth';
import { useState,useEffect } from 'react';
import { db } from '../../Firebase';
import { collection,getDocs } from 'firebase/firestore';
import './AdminDasboard.css'

export const AdminDashboard = () => {
   let navigate=useNavigate();
   const [posts, SetPosts] = useState([]);
    const Logout = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
          navigate("/")
    
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });}

        useEffect(() => {
            const getUsers = async () => {
                const data = await getDocs(collection(db, "Formdata"));
                SetPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            };
    
            getUsers();
        }, []);
   

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
  <button type="button" class="btn btn-primary btn-sm" onClick={Logout}>Logout</button>
  </div>
  <div class="container-fluid">
   <h3>Admin Dashboard</h3>
  </div>
</nav>
            
            <div>
            {posts.map((post) => {
                    return ( <table class="table table-bordered border-primary">
  
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>UserName:{post. Username}</td>
                        <td>Is User Vaccinated:{post. IsUserVaccinated}</td>
                        <td>Address:{post. Useraddress}</td>
                      </tr>
                      
                    </tbody>
                  </table>)
                })

                }
            </div>
            
        </div>
    )
}


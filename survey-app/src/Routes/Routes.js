import React from 'react'
import { Routes as AppRoutes, Route, } from "react-router-dom";
import { AdminDashboard } from '../Components/Admin/AdminDashboard';
import { AdminLogin } from '../Components/Admin/AdminLogin';
import { Login } from '../Components/Login/Login';
import { Signup } from '../Components/Signup/Signup';
import { SurveyForm } from '../Components/Survey-Form/SurveyForm';

export const MyRoutes = () => {
    return (
        <AppRoutes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/surveyform" element={<SurveyForm/>}/>
          <Route path="/admindashboard" element={<AdminDashboard/>}/>

        </AppRoutes>
    )
}

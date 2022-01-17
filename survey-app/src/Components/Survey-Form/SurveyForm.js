import { setDoc, collection, addDoc } from 'firebase/firestore';
import React from 'react'
import { useUserAuth } from '../../Context/UserAuthContext';
import { db } from '../../Firebase';
import { useState } from 'react';
import { useContext } from 'react';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


export const SurveyForm = () => {
    // save data in state variable for later use
    const [name, SetName] = useState("");
    const [age, SetAge] = useState("");
    const [address, SetAddress] = useState("");
    const [peoplecontact, SetPeopleContact] = useState("");
    const [symptoms, SetSymptoms] = useState("");
    const [vaccinated, Setvaccinated] = useState("");
    const [travel, Settravel] = useState("");

    // navigate to change pages
    let navigate = useNavigate();

    // logout function
    const Logout = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            navigate("/")

            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    const handelsubmit = (e) => {
        e.preventDefault()
        let formdata = {
            Username: name,
            Useraddress: address,
            UserinContact: peoplecontact,
            usersSymtomps: symptoms,
            IsUserVaccinated: vaccinated,
            UserTravel: travel

        }
        // add data to firebase 
        addDoc(collection(db, "Formdata"), formdata );
        alert("Your form has been submited")


    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Covid-19 Survey</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <div class="d-flex">

                            <button class="btn btn-outline-success" onClick={Logout} >Logout</button>
                        </div>
                    </div>
                </div>
            </nav>

            <form class="row g-3"  onSubmit={handelsubmit}>
                <div class="col-md-6">
                    <label htmlFor="inputEmail4" class="form-label" >Name</label>
                    <input type="text" class="form-control" id="inputEmail4" value={name} onChange={(e) => SetName(e.target.value)} />
                </div>
                <div class="col-md-6">
                    <label htmlFor="inputPassword4" class="form-label">Age</label>
                    <input type="number" class="form-control" id="inputPassword4" value={age} onChange={(e) => SetAge(e.target.value)} />
                </div>
                <div class="col-12">
                    <label htmlFor="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={address} onChange={(e) => SetAddress(e.target.value)} />
                </div>
                <div class="col-12">
                    Approximately , how many people have you come in contact with in past 15 days
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={"1-5"} onChange={(e) => SetPeopleContact(e.target.value)} />
                        <label class="form-check-label" htmlFor="inlineRadio1">1-5</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={"5-10"} onChange={(e) => SetPeopleContact(e.target.value)} />
                        <label class="form-check-label" htmlFor="inlineRadio2">5-10</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value={"15-20"} onChange={(e) => SetPeopleContact(e.target.value)} />
                        <label class="form-check-label" for="inlineRadio3">15-20 </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value={"more than 20"} onChange={(e) => SetPeopleContact(e.target.value)} />
                        <label class="form-check-label" htmlFor="inlineRadio3">more than 20 </label>
                    </div>
                </div>
                <div class="col-md-6">
                    <label  htmlFor="inputState" class="form-label">Do You have any of following Symptoms</label>
                    <select id="inputState" class="form-select">
                        <option value={"Fever"} onChange={(e) => SetSymptoms(e.target.value)} >Fever</option>
                        <option value={"cough"} onChange={(e) => SetSymptoms(e.target.value)}>Cough</option>
                        <option value={"sudden loss of smell"} onChange={(e) => SetSymptoms(e.target.value)}>Sudden loss of smell</option>
                        <option value={"none"} onChange={(e) => SetSymptoms(e.target.value)}>none</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <label htmlFor="inputState" class="form-label">Do You have Travel history of any the countries</label>
                    <select id="inputState" class="form-select required">
                        <option value={"china"} onChange={(e) => Settravel(e.target.value)}>China</option>
                        <option value={"Spain"} onChange={(e) => Settravel(e.target.value)}>Spain</option>
                        <option value={"India"} onChange={(e) => Settravel(e.target.value)}>India</option>
                        <option value={"none"} onChange={(e) => Settravel(e.target.value)}>none</option>
                    </select>
                </div>

                <div class="col-12">
                    Have you been fully vaccinated?
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={"true"} onChange={(e) => Setvaccinated(e.target.value)} />
                        <label class="form-check-label" htmlFor="inlineCheckbox1">True</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value={"false"} onChange={(e) => Setvaccinated(e.target.value)} />
                        <label class="form-check-label"  htmlFor="inlineCheckbox2">False</label>
                    </div>





                </div>
                <div class="col-12">
                    <button  class="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    )
}

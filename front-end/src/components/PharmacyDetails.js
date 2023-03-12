import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PharmacyApproval from './PharmacyApproval';
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import SideBarAdmin from './SideBarAdmin';
import { useLocation } from 'react-router-dom';
let Logo = require('../img/logo.jpeg');

const PharmacyDetails = () => {
    // const navigate = useNavigate();

    // const PharmacyApproval = () => {
    //     navigate.push("/PharmacyApproval")
    // }
    const { state } = useLocation();
    function myFunction(li){
        window.open(li,'_blank', 'noreferrer')
        
    }
    //state.license
    //let license = require("../../../back-end"+state.license);
    console.warn("hi")
    console.warn("http://localhost:9000/"+state.license);
    // console.warn("state"+JSON.stringify(state));
    // let item = JSON.stringify(state)
    // console.warn(item)
    return (
        <div>

            <Navbar />
            <SideBarAdmin />
            <main id="main" class="main">
                {/* <div class="col-xl-8"> */}

                <div class="card">
                    <div class="card-body pt-3">

                        <div class="tab-content pt-2">

                            <div class="tab-pane fade show active profile-overview" id="profile-overview">
                                {/* <h5 class="card-title">About</h5>
                                    <p class="small fst-italic">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p> */}

                                <h5 class="card-title">Pharmacy Details</h5>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label ">Pharmacy Name</div>
                                    <div class="col-lg-9 col-md-8">{state.pharmacyName}</div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Address</div>
                                    <div class="col-lg-9 col-md-8">{state.address}</div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Pharmacy Owner</div>
                                    <div class="col-lg-9 col-md-8">{state.pharmacyOwnerName}</div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Adhaar No.</div>
                                    <div class="col-lg-9 col-md-8">{state.aadharNo}</div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">PAN No.</div>
                                    <div class="col-lg-9 col-md-8">{state.panNo}</div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Email</div>
                                    <div class="col-lg-9 col-md-8">{state.email}</div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Contact No.</div>
                                    <div class="col-lg-9 col-md-8">{state.contact}</div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">GST No.</div>
                                    <div class="col-lg-9 col-md-8">{state.GSTNo}</div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">License No.</div>
                                    <div class="col-lg-9 col-md-8">{state.licenseNo}</div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-4 label">License </div>
                                    {/* console.warn({state.license}) */}
                                    {/* console.warn("http://localhost:9000/ "+{state.license}); */}
                                   {/* <Link to={state.license} onClick = {()=>myFunction("http://localhost:9000/"+state.license)}><a href={state.license}>license image</a></Link> 
                                    */}
                                    <div class="col-lg-9 col-md-8"><Link to="/PharmacyDetails" state = {state} onClick = {()=>myFunction("http://localhost:9000/"+state.license)}>License</Link> </div>
                                    {/* <a href={state.license}>license image</a> */}
                                    {/* <img src={license} alt="" /> */}
                                </div>

                                {/* <div class="container">
                                    <div class="row">
                                        { records.length > 0}{
                                            records.forEach(function (row) {
                                                <div class="col-md-4">
                                                    <img src="./uploads/<%=row.license %>" alt="license"></img>
                                                </div>


                                            })

                                        }
                                        
                                    </div>
                                </div> */}

                            </div>
                        </div>
                        <Link to='/PharmacyApproval' onClick={() => window.location.href("/")} ><button class="btn btn-success">back</button></Link>
                    </div>
                </div>
                {/* </div> */}
            </main>
        </div>

    );
}

export default PharmacyDetails;
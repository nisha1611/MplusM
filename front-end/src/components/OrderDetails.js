import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PharmacyApproval from './PharmacyApproval';
import OrderApproval from './OrderApproval';
import {useNavigate} from 'react-router-dom'
import Navbar from './Navbar';
import SideBarPharmacy from './SideBarPharmacy';
import { useLocation } from 'react-router-dom';
let Logo = require('../img/logo.jpeg');

const OrderDetails = () => {
    // const navigate = useNavigate();
  
    // const PharmacyApproval = () => {
    //     navigate.push("/PharmacyApproval")
    // }
    const {state} = useLocation();
    function myFunction(li){
        window.open(li,'_blank', 'noreferrer')
        
    }
    //console.warn(state._id);
    // console.warn("state"+JSON.stringify(state));
    // let item = JSON.stringify(state)
    // console.warn(item)
    return (
        <div>
            
            <Navbar/>
            <SideBarPharmacy/>
            <main id="main" class="main">
                {/* <div class="col-xl-8"> */}

                    <div class="card">
                        <div class="card-body pt-3">

                            <div class="tab-content pt-2">

                                <div class="tab-pane fade show active profile-overview" id="profile-overview">
                                    {/* <h5 class="card-title">About</h5>
                                    <p class="small fst-italic">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p> */}

                                    <h5 class="card-title">Order Details</h5>

                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 label ">Customer Name</div>
                                        <div class="col-lg-9 col-md-8">{state.customerName}</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 label">Product Name</div>
                                        <div class="col-lg-9 col-md-8">{state.products}</div>
                                    </div>
                                    <div class="row">
                                    <div class="col-lg-3 col-md-4 label">Prescription </div>
                                     {/* console.warn({state.prescription})  */}
                                    <div class="col-lg-9 col-md-8"><Link to="/OrderDetails" state = {state} onClick = {()=>myFunction("http://localhost:9000/"+state.prescription)}>Prescription</Link> </div>
                                    {/* <div class="col-lg-9 col-md-8"><Link to="/OrderDetails" state = {state} onClick = {()=>myFunction("http://localhost:9000/"+state.prescription)}>Prescription</Link> </div> */}
                                    {/* <a href={state.prescription}>prescription image</a> */}
                                    {/* <img src={license} alt="" /> */}
                                </div>



                                    {/* <div class="row">
                                        <div class="col-lg-3 col-md-4 label">Qty</div>
                                        <div class="col-lg-9 col-md-8">{state.products.qty}</div>
                                    </div> */}

                                </div>
                            </div>
                            <Link to = '/OrderApproval' onClick={()=>window.location.href("/")} ><button class = "btn btn-success">back</button></Link>
                        </div>
                    </div>
                {/* </div> */}
            </main>
        </div>

    );
}

export default OrderDetails;
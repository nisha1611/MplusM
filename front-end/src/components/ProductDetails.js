import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PharmacyApproval from './PharmacyApproval';
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import Navbar from './Navbar';
import SideBarPharmacy from './SideBarPharmacy';
const ProductDetails = () => {
    // const navigate = useNavigate();

    // const PharmacyApproval = () => {
    //     navigate.push("/PharmacyApproval")
    // }
    // constructor(props){
    //     super(props);
    //     console.warn(props)
    //     // this.state = {
    //     //     value: this.props.location.state,
    //     // }
    // }
    const { state } = useLocation();
    console.warn(state);
    return (
        <div>
            {/* {console.warn(this.props.location.state)} */}
            {/* <div class="header">
                <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a class="logo d-flex align-items-center">
                        <img src="img/logo.jpeg" alt="logo" />
                        <h1>M plus M</h1>
                    </a>
                </div>
            </div> */}
            <Navbar/>
            <SideBarPharmacy/>
            <main id="main" class="main">
                {/* <div class="col-xl-8"> */}

                    <div class="card">
                        <div class="card-body pt-3">

                            <div class="tab-content pt-2">

                                <div class="tab-pane fade show active profile-overview" id="profile-overview">
                                    
                                    <h5 class="card-title">Product Details</h5>

                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 label ">Product Name</div>
                                        <div class="col-lg-9 col-md-8">{state.productName}</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 label">Product Description</div>
                                        <div class="col-lg-9 col-md-8">{state.productDescription}</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 label">Product Quantity</div>
                                        <div class="col-lg-9 col-md-8">{state.quantity}</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 label">Brand</div>
                                        <div class="col-lg-9 col-md-8">{state.brand}</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 label">Price</div>
                                        <div class="col-lg-9 col-md-8">{state.price}</div>
                                    </div>

                                    

                                </div>
                            </div>
                            <Link to='/AddProducts' ><button class="btn btn-success">back</button></Link>
                        </div>
                    </div>
                {/* </div> */}
            </main>
        </div>

    );
}

export default ProductDetails;
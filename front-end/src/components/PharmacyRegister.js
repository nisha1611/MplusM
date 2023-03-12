import React, { useState } from "react";
import '../styles/index.css'
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from 'axios'
import PharmacyHomePage from "./PharmacyHomePage";
import { useNavigate } from "react-router-dom";
let Logo = require('../img/logo.jpeg');


const PharmacyRegister = () => {
    const navigate = useNavigate()

    const [pharmacyName, setPharmacyName] = useState("");
    const [address, setAddress] = useState("");
    const [pharmacyOwnerName, setPharmacyOwnerName] = useState("");
    const [aadharNo, setAadharNo] = useState("");
    const [panNo, setPanNo] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [GSTNo, setGSTNo] = useState("");
    const [licenseNo, setLicenseNo] = useState("");
    const [license, setLicense] = useState("");
    const [password, setPassword] = useState("");

    const [newPharmacist, setNewPharmacist] = useState(
        {
            pharmacyName: '',
            address: '',
            pharmacyOwnerName: '',
            aadharNo: '',
            panNo: '',
            email: '',
            contact: '',
            GSTNo: '',
            licenseNo: '',
            license: '',
            password:''
        }
    )

    // var acc = document.getElementsByClassName("accordion");
    // var i;

    // for (i = 0; i < acc.length; i++) {
    //     acc[i].addEventListener("click", function () {
    //         /* Toggle between adding and removing the "active" class,
    //         to highlight the button that controls the panel */
    //         this.classList.toggle("active");

    //         /* Toggle between hiding and showing the active panel */
    //         var panel = this.nextElementSibling;
    //         if (panel.style.display === "block") {
    //             panel.style.display = "none";
    //         } else {
    //             panel.style.display = "block";
    //         }
    //     });
    // }



    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("pharmacyName", newPharmacist.pharmacyName);
        formData.append("address", newPharmacist.address);
        formData.append("pharmacyOwnerName", newPharmacist.pharmacyOwnerName);
        formData.append("aadharNo", newPharmacist.aadharNo);
        formData.append("panNo", newPharmacist.panNo);
        formData.append("email", newPharmacist.email);
        formData.append("contact", newPharmacist.contact);
        formData.append("GSTNo", newPharmacist.GSTNo);
        formData.append("licenseNo", newPharmacist.licenseNo);
        formData.append("license", newPharmacist.license);
        formData.append("password", newPharmacist.password);

        await axios({
            method: "post",
            url: "http://localhost:9000/mplusm/pharmacist/signup",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });


        //console.warn(name, password)

        // let result = await fetch("http://localhost:9000/mplusm/pharmacist/signup", {
        //     method: 'post',
        //     body: JSON.stringify({pharmacyName,address,pharmacyOwnerName,adhaarNo,panNo,email,contact,GSTNo,licenseNo,license}),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })

        // result = await result.json();

        navigate("/PharmacyHomePage")

    }

    const handleChange = (e) => {
        setNewPharmacist({ ...newPharmacist, [e.target.name]: e.target.value })
        console.log(newPharmacist.pharmacyName)
    }
    const handleFile = (e) => {
        setNewPharmacist({ ...newPharmacist, license: e.target.files[0] })
        console.log(newPharmacist.license)
    }
    //     const [fileData, setFileData] = useState("");
    // const getFile = (e) => {
    //   setFileData(e.target.files[0]);
    // };
    //     const uploadFile = async (e) => { 
    //         e.preventDefault();   
    //         const data = new FormData();
    //         data.append("file", fileData);
    //         let result=await fetch({
    //           method: "POST",
    //           url: "http://localhost:9000/mplusm/pharmacist/uploads",
    //           data: data,
    //         }).then((res) => {       
    //             alert(res.data.message);
    //         });
    //       };
    return (
        <div>
            <header id="header" class="header fixed-top d-flex align-items-center">

                <div class="d-flex align-items-center justify-content-between">
                    <a href="index.html" class="logo d-flex align-items-center">
                        <img src={Logo} alt="" />
                        <span class="d-none d-lg-block">Medicines Plus More</span>
                    </a>
                </div>
            </header>
            <div >
                <div class="card pt-5 mt-5">
                    <h5 class="card-title">Register Your Pharmacy</h5>
                    <div class="card-body pt-3">
                        <form encType="multipart/form-data">
                            <div class="row mb-3">
                                <label for="PharmacyName" class="col-md-4 col-lg-3 col-form-label">Pharmacy Name</label>
                                <div class="col-md-8 col-lg-9">
                                    <input name="pharmacyName" type="text" class="form-control" id="PharmacyName" onChange={handleChange} />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="address" class="col-md-4 col-lg-3 col-form-label">Pharmacy Address</label>
                                <div class="col-md-8 col-lg-9">
                                    <textarea name="address" type="text" class="form-control" id="PharmacyAddress" onChange={handleChange} />
                                </div>
                            </div>

                            {/* <div class="accordion" id="accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="PharmacyOwner">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Pharmacy Owner details
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div> */}

                            <div class="row mb-3">
                                <label for="PharmacyOwnerName" class="col-md-4 col-lg-3 col-form-label">Pharmacy Owner Name</label>
                                <div class="col-md-8 col-lg-9">
                                    <input name="pharmacyOwnerName" type="text" class="form-control" id="PharmacyOwnerName" onChange={handleChange} />
                                </div>
                            </div>

                            {/* <div class="row mb-3">
                            <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                            <div class="col-md-8 col-lg-9">
                                <img src="assets/img/profile-img.jpg" alt="Profile" />
                                <div class="pt-2">
                                    <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></a>
                                    <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a>
                                </div>
                            </div>
                        </div> */}


                            <div class="row mb-3">
                                <label for="PharmacyOwnerAdhaar" class="col-md-4 col-lg-3 col-form-label">Pharmacy Owner Aadhaar No.</label>
                                <div class="col-md-8 col-lg-9">
                                    <input name="aadharNo" type="text" class="form-control" id="PharmacyOwnerAdhaar" onChange={handleChange} />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="PharmacyOwnerPan" class="col-md-4 col-lg-3 col-form-label">Pharmacy Owner PAN No.</label>
                                <div class="col-md-8 col-lg-9">
                                    <input name="panNo" type="text" class="form-control" id="PharmacyOwnerPan" onChange={handleChange} />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="PharmacyEmail" class="col-md-4 col-lg-3 col-form-label">Email ID</label>
                                <div class="col-md-8 col-lg-9">
                                    <input name="email" type="text" class="form-control" id="PharmacyEmail" onChange={handleChange} />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="PharmacyContactNo" class="col-md-4 col-lg-3 col-form-label">Contact No.</label>
                                <div class="col-md-8 col-lg-9">
                                    <input name="contact" type="text" class="form-control" id="PharmacyContactNo" onChange={handleChange} />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="PharmacyGstNo" class="col-md-4 col-lg-3 col-form-label">GST No.</label>
                                <div class="col-md-8 col-lg-9">
                                    <input name="GSTNo" type="text" class="form-control" id="PharmacyGstNo" onChange={handleChange} />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="PharmacyLicenseNo" class="col-md-4 col-lg-3 col-form-label">License No.</label>
                                <div class="col-md-8 col-lg-9">
                                    <input name="licenseNo" type="text" class="form-control" id="PharmacyLicenseNo" onChange={handleChange} />
                                </div>
                            </div>

                            {/* <div class="row mb-3">
                                <label for="PharmacyLicenseImg" class="col-md-4 col-lg-3 col-form-label">License Image</label>
                                <div class="col-md-8 col-lg-9">
                                <input name="PharmacyLicenseImg" type="file" accept="image/*" class="form-control" id="PharmacyLicenseImg" onChange={(e) => {console.log(e.target.file); setLicense(URL.createObjectURL(e.target.file)); }} />
                            
                                     {/* {console.log(e.target.file)} */}
                            {/* { <input name="PharmacyLicenseImg" type="file" accept="image/*" class="form-control" id="PharmacyLicenseImg" onChange={getFile}  /> */}
                            {/* </div> 
                            </div> */}
                            <div class="row mb-3">
                                <label for="PharmacyLicenseImg" class="col-md-4 col-lg-3 col-form-label">License Image</label>
                                <div class="col-md-8 col-lg-9">
                                    {/* <input name="PharmacyLicenseImg" type="file" accept="image/*" class="form-control" id="PharmacyLicenseImg" onChange={(e) => {console.log(e.target.files[0].name); setLicense(URL.revokeObjectURL(e.target.files[0]));setLicense((URL.createObjectURL(e.target.files[0]))); }} />
                                     */}
                                    <input name="license" type="file" accept=".png, .jpg, .jpeg , .pdf" class="form-control" id="license" onChange={handleFile}></input>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="Password" class="col-md-4 col-lg-3 col-form-label">Password</label>
                                <div class="col-md-8 col-lg-9">
                                    <input name="password" type="password" class="form-control" id="Password" onChange={handleChange} />
                                </div>
                            </div>



                            <div class="text-center">
                                <Link to ="/PharmacyHomePage"><button type="button" class="btn btn-primary" onClick={handleSubmit}>Register</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PharmacyRegister;
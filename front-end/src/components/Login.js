import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "../styles/login.css"
import "../styles/index.css"
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

let Logo=require('../img/logo.jpeg')
let valid = false;
let profile = "hello1";
 
const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate()
    
 
    const collectData = async (e) => {
        e.preventDefault();
        valid = false
        //console.warn(name, password)
        console.warn(valid)
        let result = await fetch("http://localhost:9000/mplusm/admin/login", {
            method: 'post',
            body: JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        //result = await result.text();
        console.warn(result)
        result = await result.json()
        console.warn(result)
        console.warn("result"+result.type)
        let id = result.id;
        console.warn(id)

        if(result.type=="admin"){
            //valid = true
            navigate("/AdminHomePage");
            console.log("admin login")
        }
        else if(result.type=="pharmacist"){
            navigate("/PharmacyHomePage",{state:{id}})
            console.log("pharmacist login")
        }
        else{
            console.log("invalid login")
           //window.alert("please enter correct password")
        }
    

        
       // result = await result.json();
        // console.warn("result "+result)
        // if(result.password=="123"){
        //     //console.warn("Correct")
        //     valid = true
    }

    
        // if(password=="123"){
        //     //console.warn("Correct")
        //     valid = true
        // }
        // console.warn("valid " + valid)
        // if(valid){
        //     dispatch(
        //         login({
        //             name:name,
        //             password:password,
        //             loggedIn: true,
        //         })
        //     )
        // }
 
    //};
 
    return(
        <div class = "login">
        <div class="container">
            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                            <div class="d-flex justify-content-center py-4">
                                <a href="index.html" class="logo d-flex align-items-center w-auto">
                                    <img src={Logo} alt="logo" />
                                    {/* <span class="d-none d-lg-block">Medicines plus more</span> */}
                                </a>
                            </div>

                            <div class="card mb-3">

                                <div class="card-body">

                                    <div class="pt-4 pb-2">
                                        <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                        <p class="text-center medium">Enter your username & password to login</p>
                                    </div>

                                    <form class="row g-3 needs-validation" novalidate>

                                        {/* <div class="col-12">
                                            <label for="yourUsername" class="form-label">Username</label>
                                            <div class="input-group has-validation">
                                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                <input type="text" name="username" class="form-control" id="yourUsername" onChange={(e) => setName(e.target.value)} required />
                                                <div class="invalid-feedback">Please enter your username.</div>
                                            </div>
                                        </div> */}
                                        <div class="col-12">
                                                <label for="yourEmail" class="form-label">Your Email</label>
                                                <input type="email" name="email" class="form-control" id="yourEmail" onChange={(e) => setEmail(e.target.value)} required />
                                                <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label">Password</label>
                                            <input type="password" name="password" class="form-control" id="yourPassword" onChange = {(e) => setPassword(e.target.value)} required />
                                            <div class="invalid-feedback">Please enter your password!</div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                                <label class="form-check-label" for="rememberMe">Remember me</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <Link to = "/AdminHomePage"><button class="btn btn-primary w-100" type="submit" onClick={collectData}>Login</button></Link>
                                        </div>
                                        <div class="col-12">
                                            <p class="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </div>
        </div>
    )
};
 
export default Login;
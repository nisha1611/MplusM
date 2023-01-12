import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { signup } from "../features/userSlice";
import "../styles/login.css"

const SignUp = () => {
    const [pharmacyName,setPharmacyName] = useState("");
    const [password,setPassword] = useState("");

    //let validPassword = false
   

    // const collectData  = async ()=>{
    //     console.warn(name, password)
    //     let result = await fetch("http://localhost:9000/mplusm/admin/login", {
    //         method: 'post',
    //         body: JSON.stringify({name,password}),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
        
    //     result = await result.json();
    //     console.warn("result "+result)
    //     if(result.password=="123"){
    //         //console.warn("Correct")
    //         valid = true
    //     }
    //     //console.warn(valid)
    // }
 
    const dispatch = useDispatch();
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.warn(pharmacyName, password)
        let result = await fetch("http://localhost:9000/mplusm/pharmacist/signup", {
            method: 'post',
            body: JSON.stringify({pharmacyName,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        result = await result.json();
        console.warn("result "+result)

            dispatch(
                signup({
                    pharmacyName:pharmacyName,
                    password:password,
                    loggedIn: true,
                })
            )
 
    };
 
    return(
        <div className = "login" onSubmit={(e) => handleSubmit(e)}>
            <h1>Pharmacist SignUp</h1>
            <form className = "login__form">
                <h1>Register here</h1>
                <input
                type = "name"
                placeholder="Pharmacy Name"
                value={pharmacyName}
                onChange={(e) => setPharmacyName(e.target.value)}
                />
                <input
                type = "password"
                placeholder="Password"
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
                />
                <button /*onClick={collectData}*/ type="submit" className = "submit__btn">
                    Submit
                </button>
            </form>
        </div>
    )
}
 
export default SignUp;
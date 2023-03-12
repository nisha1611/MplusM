import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "../styles/login.css"
let valid = false;
 
const PharmacistLogin = () => {
    const [pharmacyName,setPharmacyName] = useState("");
    const [password,setPassword] = useState("");
 
    const dispatch = useDispatch();
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        valid = false
        console.warn(pharmacyName, password)
        console.warn(valid)
        let result = await fetch("http://localhost:9000/mplusm/pharmacist/login", {
            method: 'post',
            body: JSON.stringify({pharmacyName,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        result = await result.json();
        console.warn("result "+result)
       
        // if(password=="123"){
        //     //console.warn("Correct")
        //     valid = true
        // }
        
       
            dispatch(
                login({
                    pharmacyName:pharmacyName,
                    password:password,
                    loggedIn: true,
                })
            )
        
 
    };
 
    return(
        <div className = "login" onSubmit={(e) => handleSubmit(e)}>
            <form className = "login__form">
                <h1>Login here</h1>
                <input
                type = "name"
                placeholder="Name"
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
 
export default PharmacistLogin;
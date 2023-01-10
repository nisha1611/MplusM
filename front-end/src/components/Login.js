import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "../styles/login.css"
let valid = false;
 
const Login = () => {
    const [name,setName] = useState("");
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
        valid = false
        console.warn(name, password)
        console.warn(valid)
        let result = await fetch("http://localhost:9000/mplusm/admin/login", {
            method: 'post',
            body: JSON.stringify({name,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        result = await result.json();
        console.warn("result "+result)
        if(result.password=="123"){
            //console.warn("Correct")
            valid = true
        }
        // if(password=="123"){
        //     //console.warn("Correct")
        //     valid = true
        // }
        console.warn("valid " + valid)
        if(valid){
            dispatch(
                login({
                    name:name,
                    password:password,
                    loggedIn: true,
                })
            )
        }
 
    };
 
    return(
        <div className = "login" onSubmit={(e) => handleSubmit(e)}>
            <form className = "login__form">
                <h1>Login here</h1>
                <input
                type = "name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
 
export default Login;
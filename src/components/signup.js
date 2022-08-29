import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import "../components/css/signup.css"
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase'

function SignUp(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    let history = useHistory();

    const signup = ()=> {
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/homepage")
            alert('successfully Registered')
        }).catch((error)=>{
            console.log(error);
            alert('something went wrong')
        })

    };
    return(
        <div className="signUpMainDiv">
            <div className="frame">
                <div className="subFrame">
                    <h1 className="signUpHeading">REGISTER ACCOUNT</h1>
                    <input placeholder="Enter Your Name" className="textbox" type="text" onChange={(e) => setEmail(e.target.value)} /><br></br>
                    <input placeholder="Enter Your Surname" className="textbox" type="text" onChange={(e) => setEmail(e.target.value)} /><br></br>
                    <input placeholder="Enter Your Email" className="textbox" type="text" onChange={(e) => setEmail(e.target.value)} /><br></br>
                    <input placeholder="Enter Your Password" className="textbox" type="password" onChange={(e) => setPassword(e.target.value)} /><br></br>
                    <Link style={{ color: 'black',marginLeft:'200px', marginTop:'10px' }} to="/">Sign In</Link>
                    <br></br>
                    <button onClick={signup}>SIGN UP</button>

                </div>
            </div>
        </div>
    )
}

export default SignUp;
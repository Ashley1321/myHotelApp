
import "../components/css/signup.css"
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useState } from "react"
import {auth} from '../config/firebase'

function SignIn(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const signin = (()=>{

        signInWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/homepage")
            alert('Accepted')
        }).catch((error)=>{
            console.log(error);
            alert('Something went wrong')
        })


        
    })

    return(
        <div className="signUpMainDiv">
            <div className="frame">
                <h1 className="signUpHeading">SIGN IN</h1>
                <input className="textboxx" type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email"/><br></br>
                <input className="textboxx" type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password"/><br></br>
                <button onClick={signin}>SIGN IN</button>
                <span className="signInSpan">
                <Link style={{ color: 'black', }} to="/signup">Create Account</Link>
                </span>
                <span className="passSpan">
                <br></br>
                <Link style={{ color: 'black', }} to="/resetPassword">Forgot Password</Link>
                </span>
            </div>

        </div>
    )
}


export default SignIn;
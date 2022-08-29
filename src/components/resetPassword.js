
import "../components/css/signup.css"
import {useHistory} from 'react-router-dom'
import {auth} from '../config/firebase'
import { useState } from "react";
import {sendPasswordResetEmail } from "firebase/auth";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function ResetPassword(){
    let history = useHistory('');


    const [email,setEmail] = useState('');
    

    const resetPassword = (()=>{
        sendPasswordResetEmail(auth, email).then(() => {
                    history.push("/homepage")
                    alert('Check your emails for varification')
                   
               }).catch((error) => {
                    console.log(error);
                    alert('something went wrong')
                });

                //material core
                
    })

    return(
        <div className="signUpMainDiv">
            <div className="frame">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <h1 className="signUpHeading">RESET PASSWORD</h1>
                <input className="textboxx" type="Email" onClick={(e)=>setEmail(e.target.value)} placeholder="Enter Email Linked with Account"/><br></br>
                <button onClick={resetPassword}>RESET</button>
            </div>

        </div>
    )
}


export default ResetPassword;
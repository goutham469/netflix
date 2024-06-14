import React, { useState } from 'react'
import GoogleIcon from '../Login/google.png'

import {  GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate();


  let [emailData,updateEmailData] = useState({});
  let [password1,updatePassword1] = useState('')
  let [password2,updatePassword2] = useState('')
  let [errorMessage,updateErrorMessage] = useState('')

  function checkFormData(event)
  {
    event.preventDefault();
    if(emailData.email)
    {
      updateErrorMessage('')
      if(password1 && password2)
      {
        updateErrorMessage('')
        if(password1 == password2)
        {
          updateErrorMessage('')
          checkCredentials({"userData":emailData,"password":password1});
        }
        else
        {
          updateErrorMessage('* password not matched *')
        }
      }
      else
      {
        updateErrorMessage("* null passwords not accepted *")
      }
    }
    else
    {
      updateErrorMessage('* Verify your google account. Click on "Google" icon')
    }
  }

  async function checkCredentials(userData)
  {
    console.log(userData)
  }

  return (
    <div style={{backgroundColor:"black",color:"white",width:"fit-content",margin:"20px",padding:"20px",borderRadius:"10px",border:"1px solid white"}}>
        <label style={{fontSize:"30px",color:"gold"}}>Sign up</label>
        <button style={{backgroundColor:"white",border:"1px solid black",borderRadius:"10px",padding:"5px",left:"80px",position:"relative"}}     onClick={()=>{navigate('/login')}}>Login</button>
        <form>
            <p>click on the below Google tab to verify your email</p>

           {/* ********************************        Google OAuth verification     ********************************** */}

            <div>use your google account.
            <center style={{margin:"5px"}}>
            <GoogleLogin
                onSuccess={async (credentialResponse)=>{
                  let decodedString = jwtDecode(credentialResponse.credential)
                  // console.log(decodedString)
                  updateEmailData(decodedString)
                }}/>
            </center>
               </div>


            <p style={{textAlign:"left"}}>create password</p>
            <input style={{border:"1px solid white",borderRadius:"10px",fontSize:"20px"}} type='password' placeholder='password'   onChange={(event)=>{updatePassword1(event.target.value)}}/>
            <br/>
            <p style={{textAlign:"left"}}>conform password</p>
            <input style={{border:"1px solid white",borderRadius:"10px",fontSize:"20px"}} type='password' placeholder='password'   onChange={(event)=>updatePassword2(event.target.value)}/>
            <br/>
            <p style={{color:"red"}}>{errorMessage}</p>
            <button style={{backgroundColor:"white",color:"black",borderRadius:"10px",padding:"5px",margin:"10px",fontWeight:"500"}}   onClick={(event)=>{checkFormData(event)}}>create account</button>
            <br/>
        </form>
        
    </div>
  )
}

export default SignUp
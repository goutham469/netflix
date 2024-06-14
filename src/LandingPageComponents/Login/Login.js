import React, { useState } from 'react'
import GoogleIcon from './google.png'
import { useNavigate } from 'react-router-dom'

function Login() {

    const naviagate = useNavigate();


    let [email,updateEmail] = useState('')
    let [passsword,updatePassword] = useState('')
    let [ errorMessage,updateErrorMessage] = useState('')
    
    function CheckFormData(event)
    {
        event.preventDefault();
        if(email)
        {
            updateErrorMessage('')
            if(passsword)
            {
                updateErrorMessage('')
                const userData = {"email":email,"password":passsword}
                console.log(userData)
                naviagate('/user')
            }
            else
            {
                updateErrorMessage('* null password not accepted *')
            }
        }
        else
        {
            updateErrorMessage("* null email not accepted *")
        }
        
    }
    async function checkCredentials(userData)
    {
        let base_url = process.env.REACT_APP_SERVER_BASE_URL
        
    }
  return (
    <div style={{backgroundColor:"black",color:"white",width:"fit-content",margin:"20px",padding:"20px",borderRadius:"10px",border:"1px solid white"}}>
        <label style={{fontSize:"30px",color:"gold"}}>Login</label>
        <button style={{backgroundColor:"white",border:"1px solid black",borderRadius:"10px",padding:"5px",left:"60px",position:"relative"}}     onClick={()=>{naviagate('/signup')}}>sign up</button>
        <form>
            <p style={{textAlign:"left"}}>email id</p>
            <input style={{border:"1px solid white",borderRadius:"10px",fontSize:"20px"}} type='email' placeholder='example.google.com'   onChange={(event)=>{updateEmail(event.target.value)}}/>
            <br/>
            <p style={{textAlign:"left"}}>password</p>
            <input style={{border:"1px solid white",borderRadius:"10px",fontSize:"20px"}} type='password' placeholder='password'   onChange={(event)=>updatePassword(event.target.value)}/>
            <br/>
            <button style={{backgroundColor:"white",color:"black",borderRadius:"10px",padding:"5px",margin:"10px",fontWeight:"500"}} onClick={(event)=>{CheckFormData(event)}}>Login</button>
            <br/>
            <p style={{color:"red"}}>{errorMessage}</p>
            <div>or use <img className='btn' width="100px" src={GoogleIcon}/></div>
        </form>
    </div>
  )
}

export default Login
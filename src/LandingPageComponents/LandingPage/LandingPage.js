import React from 'react'
import Logo from './assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();
    const styleSheet = {
        "topElement":{display:"flex",alignItems:"center",justifyContent:"space-around",backgroundColor:"#ebe6d8",flexWrap:"wrap"},
        "bannerDesign":{display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"sans-serif",fontSize:"20px"},
        "credentialsTab":{display:"flex",alignItems:"center",justifyContent:"space-around",padding:"10px"},
        "loginButton":{backgroundColor:"black",color:"white",borderRadius:"10px",padding:"5px",marginRight:"10px"},
        "signUpButton":{backgroundColor:"white",border:"1px solid black",borderRadius:"10px",padding:"5px"}
    }
  return (
    <div style={{width:"100vw"}}>
        <div style={styleSheet.topElement}>
            <img style={{width:"80px"}} className='btn' src={Logo} onClick={()=>{navigate('/')}}/>
            <div style={styleSheet.bannerDesign}>
                <p style={{color:"black"}}>watch your favourate movies now!</p>
            </div>
            <div style={styleSheet.credentialsTab}>
                <div className='btn' style={styleSheet.loginButton}  onClick={()=>navigate('./login')}>Login</div>
                <div className='btn' style={styleSheet.signUpButton} onClick={()=>navigate('./signUp')}>SignUp</div>
            </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <Outlet/>
        </div>
    </div>
  )
}

export default LandingPage
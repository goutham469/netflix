import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Logo from './assets/logo.png'
import Profile from './assets/profile.png'

function UserLandingPage() {
    const navigate = useNavigate();
    const styleSheet = {
        "topElement":{display:"flex",alignItems:"center",justifyContent:"space-around",backgroundColor:"#ebe6d8",flexWrap:"wrap"},
        "bannerDesign":{display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"sans-serif",fontSize:"20px"}
    }
  return (
    <div>
        <div style={styleSheet.topElement}>
            <img style={{width:"80px"}} className='btn' src={Logo} onClick={()=>{navigate('./')}}/>
            <div style={styleSheet.bannerDesign}>
                upto 10% discount on Certifications,Apply now.
            </div>
            <div style={styleSheet.credentialsTab}>
                <img className='btn' style={{width:"60px"}} src={Profile}    onClick={()=>{navigate('./profile')}}/>
            </div>
        </div>
        <div style={{backgroundColor:"black"}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default UserLandingPage
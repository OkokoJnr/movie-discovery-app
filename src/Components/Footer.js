import React from 'react'

function Footer() {
  return (
    <div style={{alignItems:"center"}}>
        <div style={{display:"flex", justifyContent:"center", alignContent:"space-between", alignItems:"center"}}>
            <i class="fa-brands fa-facebook fa-2xl footer" ></i>
            <i class="fa-brands fa-square-twitter fa-2xl footer"></i>
            <i class="fa-brands fa-square-instagram fa-2xl footer"></i>
            <i class="fa-brands fa-youtube fa-2xl footer"></i>
        </div>
        <div style={{display:"flex", justifyContent:"center", alignContent:"space-between", alignItems:"center"}}>
            <span className='footer'>Conditions of Use</span>
            <span className='footer'>Privacy Policy</span>
            <span className='footer'>Press Room</span>
        </div>
        <p style={{display:"flex", justifyContent:"center", alignContent:"space-between", alignItems:"center"}}>&copy; 2023 MovieBox by Okoko Godwin-Jnr</p>
    </div>
  )
}

export default Footer
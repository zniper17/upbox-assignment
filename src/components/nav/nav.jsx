import React from 'react'
import "./nav.css"
import topIMG from "../../assets/TOPBAR1.png"
import logobox from '../../assets/blackBox.png'


const nav = () => {
 
  const navtools=["THISMONTH","SKIN","HAIR","BATH","SALE"]

  return (
    <div className='nav'>
    <div className='container'>
<img src={topIMG} width="100%" alt='rainbowBox'></img>
<div className='nav-box'>
  <div className='logo'>
    <img src={logobox} alt="logoUPBOX"></img>
  </div>
  <div className='brand-name'>
    <h2>UPBOX</h2>
  </div>
  <div className='nav-option'>
   {
     navtools.map(item => {
       return <a href="/">{item}</a>
     })
   }
  </div>
  <button className='btn nav-btn'> LOG IN > </button>

</div>
</div>
    </div>
  )
}

export default nav
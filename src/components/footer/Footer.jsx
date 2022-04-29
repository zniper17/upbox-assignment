import React from 'react'
import "./footer.css"
import logoImg from "../../assets/logo-footer.png"
import ig from "../../assets/ig.png"
import  fb from  "../../assets/fb.png" 
import  sc from  "../../assets/sc.png" 
import  tw from  "../../assets/tw.png" 

const  Footer = () => {
    const socailsLogos=[ig,fb,sc,tw]
    const Upbox=["Upbox Bag","Upbox Box Platinum","Upbox Box VIP","Deals,Seasonal Items","Upbox Promise"]
    const findUsOn=["Instagram","Facebook","TikTok","SnapChat","Twitter"];
    const Product =["Get the App","Loyalty Program","Affiliates","Press"];
    const help=["Returns","FAQ","Contact","Community","Videos"]
  return (
    <div className='container'>
        <div className='container-footer'>
     <div className='footer-head'>
    <img className='footer-logo' src={logoImg} alt="logo"></img>
    <div className='socials-logos'> 
     {
         socailsLogos.map(logos => {
             return <img src={logos} alt="logos"></img>
         })
     }  
     </div>
     </div>
     <div className='footer-list'>
     <div className='list-headings'>
      <h3>Upbox</h3>
      <ul>
          {
              Upbox.map(items =>{
                  return <li className='footer-list'>{items}</li>
              })
          }
      </ul>
      </div>
      <div className='list-headings'>

      <h3>Find Us On</h3>
      <ul>
          {
              findUsOn.map(items =>{
                  return <li className='footer-list'>{items}</li>
              })
          }
      </ul>
      </div>
      <div className='list-headings'>
      <h3>Product</h3>
      <ul>
          {
              Product.map(items =>{
                  return <li className='footer-list'>{items}</li>
              })
          }
      </ul>
      </div>
      <div className='list-headings'>
      <h3>Help</h3>
      <ul>
          {
              help.map(items =>{
                  return <li className='footer-list'>{items}</li>
              })
          }
      </ul>
      </div>
     </div>
     <div className='footer-note'>
         <footer>
         © 2020 Quest AI. Upbox is a Sample Project and open source design project free for personal and commercial use.
         <div className='footer-a-links'>
         <a href='../'>Terms</a>
         <a href='../'>Privacy Policy</a>
         
</div>
         </footer>
     </div>

   
</div>
        </div>
    
  )
}

export default  Footer
import React from 'react'
import "./intro.css"
import box1 from "../../assets/box1.png"


const Intro = () => {
  return (
    <div className='intro'>
    <div className='container container-intro'>
  <div className='right-intro'>
<h1>Look good without <br></br>
leaving your house.</h1>
<div className="para">
Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.

</div>
<button className='btn'>SIGN UP > </button>
   </div>
   <div className='left-intro'>
<img src={box1} alt="gift box"></img>
   </div>


    </div>
    
    </div>
  )
}

export default Intro
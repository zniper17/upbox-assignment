import React from 'react'
import "./works.css"
import line from "../../assets/underline.png"
import pic1 from "../../assets/picture1.png"
import pic2 from "../../assets/picture2.png"
import pic3 from "../../assets/picture3.png"
 
const Works = () => {
  return (
    <div>
        <div className='container container-works'>
          <h1>How it works?</h1>
        <img src={line} alt="line"></img>
        <div className='work-detail-1'>
        <h1 className='num num1'>1</h1>
          <img src={pic1}  className="pic1" alt='phone'></img>
          <div className='title-para'>
          
          <h2 className='work-title'>Setup your profile & <br></br>preferences</h2>
          <p>Once you create an account, you can start  to tell us your likes and dislikes so we can tailor the experience just for you.</p>
</div>
        </div>
        <div className='work-detail-2'>
        <h1 className='num num2'>2</h1>
          <img src={pic2} className="pic2" alt='phone'></img>
          <h2>Review your 
custom box</h2>
          <p>Once we get to know you, we will show you the box we’ve crafted. This is your chance <br></br> to approve it before we ship it to your house.</p>

        </div>
        <div className='work-detail-3'>
        <h1 className='num num3'>3</h1>
          <img src={pic3} className="pic3" alt='phone'></img>
          <h2>Try it on at home</h2>
          <p>Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.</p>

        </div>
        <div className='button-works'>
        <button className='btn works-button'>TRY IT FOR YOURSELF ></button>
        
        </div>
        </div>
    </div>
  )
}

export default Works
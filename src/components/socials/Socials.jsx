import React from 'react'
import "./socials.css"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"

const Socials = () => {
    const data=[{
            img:img1,
            text:"How to rock the lip look that turns heads"
    },{
        img:img2,
            text:"Find the perfect shade for the season"
    },{
        img:img3,
        text:"The 5 eye shadow secrets you never knew"
    },{
        img:img4    ,
        text:"The pro-tips for at home hair dying"
    }]
  return (
    <div className='socails'>
    <div className='container container-socials'>
     <h1>Social Posts</h1>
<div className='posts'>
    {
        data.map(item => {
            return <div className='posts-items'>
                <img src={item.img} alt="img"></img>
                <p className='post-text'>{item.text}</p>
            </div>
        })
    }
</div>
<div className='socials-btn'>
<button className='btn'>FOLLOW US ON INSTAGRAM</button>
</div>
    </div>

    </div>
  )
}

export default Socials
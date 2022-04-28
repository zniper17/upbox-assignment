import React from 'react'
import "./plan.css"
import underline from "../../assets/underline.png"
const Plan = () => {
  return (
    <div className='plan'>
        <div className='container container-plan'>
          <h1>Pick your plan</h1>
          <img src={underline} alt="underline"></img>
          <div className='plans'>
              <div className='plan-box blue-box'>
                  <h2>Monthly</h2>
                  <h1>$18/mo</h1>
                  <button className='btn plan-btn'>FIND YOUR BOX</button>
          </div>

          <div className='plan-box pink-box'>
                  <h2>Yearly</h2>
                  <h1>$15/mo</h1>
                  <button className='btn plan-btn'>FIND YOUR BOX</button>
          </div>

      
        </div>
        <p>Your plan auto-renews at the end of 30 days from the 1st day you signed-up.</p>
    </div>
    </div>
  )
}

export default Plan
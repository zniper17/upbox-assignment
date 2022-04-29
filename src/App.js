import React from 'react'
import Nav from './components/nav/Nav.jsx'
import Intro from './components/intro/Intro.jsx'
import Plan from './components/plan/Plan.jsx'
import Works from './components/works/Works.jsx'
import Socials from './components/socials/Socials.jsx'
import Footer from './components/footer/Footer.jsx'
import "./App.css"

const App = () => {
  return (
    <div>
<Nav />
<Intro />
<Plan />
<Works />
<Socials />
<Footer />

    </div>
  )
}

export default App
import React from 'react'
import Testimonial from '../../Components/TestimonialPage/Testimonial'
import AboutPage from '../../Components/AboutPage/AboutPage'
import Multi from '../../Components/MultiPage/Multi'
import TeamPlayer from '../../Components/TeamPlayer/TeamPlayer'
import OpenAccount from '../../Components/OpenAccountPage/OpenAccount'
import FooterPage from '../../Components/FooterPage/FooterPage'
// import Testimonial from '../../Components/Testimonial';
import HeaderComponent from "../../Components/HeaderComponent.jsx";



const AboutUs = () => {

    <div>
      <HeaderComponent isAboutPage={true} />
      <p>This is the About Page content.</p>
    </div>
  
  return (
    <div>
        <AboutPage/>
        <Multi/>
        <TeamPlayer/>
        <Testimonial page="about" titleColor="#223323"/>
        <OpenAccount/>
        <FooterPage/>
    </div>
  )
}

export default AboutUs
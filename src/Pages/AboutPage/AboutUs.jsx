import React from 'react'
import Testimonial from '../../Components/TestimonialPage/Testimonial'
import TeamPage from '../../Components/TeamPage/TeamPage'
import AboutPage from '../../Components/AboutPage/AboutPage'
import AboutSection from '../../Components/AboutSection'
import Multi from '../../Components/MultiPage/Multi'
import TeamPlayer from '../../Components/TeamPlayer/TeamPlayer'
import OpenAccount from '../../Components/OpenAccountPage/OpenAccount'
import FooterPage from '../../Components/FooterPage/FooterPage'


const AboutUs = () => {
  return (
    <div>
        {/* <AboutSection/> */}
        {/* <HeroAbout/> */}
        <AboutPage/>
        <Multi/>
        <TeamPlayer/>
        <Testimonial/>
        <OpenAccount/>
        <FooterPage/>
    </div>
  )
}

export default AboutUs
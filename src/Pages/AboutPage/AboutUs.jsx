import React from 'react'
import Testimonial from '../../Components/TestimonialPage/Testimonial'
import TeamPage from '../../Components/TeamPage/TeamPage'
import AboutPage from '../../Components/AboutPage/AboutPage'
import AboutSection from '../../Components/AboutSection'
import Multi from '../../Components/MultiPage/Multi'
import TeamPlayer from '../../Components/TeamPlayer/TeamPlayer'

const AboutUs = () => {
  return (
    <div>
        {/* <AboutSection/> */}
        {/* <HeroAbout/> */}
        <AboutPage/>
        <Multi/>
        {/* <TeamPage/> */}
        <TeamPlayer/>
        <Testimonial/>
    </div>
  )
}

export default AboutUs
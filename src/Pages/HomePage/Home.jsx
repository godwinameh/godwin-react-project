import React from 'react'
import HeroSection from '../../Components/HeroPage/HeroSection'
import BankWithUs from '../../Components/BankWithUs/BankWithUs'
import OurService from '../../Components/OurService/OurService'
import ChooseService from '../../Components/ChooseServicePage/ChooseService'
import OurPartners from '../../Components/OurPartner/OurPartner'
import NewsFeed from '../../Components/NewsFeedPage/NewsFeed'
import Offers from '../../Components/Offerpage/Offers'
import BusinessPage from '../../Components/BusinessPage/BusinssPage'
import Testimonial from '../../Components/TestimonialPage/Testimonial'
import OpenAccount from '../../Components/OpenAccountPage/OpenAccount'
import FooterPage from '../../Components/FooterPage/FooterPage'
import PartFooter from '../../Components/PartFooter/PartFooter'
import TeamPage from '../../Components/TeamPage/TeamPage'
import BankFeatures from '../../Components/BankFeatures'
// import Testimonial from '../../Components/Testimonial';


const Home = () => {

  return (
    <div>
      {/* <BankFeatures/> */}
      <HeroSection/>
      <OurService/>
      <BankWithUs/>
      <ChooseService/>
      <OurPartners/>
      <Offers/>
      <NewsFeed/>
      <BusinessPage/>
      <Testimonial page="Home" titleColor="#11C170"/>
      <OpenAccount/>
      <FooterPage/>
      {/* <PartFooter/> */}
    </div>
  )
}

export default Home
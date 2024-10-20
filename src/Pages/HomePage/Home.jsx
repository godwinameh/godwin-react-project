import React from 'react'
import HeroSection from '../../Components/HeroPage/HeroSection'
import OurService from '../../Components/OurService/OurService'
import ChooseService from '../../Components/ChooseServicePage/ChooseService'
import OurPartners from '../../Components/OurPartner/OurPartner'
import NewsFeed from '../../Components/NewsFeedPage/NewsFeed'
import Offers from '../../Components/Offerpage/Offers'
import BusinessPage from '../../Components/BusinessPage/BusinssPage'
import Testimonial from '../../Components/TestimonialPage/Testimonial'
import OpenAccount from '../../Components/OpenAccountPage/OpenAccount'
import FooterPage from '../../Components/FooterPage/FooterPage'
import MobileBanking from '../../Components/MobilingBanking/MobileBanking'


const Home = () => {

  return (
    <div>
      <HeroSection/>
      <OurService/>
      <MobileBanking/>
      <ChooseService/>
      <OurPartners/>
      <Offers/>
      <NewsFeed/>
      <BusinessPage/>
      <Testimonial page="Home" titleColor="#11C170"/>
      <OpenAccount/>
      <FooterPage/>
    </div>
  )
}

export default Home
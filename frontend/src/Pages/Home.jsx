import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import Ourpolicy from '../Components/Ourpolicy'
import NewsletterBox from '../Components/NewsletterBox'

const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <BestSeller/>
        <Ourpolicy/>
        <NewsletterBox/>
    </div>
  )
}

export default Home
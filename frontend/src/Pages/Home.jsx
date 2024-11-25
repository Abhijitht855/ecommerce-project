import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import Bestseller from '../Components/Bestseller'
import Ourpolicy from '../Components/Ourpolicy'
import NewsletterBox from '../Components/NewsletterBox'

const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <Bestseller/>
        <Ourpolicy/>
        <NewsletterBox/>
    </div>
  )
}

export default Home
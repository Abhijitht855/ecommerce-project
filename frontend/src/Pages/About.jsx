import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nesciunt magni voluptatem tempora adipisci velit consectetur est sed, libero earum delectus, maxime, consequuntur nihil nostrum quae. Quae exercitationem error corporis minus pariatur eaque, doloremque at, saepe, eligendi sed tenetur fugiat. Nisi in error commodi placeat quibusdam vitae corrupti architecto ratione.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi labore voluptatibus est officiis nobis, sed veritatis minima earum quam, eveniet quae fuga, at odit amet hic voluptas dolore id voluptates perferendis quo.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta molestias ullam illo quaerat explicabo magnam, dolorem nisi neque nemo, eos eum tempore eveniet natus nesciunt blanditiis at obcaecati totam magni voluptatem quibusdam. Molestiae, soluta.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore facere, doloribus aliquid error ex autem minus minima facilis eius.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore facere, doloribus aliquid error ex autem minus minima facilis eius.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Services:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore facere, doloribus aliquid error ex autem minus minima facilis eius.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
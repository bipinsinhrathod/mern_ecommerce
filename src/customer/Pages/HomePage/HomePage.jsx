import React from 'react'
import MainCarousel from '../../Components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../Components/HomeSectionCarousal/HomeSectionCarousel'
import { MensKurta } from '../../../Data/MensKurta'

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div className='space-y-10 flex flex-col justify-center'>
        <HomeSectionCarousel data={MensKurta} section={"Men's Kurta"}/> 
        <HomeSectionCarousel data={MensKurta} section={"Men's Shoes"}/> 
        <HomeSectionCarousel data={MensKurta} section={"Men's Shirt"}/> 
        <HomeSectionCarousel data={MensKurta} section={"Women's Saree"}/> 
        <HomeSectionCarousel data={MensKurta} section={"Women's Dress"}/> 
      </div>
    </div>
  )
}

export default HomePage;

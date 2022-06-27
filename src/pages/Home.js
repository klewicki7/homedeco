import React from 'react'
import MyCarousel from '../components/carousel/Carousel';
import BelowNavbarWithIcons from '../components/belowNavbar/BelowNavbarWithIcons';
import Cards from '../components/cards/Cards';

export default function Home() {
  return (
    <div>
    <MyCarousel />
    <BelowNavbarWithIcons />
    <Cards/>
    </div>
  )
}

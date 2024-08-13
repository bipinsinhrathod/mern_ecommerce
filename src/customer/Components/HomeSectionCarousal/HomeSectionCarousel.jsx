import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
// import { Button } from '@headlessui/react';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import { MensKurta } from '../../../Data/MensKurta';
const HomeSectionCarousel = ({data,section}) => {

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items:5 },
    };

    const items=data.map((item)=><HomeSectionCard product={item}/>)
  return (
    <div className='px-4 border lg:px-8'>
    <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{section}</h2>
       <div className='relative p-5'>
       <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay 
        autoPlayInterval={1000}
        infinite
        responsive={responsive}
        // disableDotsControls
        // mouseTracking
        />

        {/* <Button>
          <KeyboardArrowLeftIcon/>
        </Button> */}
       </div>
    </div>
  )
}

export default HomeSectionCarousel

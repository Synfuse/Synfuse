import React from 'react'
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { Typography } from '@material-tailwind/react';
import WorldMapComponent  from '../worldmap.component/index';
import TimeLineComponent from '../TimeLineComponent/index';
import AboutUs from '../aboutus.page';


const SynFuseHome = () => {
  return (
    <>
      <div>

        <WorldMapComponent />
      </div>
      <div className='' id='whysynfuse'>

      </div>
      <div>
        <AboutUs />
      </div>
      <div className='overflow-hidden'>
        <TimeLineComponent />
      </div>
    </>
  )
}

export default SynFuseHome

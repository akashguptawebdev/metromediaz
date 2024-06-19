import React, { useContext, useEffect } from 'react'
import "./DayNight.css"
import { context } from '../../main';
import { HeroAssets } from '../../assets/AssetsProvider';
const DayNight = () => {

  const { toggle, setToggle } = useContext(context);

  useEffect(()=>{

  }, [toggle])

  return (
    <>
 
  <div className="dayNight flex justify-center items-center"  onClick={()=> setToggle(!toggle)}>
    {toggle ? (<img src={HeroAssets.dayMode} className='w-8 ' alt="DayMode"></img>):(<img src={HeroAssets.nightMode} className='w-8 rounded-full  bg-white ' alt='NightMode'></img>)}
  </div>
</>

  )
}

export default DayNight
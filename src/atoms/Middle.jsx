import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';

function Middle() {
  const data = useSelector((state) => state.weatherReducer.data);

  return (

    <>
      {
        data.message === 'city not found' ? '' :
          <div
            className='sm:mb-10 md:mb-4 lg:mb-4 w-full h-auto relative sm:top-12 md:bottom-2 lg:bottom-2 grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-6 '>
            <div className='col-span-2'>

              <Card text={"Visibility"} data={`${data.length !== 0 && data.visibility / 1000}`} />
            </div>
            <div className='col-span-2'>
              <Card text={"Wind speed"} data={data.length !== 0 && data.wind.speed} />
            </div>
            <div className='col-span-2'>
              <Card text={"Timezone"} data={data.length !== 0 && data.timezone / 1000} />
            </div>
            <div className='col-span-2'>
              <Card text={"Humidity"} data={data.length !== 0 && data.main.humidity} />
            </div>
            <div className='col-span-2'>
              <Card text={"Pressure"} data={data.length !== 0 && data.main.pressure} />
            </div>
            <div className='col-span-2'>
              <Card text={"Country cod"} data={data.length !== 0 && data.sys.country} />
            </div>
          </div>
      }
    </>

  )
}

export default Middle

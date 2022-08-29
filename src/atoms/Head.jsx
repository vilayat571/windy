import React from 'react'
import { useSelector } from 'react-redux';

function Head() {

    const data = useSelector((state) => state.weatherReducer.data);

    const isKelvin = useSelector((state) => state.changeDegreReducer.isKelvin);

    const degree = data.message==='city not found' ? '' : data.length !== 0 && Math.trunc((data.main.feels_like - 273));

    const name = data.message==='city not found' ? '' : data.length !== 0 && data.name;

    var today = new Date();

    var dd = String(today.getDate()).padStart(2, '0');

    var mm = String(today.getMonth() + 1).padStart(2, '0');

    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    const desc = data.message==='city not found' ? '' : data.length !== 0 && data.weather[0].description;

    const d = new Date();

    let hour = d.getHours() + ':' + d.getMinutes();

    return (
        <>
        { data.message==='city not found' ? '' :
            <div className='h-auto relative bottom-12'>
            <h1 className='text-[80px] leading-tight font-extralight '>
                {
                    isKelvin ? data.length !== 0 && Math.trunc(data.main.feels_like) : degree
                }
                °<sup className=' leading-tight font-extralight ml-2'>
                    {
                        isKelvin ? "K" : "C"
                    }
                </sup>
            </h1>
            <div className=' mt-4 flex justify-between items-center'>
                <span className=' text-xl'>
                    {name}
                </span>
                <span className='  '>{today}</span>
            </div>
            <hr className='mt-2 w-60  mb-2 ' />
            <div className=' flex flex-col justify-between items-start'>
                <span className='  capitalize'>
                    <i className="fa fa-thermometer-half mr-2" aria-hidden="true"></i>
                    {desc}
                </span>

                <span className='   capitalize mt-2'>
                    <i className="far fa-clock mr-2 "></i>
                    {hour}</span>
            </div>
        </div>
        }
        </>
    )
}

export default Head;
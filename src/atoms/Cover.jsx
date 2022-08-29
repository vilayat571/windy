import React from 'react'
import { useSelector } from 'react-redux';

function Cover() {
    const data = useSelector((state) => state.weatherReducer.data);
    const degree =data.message==='city not found' ? '' : data.length !== 0 && Math.trunc((data.main.feels_like - 273));
    return (
        <div className='relative bottom-4'>
            {
               data.message==='city not found' ? '' : degree > 30 ? <img className='w-56' src="https://play-lh.googleusercontent.com/mS-T0HGa0j9zx645Im-UaaXg0mMeBtoGrE-xx8hvJEMNj1XnICHa3ZDAIufm3A-dhvk" alt="this is the city weater suny" /> :
                    <img className='w-56' src="https://freepngimg.com/thumb/artwork/88591-animation-leaf-cloud-rain-area-free-download-png-hq.png" alt="this is the city weater rainy" />
            }
        </div>
    )
}

export default Cover

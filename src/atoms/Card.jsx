import React from 'react'
import { useSelector } from 'react-redux';

function Card({ text, data }) {
    const isDark = useSelector((state) => state.changeStatusReduer.isDark);
    return (
        <div className={isDark ?
            'flex flex-col text-white shadow-lg bg-[#161616] h-full rounded-3xl justify-between  text-center ' :
            'flex flex-col text-black bg-white justify-between shadow-lg h-full rounded-3xl  text-center '}>
            <h1 className='capitalize text-left px-6 py-4 '>{text}</h1>
            <span className='text-[60px] h-40 flex justify-center items-start py-4 ' >{data}</span>
        </div>
    )
}

export default Card;
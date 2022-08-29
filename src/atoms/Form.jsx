import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getPrognos } from '../redux/weatherReducer';

function Form() {

    const dispatch = useDispatch();
    const [query, setQuery] = useState(' Baku');
    const handleChange = (e) => {
        setQuery(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getPrognos(query));
        setQuery('')

    };
    useEffect(()=>{
        dispatch(getPrognos())
    },[dispatch])
  
    return (
        <form onSubmit={(e) => handleSubmit(e)} className='flex justify-center items-center w-11/12'>
            <i className="fas fa-search relative left-8 text-[#474747]  font-light"></i>
            <input
                className='w-full capitalize bg-[#f3f4f6] outline-none border-none text-[#474747] h-10 rounded-2xl px-4 indent-8 '
                type="text"
                placeholder='Search for place'
                value={query}
                onChange={(e) => handleChange(e)}
            />
            <i className="fas fa-location text-[#474747] text-lg relative right-8"></i>
        </form>
    )
}

export default Form;
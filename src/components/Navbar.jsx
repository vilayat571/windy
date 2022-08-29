import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../atoms/Logo'
import { changeDegree } from '../redux/changeDegreReducer';
import { changeStatus } from '../redux/changeStatusReduer';

function Navbar() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.changeStatusReduer.isDark);

  const handleClick = () => {
    dispatch(changeStatus(isDark));
  };

  const changetoKelvin = () => {
    dispatch(changeDegree(false));
  };

  const changetoSelsi = () => {
    dispatch(changeDegree(true));
  };

  return (
    <div className='flex w-full justify-between items-center'>
      <Logo />
      <div className='flex w-56 justify-between items-center text-sm'>
        <button onClick={() => changetoKelvin()}
          className={isDark ? ' px-3 py-2 rounded-full shadow bg-white text-black  '
            : ' px-3 py-2 rounded-full shadow bg-black text-white  '}>C °</button>
        <button onClick={() => changetoSelsi()}
          className={isDark ? ' px-3 py-2 rounded-full shadow-3xl bg-[#161616] text-white  '
            : 'px-3 py-2 rounded-full shadow-md bg-[#fcfcfc] text-black   '}>K °</button>
        <button onClick={() => handleClick()} className={isDark ? "far fa-sun text-xl" : "far fa-moon text-xl"}>

        </button>
        <i className="fa fa-cog text-xl" aria-hidden="true"></i>

      </div>
    </div>
  )
}

export default Navbar

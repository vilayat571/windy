import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../atoms/Logo'
import Tbutton from './Tbutton'
import { changeDegree } from '../redux/changeDegreReducer';
import { changeStatus } from '../redux/changeStatusReduer';

function Navbar() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.changeStatusReduer.isDark);
  const isKelvin = useSelector((state) => state.changeDegreReducer.isKelvin);

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
      
        <Tbutton isKelvin={isKelvin} isDark={isDark} changetoKelvin={changetoKelvin} degree="C" />
        <Tbutton isKelvin={isKelvin} isDark={isDark} changetoKelvin={changetoSelsi} degree="K" />
        <button onClick={() => handleClick()} className={isDark ? "far fa-sun text-xl" : "far fa-moon text-xl"}>

        </button>
        <i className="fa fa-cog text-xl" aria-hidden="true"></i>

      </div>
    </div>
  )
}

export default React.memo(Navbar)

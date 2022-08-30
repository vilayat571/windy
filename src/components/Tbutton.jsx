import React from 'react'


function Tbutton({isKelvin, isDark,changetoKelvin,degree}) {
    let style = "px-3 py-2 rounded-full shadow";
    if (isDark){
        if (isKelvin){
            if(degree === 'K'){
             style = style + ' bg-white text-black'
            }else{
                style = style + ' bg-black text-white'
            }
        }
        else{
            if(degree === 'C'){
                style = style + ' bg-white text-black'
               }else{
                   style = style + ' bg-black text-white'
               }
        }
    }
    else {
        if (isKelvin){
            if(degree === 'K'){
             style = style + ' bg-black text-white'
            }else{
                style = style + ' bg-white text-black'
            }
        }
        else{
            if(degree === 'C'){
                style = style + ' bg-black text-white'
               }else{
                   style = style + ' bg-white text-black'
               }
        }
    }

    return (
        

        <button  onClick={() => changetoKelvin()}
          className={style}>{degree} °</button>
    )
}

export default React.memo(Tbutton)
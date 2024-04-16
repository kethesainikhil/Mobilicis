import React from 'react'

const Card = (props) => {
    const{src,title} = props
  return (
    <div className=" flex-col items-center  justify-center flex mx-auto">
        <img className="" src={src} alt="TOKYO" />
        <p className= "text-black -ml-10 text-2xl">{title}</p>
    </div>
  )
}

export default Card
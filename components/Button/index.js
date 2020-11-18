import React from 'react'

const Button = (props) => {
    const {color, onClick, text, icon} = props;
    return(
      <button onClick={() => onClick()} className={`text-xs bg-${color}-500 rounded hover:bg-${color}-600 flex justify-center text-white font-semibold px-5 py-2`}>{icon ? icon : ''}&nbsp;{text}</button>
    )
}

export default Button
import React from 'react'

const Button = (props) => {
    const {color, onClick, text} = props;
    return(
      <button onclick={() => onclick()} className={`text-xs bg-${color}-500 rounded text-white font-semibold px-5 py-2`}>{text}</button>
    )
}

export default Button
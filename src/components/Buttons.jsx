import React from 'react'

function Button({children, className, onClick}) {
  return (
    <button onClick={onClick} className={`${className} 
      bg-light-grayish-cyan-filter py-1 px-3 
      font-big text-lg text-dark-cyan
      rounded-[5px] md:text-2xl md:py-2 md:px-4 lg:text-default
      lg:py-0 lg:px-3 lg:hover:text-white lg:hover:bg-dark-cyan`} 
    >
      {children}
    </button>
  )
}

export default Button
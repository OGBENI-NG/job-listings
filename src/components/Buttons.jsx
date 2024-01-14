import React from 'react'

function Button({children, className, onClick}) {
  return (
    <button onClick={onClick} className={`${className} 
      bg-light-grayish-cyan-filter py-1 px-3 
      font-big text-lg text-dark-cyan
      rounded-[5px]`} 
    >
      {children}
    </button>
  )
}

export default Button
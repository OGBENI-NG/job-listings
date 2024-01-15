import React from 'react'

function Header({bgHeaderDsk, bgHeaderMob}) {
  return (
    <header className='bg-dark-cyan relative z-0 md:h-64'>
      <img className='lg:hidden w-full h-full' src={bgHeaderMob} alt="bg-header-pic" />
      <img className='sm:hidden lg:block w-full h-full' src={bgHeaderDsk} alt="bg-header-pi" />
    </header>
  )
}

export default Header
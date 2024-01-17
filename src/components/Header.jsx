import React from 'react'

function Header({bgHeaderDsk, bgHeaderMob}) {
  return (
    <header className='bg-dark-cyan relative z-0 md:h-64 lg:h-40'>
      <img className='lg:hidden w-full h-full' src={bgHeaderMob} alt="bg-header-pic" />
      <img className='sm:hidden lg:block w-full h-full' src={bgHeaderDsk} alt="bg-header-pic" />
    </header>
  )
}

export default Header
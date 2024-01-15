import React from 'react'

function Header({bgHeaderDsk, bgHeaderMob}) {
  return (
    <header className='bg-dark-cyan relative z-0'>
      <img className='lg:hidden' src={bgHeaderMob} alt="bg-header-pic" />
      <img className='sm:hidden lg:block' src={bgHeaderDsk} alt="bg-header-pi" />
    </header>
  )
}

export default Header
import React from 'react'
import FilteredJobs from './FilteredJobs'


export default function Main({
    filterLanguage, removeIcon, handleDeleteLang, handleClearFilterJob,
    showFilterJob, filteredJobs, handleLanguageClick
  }) {

  return (
    <main className='p-5 md:p-12 lg:px-16 xl:px-40 lg:pt-3 xxl:px-44 transition'>
      {showFilterJob && 
        (<section 
          className={`bg-white p-4 md:p-8 flex gap-4 rounded-lg -mt-14 relative 
          z-[1] shadow-2xl shadow-box-shadow md:-mt-[5.5rem] lg:-mt-[3.4rem] lg:p-6 xl:px-8 xxl:px-10`}
        >
        <div className='flex flex-wrap gap-4 md:gap-6 lg:gap-4'>
          {filterLanguage.map((language) => (
            <div key={language} className='flex items-center'>
              <span className='font-big text-lg text-dark-cyan py-1 px-3
              bg-light-grayish-cyan-filter rounded-l-[5px] md:text-2xl md:py-2 md:px-4 lg:leading-none 
                lg:pt-3 lg:px-3 lg:text-default'
              >
                {language}
              </span>
              <div 
                onClick={() => handleDeleteLang(language)}
                className='bg-dark-cyan lg:hover:bg-very-dark-grayish-cyan 
                 p-[.69rem] rounded-r-[5px] md:p-[17px] lg:p-[10.6px] lg:cursor-pointer'>
                <img 
                  className='h-full w-full ' 
                  src={removeIcon} alt="remove-icon" 
                />
              </div>
            </div>
          ))}
        </div>
        <span
          onClick={() => handleClearFilterJob()} 
          className='ml-auto self-center font-big text-lg text-dark-grayish-cyan 
            md:text-3xl lg:text-xl lg:hover:underline lg:hover:text-dark-cyan lg:cursor-pointer'
        >Clear</span>
      </section>)}
      <section className='pt-4'>
        <FilteredJobs
          filteredJobs={filteredJobs}
          handleLanguageClick={handleLanguageClick}
        />
      </section>
    </main>
  )
}

import React from 'react'
import FilteredJobs from './FilteredJobs'


export default function Main({
    filterLanguage, removeIcon, handleDeleteLang, handleClearFilterJob,
    showFilterJob, filteredJobs, handleLanguageClick
  }) {

  return (
    <main className='p-5 md:p-12 transition'>
      {showFilterJob && 
        (<section 
          className={`bg-white p-4 flex gap-3 rounded-lg -mt-14 relative 
          z-[1] shadow-2xl shadow-box-shadow`}
        >
        <div className='flex flex-wrap gap-4'>
          {filterLanguage.map((language) => (
            <div key={language} className='flex items-center'>
              <span className='font-big text-lg text-dark-cyan py-1 px-3
              bg-light-grayish-cyan-filter rounded-l-[5px]'
              >
                {language}
              </span>
              <div 
                onClick={() => handleDeleteLang(language)}
                className='bg-dark-cyan p-[.69rem] rounded-r-[5px]'>
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
          className='ml-auto self-center font-big text-lg text-dark-grayish-cyan'
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

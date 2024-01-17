import React from 'react'
import Button from './Buttons'

export default function FilteredJobs({filteredJobs, handleLanguageClick}) {

  const jobsData = filteredJobs.map(item => (
    <div 
      key={item.id}
      className={` bg-white my-14 md:my-28 p-4 md:p-8  rounded-lg shadow-2xl
         shadow-box-shadow lg:p-6 lg:my-8 xl:px-8 xxl:px-10
        ${item.featured && item.new && "border-l-[5px] md:border-l-[8px] lg:border-l-[4px] border-dark-cyan"}`
      }
    >
      <div>
        <div className='lg:flex lg:items-center'>
          <div className='lg:flex lg:items-center lg:gap-6'>
            <div className='w-14 md:w-24 lg:w-16 -mt-11 md:-mt-20 lg:mt-0'>
              <img className='w-full h-full' src={item.logo} alt="logo" />
            </div>
            <div className='lg:flex lg:flex-col lg:items-left lg:gap-3'>
              <div className='flex items-center gap-4 py-3 md:py-5 lg:p-0'>
                <p className='font-big text-xl md:text-3xl lg:text-lg text-dark-cyan'>{item.company}</p>
                <div className='flex items-center gap-2 font-mdm md:text-xl lg:text-default lg:leading-none'>
                  <p className={`${item.new && "bg-dark-cyan px-2 pt-1 md:px-4 md:pt-[4px] lg:p-[4px] lg:px-2 lg:pt-[8px] rounded-full text-white"}`}>
                    {item.new ? "NEW!" : ""}</p>
                  <p className={`${item.featured && `bg-very-dark-grayish-cyan m-0 text-white px-2 lg:p-[4px]  lg:pt-[8px] lg:px-3
                    pt-1 md:px-4 md:pt-[5px]  rounded-full`}`}>
                    {item.featured ? "FEATURED" : ""}</p>
                </div>
              </div>
              <h1 className='lg:leading-none font-big text-lg md:text-2xl lg:text-lg
                 text-very-dark-grayish-cyan lg:hover:text-dark-cyan lg:cursor-pointer'>
                {item.position}
              </h1>
              <div className='py-2 md:py-5 text-lg md:text-2xl text-dark-grayish-cyan lg:p-0
                border-b-[1px] border-dark-grayish-cyan lg:border-none lg:text-default lg:leading-none '
              >
                <p>{`${item.postedAt} • ${item.contract} • ${item.location}`}</p>
              </div>
            </div>
          </div>
          <div className='pt-4 md:pt-8 flex items-center flex-wrap gap-4 md:gap-5 lg:p-0 lg:ml-auto
            lg:flex-nowrap lg:gap-4'>
            <Button 
              onClick={() => handleLanguageClick(item.role)}
            >
              {item.role}
            </Button>
            <Button 
              onClick={() => handleLanguageClick(item.level)}
            >
              {item.level}
            </Button>
            {item.languages.map(lang => (
              <Button 
                onClick={() => handleLanguageClick(lang)} 
                key={lang}
              >
                {lang}
              </Button>
            ))}
            {item.tools.map(tool => (
              <Button 
                onClick={() => handleLanguageClick(tool)}
                key={tool}
              >
                {tool}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))
  return (
    <div>
      {jobsData}
    </div>
  )
}

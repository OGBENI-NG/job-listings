import React from 'react'
import Button from './Buttons'

export default function FilteredJobs({filteredJobs, handleLanguageClick}) {

  const jobsData = filteredJobs.map(item => (
    <div 
      key={item.id}
      className={` bg-white my-14 p-4 rounded-lg shadow-2xl
         shadow-box-shadow
        ${item.featured && item.new && "border-l-[5px] md:border-l-[8px] border-dark-cyan"}`
      }
    >
      <div className='w-14 md:w-24 -mt-11'>
        <img className='w-full h-full' src={item.logo} alt="logo" />
      </div>
      <div>
        <div className='flex items-center gap-4 py-3 md:py-5'>
          <p className='font-big text-xl md:text-3xl text-dark-cyan'>{item.company}</p>
          <div className='flex items-center gap-2 font-mdm md:text-xl'>
            <p className={`${item.new && "bg-dark-cyan px-2 pt-1 md:px-4 md:pt-[4px] rounded-full text-white"}`}>
              {item.new ? "NEW!" : ""}</p>
            <p className={`${item.featured && `bg-very-dark-grayish-cyan text-white px-2
               pt-1 md:px-4 md:pt-[5px]  rounded-full`}`}>
              {item.featured ? "FEATURED" : ""}</p>
          </div>
        </div>
        <h1 className='font-big text-lg md:text-2xl text-very-dark-grayish-cyan'>{item.position}</h1>
        <div className='py-2 md:py-5 text-lg md:text-2xl text-dark-grayish-cyan 
          border-b-[1px] border-dark-grayish-cyan'
        >
          <p>{`${item.postedAt} • ${item.contract} • ${item.location}`}</p>
        </div>
        <div className='pt-4 flex items-center flex-wrap gap-4'>
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
  ))
  return (
    <div>
      {jobsData}
    </div>
  )
}

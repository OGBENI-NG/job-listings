import React from 'react'
import Button from './Buttons'

export default function Main({data, handleLanguageClick, filterLanguage, removeIcon, 
  handleDeleteLang, handleClearFilterJob}) {

  const jobsData = data.map(item => (
    <div 
      key={item.id}
      className={` bg-white my-12 p-4 rounded-lg shadow-md shadow-light-grayish-cyan-filter 
      ${item.featured && item.new && "border-l-[5px] border-dark-cyan"}`}
    >
      <div className='w-14 -mt-11'>
        <img className='w-full h-full' src={item.logo} alt="logo" />
      </div>
      <div>
        <div className='flex items-center gap-4 py-3'>
          <p className='font-big text-xl text-dark-cyan'>{item.company}</p>
          <div className='flex items-center gap-2 font-mdm'>
            <p className={`${item.new && "bg-dark-cyan px-2 pt-1 rounded-full text-white"}`}>
              {item.new ? "NEW!" : ""}</p>
            <p className={`${item.featured && "bg-very-dark-grayish-cyan text-white px-2 pt-1 rounded-full"}`}>
              {item.featured ? "FEATURED" : ""}</p>
          </div>
        </div>
        <h1 className='font-big text-lg text-very-dark-grayish-cyan'>{item.position}</h1>
        <div className='py-2 text-lg text-dark-grayish-cyan 
          border-b-[1px] border-very-dark-grayish-cyan'
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
    <main className='p-5'>
      <section className='bg-white p-4 flex gap-3 rounded-lg'>
        <div className='flex flex-wrap gap-5'>
          {filterLanguage.map((language) => (
            <div key={language} className='flex items-center'>
              <span className='font-big text-lg text-dark-cyan py-1 px-3
              bg-light-grayish-cyan-filter rounded-l-[5px]'
              >
                {language}
              </span>
              <div className='bg-dark-cyan p-[.69rem] rounded-r-[5px]'>
                <img 
                  onClick={() => handleDeleteLang(language)} 
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
      </section>
      <section>{jobsData}</section>
    </main>
  )
}

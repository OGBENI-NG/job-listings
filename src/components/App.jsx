import React, {useState} from 'react';
import data from '../../data';
import bgHeaderDsk from '../images/bg-header-desktop.svg';
import bgHeaderMob from '../images/bg-header-mobile.svg';
import removeIcon from '../images/icon-remove.svg';
import Header from './Header';
import Main from './JobListing';

export default function App() {

  const [showFilterJob, setShowFilterJob] = useState(false);
  const [filterLanguage, setFilterLanguage] = useState([]);

  // If there are selected languages, filter the jobs
  const filteredJobs = filterLanguage.length > 0
  ? data.filter((item) => {
      const filterJob = [...item.languages, ...item.tools, item.role, item.level];
      return filterLanguage.some((lang) => filterJob.includes(lang));
    })
  : data;

  const handleLanguageClick = (language) => {
    // Check if the language already exists in the filterLanguage array
    setShowFilterJob(true);
    if (!filterLanguage.includes(language)) {
      setFilterLanguage((prevFilterLang) => [...prevFilterLang, language]);
    }
   
  };
  
  function handleDeleteLang(language) {
    setFilterLanguage((prevFilterLang) => prevFilterLang.filter(lang => lang !== language));
    // Check if filterLanguage is empty after removing the language
    if (filterLanguage.length === 1) {
      setShowFilterJob(false);
    }
  }

  function handleClearFilterJob() {
    setFilterLanguage([]);
    setShowFilterJob(false);
  }

 
  
  return (
    <div className='bg-light-grayish-cyan-bg font-sans text-default'>
      <Header 
        bgHeaderDsk={bgHeaderDsk}
        bgHeaderMob={bgHeaderMob}
      />
      <Main
        data={data}
        handleLanguageClick={handleLanguageClick}
        filterLanguage={filterLanguage}
        removeIcon={removeIcon}
        handleDeleteLang={handleDeleteLang}
        handleClearFilterJob={handleClearFilterJob}
        showFilterJob={showFilterJob}
        filteredJobs={filteredJobs}
      />
    </div>
  )
}

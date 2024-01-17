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
  // This function filters the job data based on selected languages, tools, role, level.
  const filteredJobs = filterLanguage.length > 0
  ? data.filter((item) => {
      // Combine all relevant job information (languages, tools, role, level) into an array
      const filterJob = [...item.languages, ...item.tools, item.role, item.level];
      // Check if any selected language matches the job information
      return filterLanguage.some((lang) => filterJob.includes(lang));
    })
  : data;

  // This function handles the click event when a language is selected
  const handleLanguageClick = (language) => {
  // Check if the language already exists in the filterLanguage array
  setShowFilterJob(true);
    if (!filterLanguage.includes(language)) {
      // Add the selected language to the filterLanguage array
      setFilterLanguage((prevFilterLang) => [...prevFilterLang, language]);
    }
  };

  // This function handles the click event when a language is deleted
  function handleDeleteLang(language) {
    // Remove the selected language from the filterLanguage array
    setFilterLanguage((prevFilterLang) => prevFilterLang.filter(lang => lang !== language));
    // Check if filterLanguage is empty after removing the language
    if (filterLanguage.length === 1) {
      setShowFilterJob(false);
    }
  }

  // This function handles the click event to clear all selected filters
  function handleClearFilterJob() {
    // Clear all selected languages and hide the filter section
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

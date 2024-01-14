import React, {useState} from 'react'
import data from '../../data.json'
import bgHeaderDsk from '../images/bg-header-desktop.svg'
import bgHeaderMob from '../images/bg-header-mobile.svg'
import removeIcon from '../images/icon-remove.svg'
import Header from './Header'
import Main from './JobListing'

export default function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);
  const [filterLanguage, setFilterLanguage] = useState([]);

  const handleLanguageClick = (language) => {
    // Check if the language already exists in the filterLanguage array
    if (!filterLanguage.includes(language)) {
      setFilterLanguage((prevFilterLang) => [...prevFilterLang, language]);
    }
  };
  
  function handleDeleteLang(language) {
    setFilterLanguage((prevFilterLang) => prevFilterLang.filter(lang => lang !== language));
  }
  function handleClearFilterJob() {
    setFilterLanguage([])
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
      />
    </div>
  )
}

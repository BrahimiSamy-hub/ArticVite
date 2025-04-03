import { useState, useRef, useEffect } from 'react'
import Flag from 'react-world-flags'

const LanguageSelect = ({ changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState('EN')
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'en', name: 'EN', flag: 'GB' }, // United Kingdom for English
    { code: 'fr', name: 'FR', flag: 'FR' }, // France for French
    { code: 'ar', name: 'AR', flag: 'DZ' }, // Algeria for Arabic
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (code, name) => {
    changeLanguage(code)
    setSelectedLang(name)
    setIsOpen(false)
  }

  return (
    <div
      className='ms-4 justify-center items-center hidden lg_992:flex relative'
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center bg-transparent border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-red-500/50 focus:border-red-500 outline-none cursor-pointer'
      >
        <Flag
          code={languages.find((lang) => lang.name === selectedLang)?.flag}
          className='w-4 h-4 mr-2'
        />
        {selectedLang}
        <svg
          className={`ml-2 w-4 h-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {isOpen && (
        <div className='absolute top-full mt-1 right-0 z-10 w-full min-w-[100px] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-md shadow-lg'>
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleSelect(lang.code, lang.name)}
              className={`px-3 py-2 text-sm cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center ${
                selectedLang === lang.name
                  ? 'bg-red-500/10 text-red-500 dark:text-red-400'
                  : 'text-slate-900 dark:text-white'
              }`}
            >
              <Flag code={lang.flag} className='w-4 h-4 mr-2' />
              {lang.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelect

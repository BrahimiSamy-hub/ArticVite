import React from 'react'
import { Link } from 'react-router-dom'

import { feature } from '../data/data'
import { IconType } from 'react-icons'
import { useTranslation } from 'react-i18next'

export default function FeaturesOne() {
  type LanguageKeys = 'en' | 'fr' | 'ar'

  interface Feature {
    icon: IconType
    title: Record<LanguageKeys, string>
    desc: Record<LanguageKeys, string>
    active: boolean
  }
  const { i18n, t } = useTranslation()
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6'>
      {feature.map((item: Feature, index: number) => {
        let Icon = item.icon
        return (
          <div
            className={`p-6  transition duration-500 rounded-3xl group ${
              item.active
                ? 'shadow-sm dark:shadow-2xl hover:shadow-[#ae00ff]/25 dark:hover:shadow-[#FF3FFE]/15 border dark:border-gray-800/50'
                : 'shadow-2xl shadow-slate-50 dark:shadow-slate-800'
            }`}
            key={index}
          >
            <div className='size-16 bg-red-500/5 dark:text-[#ae00ff] text-[#ae00ff] rounded-2xl flex align-middle justify-center items-center shadow-sm'>
              <Icon className='size-7' />
            </div>

            <div className='content mt-7'>
              <Link
                to=''
                className='text-lg group-hover:text-[#0e2aff] dark:text-white dark:group-hover:text-[#02EAFF] transition-all duration-500 ease-in-out font-semibold'
              >
                {item.title?.[i18n.language as LanguageKeys]}
              </Link>
              <p className='text-slate-400 mt-3'>
                {item.desc?.[i18n.language as LanguageKeys]}
              </p>

              {/* <div className='mt-3'>
                <Link
                  to=''
                  className='hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500'
                >
                  Read More <i className='mdi mdi-arrow-right'></i>
                </Link>
              </div> */}
            </div>
          </div>
        )
      })}
    </div>
  )
}

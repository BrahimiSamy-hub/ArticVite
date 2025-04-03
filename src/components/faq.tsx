import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import faqImg from '../assets/images/phone/2.png'

import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss'

import CountUp from 'react-countup'

import { FiChevronUp, FiDownload } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

import { faq } from '../data/data'

type LanguageKeys = 'en' | 'fr' | 'ar'

interface FaqData {
  id: number
  title: Record<LanguageKeys, string>
  desc: Record<LanguageKeys, string>
}

export default function Faq() {
  let [isOpen, setOpen] = useState<boolean>(false)
  let [activeTab, setActiveTab] = useState<number>(1)
  const { i18n, t } = useTranslation()

  return (
    <div className='container relative'>
      <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]'>
        <div className='relative order-1 md:order-2'>
          <div className='relative'>
            <img
              src={faqImg}
              className='mx-auto md:max-w-xs lg:max-w-sm'
              alt=''
            />

            <div className='absolute top-24 md:end-14 -end-2 text-center'>
              <Link
                to='#!'
                onClick={() => setOpen(true)}
                className='lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-[#0e2aff] dark:bg-[#0e2aff]t'
              >
                <i className='mdi mdi-play inline-flex items-center justify-center text-2xl '></i>
              </Link>
            </div>
            <ModalVideo
              channel='youtube'
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen}
              videoId='S_CGed6E610'
              onClose={() => setOpen(false)}
            />
          </div>
          <div className='overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-[#02EAFF]/30 via-[#0e2aff]/35 from-[#ae00ff] bottom-1/2 translate-y-1/2 md:end-0 end-1/2 md:translate-x-0 translate-x-1/2 -z-1 shadow-md shadow-[#ff3ffe]/10 rounded-full'></div>

          <div className='absolute bottom-28 md:start-0 -start-5 p-4 rounded-lg shadow-md bg-white dark:bg-slate-900 w-52 m-3'>
            <div className='flex items-center'>
              <div className='flex items-center justify-center size-[65px] bg-red-500/5 text-[#0e2aff] dark:text-[#02EAFF]text-center rounded-full me-3'>
                <FiDownload className='size-6' />
              </div>
              <div className='flex-1'>
                <h6 className='text-slate-400'>Total Users</h6>
                <p className='text-xl font-bold'>
                  <CountUp className='counter-value' end={45485} />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='lg:me-8 order-2 md:order-1'>
          <h6 className=' uppercase text-sm dark:text-[#ae00ff] text-[#ae00ff] font-bold tracking-wider mb-3'>
            {t('faqs.faqs')}
          </h6>
          <h4 className='mb-6  md:text-3xl text-2xl md:leading-normal leading-normal font-bold'>
            {t('faqs.title')}
          </h4>
          <p className='text-slate-400  max-w-xl mx-auto'>
            {t('faqs.description')}
          </p>

          <div id='accordion-collapseone' className='mt-8'>
            {faq.map((item: FaqData, index: number) => {
              return (
                <div
                  className={`relative shadow dark:shadow-gray-800 rounded-md overflow-hidden ${
                    item.id !== 1 ? 'mt-3' : ''
                  }`}
                  key={index}
                >
                  <h2 className='font-semibold'>
                    <button
                      type='button'
                      onClick={() => setActiveTab(item.id)}
                      className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                        activeTab === item.id
                          ? 'bg-slate-50/50 dark:bg-slate-800/20 dark:text-[#02EAFF] text-[#0e2aff]'
                          : ''
                      }`}
                    >
                      <span>{item.title?.[i18n.language as LanguageKeys]}</span>
                      <FiChevronUp
                        className={`size-4 shrink-0 ${
                          activeTab === item.id ? '' : 'rotate-180'
                        }`}
                      />
                    </button>
                  </h2>
                  <div className={`${activeTab === item.id ? '' : 'hidden'}`}>
                    <div className='p-5'>
                      <p className='text-slate-400 dark:text-gray-400'>
                        {item.desc?.[i18n.language as LanguageKeys]}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* <div className='mt-6'>
            <Link
              to='#'
              className='hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500 font-medium'
            >
              Find Out More <i className='mdi mdi-arrow-right'></i>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import about from '../assets/images/phone/half-2.png'

export default function AboutTwo() {
  const { i18n, t } = useTranslation()
  return (
    <div className='grid md:grid-cols-12 grid-cols-1 items-center gap-6'>
      <div className='lg:col-span-5 md:col-span-6 md:order-2 order-1'>
        <div className='pt-6 px-6 rounded-2xl bg-red-500/5 dark:bg-red-500/10 shadow shadow-red-500/20'>
          <img src={about} alt='' />
        </div>
      </div>

      {/* <div className='lg:col-span-7 md:col-span-6 md:order-1 order-2'>
        <div className='lg:me-10'>
          <h6 className='dark:text-[#02EAFF] text-[#0e2aff] uppercase text-sm font-bold tracking-wider mb-3'>
            {t('howItWorks.title')}
          </h6>
          <h4 className='mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold'>
            {t('howItWorks.getStarted')}
          </h4>
          <p className='text-slate-400 max-w-xl'>
            {t('howItWorks.description')}
          </p>

          <ul className='list-none text-slate-400 mt-6'>
            {(t('howItWorks.steps', { returnObjects: true }) as string[]).map(
              (step: string, index: number) => (
                <li key={index} className='mb-1 flex'>
                  <span className='text-[#ae00ff] text-xl me-2'>
                    {index + 1}-
                  </span>
                  {step}
                </li>
              )
            )}
          </ul>

          <div className="mt-6">
                        <Link to="" className="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500 font-medium">Learn More <i className="mdi mdi-arrow-right align-middle"></i></Link>
                    </div>
        </div>
      </div> */}
    </div>
  )
}

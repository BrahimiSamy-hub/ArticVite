import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo2.png'
import {
  FiDribbble,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiShoppingCart,
  FiTwitter,
} from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className='py-8 bg-slate-800 dark:bg-gray-900'>
      <div className='container'>
        <div className='grid md:grid-cols-12 items-center'>
          <div className='md:col-span-3'>
            <Link to='#' className='logo-footer'>
              <img src={logo} className='md:ms-0 mx-auto' width={125} alt='' />
            </Link>
          </div>

          <div className='md:col-span-5 md:mt-0 mt-8'>
            <div className='text-center'>
              <p className='text-gray-400'>
                © {new Date().getFullYear()} Artic. Design & Develop with{' '}
                <i className='mdi mdi-heart text-red-700'></i> by{' '}
                <Link
                  to='https://pixeldz.store/'
                  target='_blank'
                  className='text-reset'
                >
                  Pixel
                </Link>
                .
              </p>
            </div>
          </div>

          <div className='md:col-span-4 md:mt-0 mt-8'>
            <ul className='list-none foot-icon ltr:md:text-right rtl:md:text-left text-center'>
              <li className='inline'>
                <Link
                  to='https://www.facebook.com/shreethemes'
                  target='_blank'
                  className='size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500'
                >
                  <FiFacebook
                    className='h-4 w-4 align-middle'
                    title='facebook'
                  />
                </Link>
              </li>

              <li className='inline'>
                <Link
                  to='https://www.instagram.com/shreethemes/'
                  target='_blank'
                  className='size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500'
                >
                  <FiInstagram className='h-4 w-4 align-middle' />
                </Link>
              </li>

              <li className='inline'>
                <Link
                  to='mailto:support@shreethemes.in'
                  className='size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500'
                >
                  <FiMail className='h-4 w-4 align-middle' title='email' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

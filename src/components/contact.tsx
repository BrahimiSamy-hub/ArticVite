import React, { useState } from 'react'
import axios from 'axios'
import contact from '../assets/images/contact.svg'
import { useTranslation } from 'react-i18next'
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    comments: '',
  })

  const { i18n, t } = useTranslation()

  const [status, setStatus] = useState('')

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<any>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle form submission
  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault()
    setStatus(t('contactUs.sending'))

    try {
      const response = await axios.post(
        'https://getform.io/f/bdrnxzwb',
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      console.log(response.data)

      if (response.status === 200) {
        setStatus(t('contactUs.messageSent'))
        setFormData({ name: '', email: '', subject: '', comments: '' })
      } else {
        setStatus(t('contactUs.messageError'))
      }
    } catch (error) {
      setStatus(t('contactUs.messageError'))
      console.error(error)
    }
  }

  return (
    <div className='container relative'>
      <div className='grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]'>
        <div className='lg:col-span-7 md:col-span-6'>
          <img src={contact} alt='' />
        </div>

        <div className='lg:col-span-5 md:col-span-6'>
          <div className='lg:ms-5'>
            <div className='bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6'>
              <h6 className='text-[#ae00ff] uppercase text-sm font-bold tracking-wider mb-3'>
                {t('contactUs.contactUs')}
              </h6>
              <h4 className='mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold'>
                {t('contactUs.getInTouch')}
              </h4>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className='grid lg:grid-cols-12 gap-3'>
                  <div className='lg:col-span-6'>
                    <div className='text-start'>
                      <label htmlFor='name' className='font-medium'>
                        {t('contactUs.yourName')}
                      </label>
                      <input
                        name='name'
                        id='name'
                        type='text'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='form-input mt-1 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-[#ae00ff]  dark:border-gray-800 dark:focus:border-[#ae00ff]  focus:ring-0'
                        placeholder={t('contactUs.namePlaceholder')}
                      />
                    </div>
                  </div>

                  <div className='lg:col-span-6'>
                    <div className='text-start'>
                      <label htmlFor='email' className='font-medium'>
                        {t('contactUs.yourEmail')}
                      </label>
                      <input
                        name='email'
                        id='email'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='form-input mt-1 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-[#ae00ff]  dark:border-gray-800 dark:focus:border-[#ae00ff]  focus:ring-0'
                        placeholder={t('contactUs.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className='lg:col-span-12'>
                    <div className='text-start'>
                      <label htmlFor='subject' className='font-medium'>
                        {t('contactUs.yourQuestion')}
                      </label>
                      <input
                        name='subject'
                        id='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className='form-input mt-1 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-[#ae00ff] dark:border-gray-800 dark:focus:border-[#ae00ff]  focus:ring-0'
                        placeholder={t('contactUs.questionPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className='lg:col-span-12'>
                    <div className='text-start'>
                      <label htmlFor='comments' className='font-medium'>
                        {t('contactUs.yourComment')}
                      </label>
                      <textarea
                        name='comments'
                        id='comments'
                        value={formData.comments}
                        onChange={handleChange}
                        required
                        className='form-input mt-1 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-[#ae00ff]  dark:border-gray-800 dark:focus:border-[#ae00ff]  focus:ring-0'
                        placeholder={t('contactUs.commentPlaceholder')}
                      ></textarea>
                    </div>
                  </div>

                  <div className='lg:col-span-12'>
                    <button
                      type='submit'
                      className='py-2 px-5 tracking-wider inline-flex items-center justify-center font-medium rounded dark:bg-[#02EAFF] bg-[#0e2aff] hover:opacity-75 text-white'
                    >
                      {t('contactUs.sendMessage')}
                    </button>
                  </div>
                </div>
              </form>

              {/* Status Message */}
              {status && (
                <p className='mt-4 text-center text-sm font-medium'>{status}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

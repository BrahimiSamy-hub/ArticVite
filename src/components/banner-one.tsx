// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// import CountUp from 'react-countup'
// import SplitText from './SplitText'
// import client1 from '../assets/images/client/01.jpg'
// import client2 from '../assets/images/client/02.jpg'
// import client3 from '../assets/images/client/03.jpg'
// import client4 from '../assets/images/client/04.jpg'
// import client5 from '../assets/images/client/05.jpg'

// import SVG from '../assets/svg/Artboard 2.svg'

// import phone1 from '../assets/images/phone/1.png'
// import phone2 from '../assets/images/phone/2.png'
// import phone3 from '../assets/images/phone/3.png'
// import phone4 from '../assets/images/phone/4.png'
// import phone5 from '../assets/images/phone/5.png'
// import phone6 from '../assets/images/phone/6.png'

// import TinySlider from 'tiny-slider-react'
// import 'tiny-slider/dist/tiny-slider.css'

// import ModalVideo from 'react-modal-video'
// import '../../node_modules/react-modal-video/scss/modal-video.scss'
// import { useTranslation } from 'react-i18next'
// import { FiDownload } from 'react-icons/fi'

// export default function BannerOne() {
//   const { t } = useTranslation()
//   let [isOpen, setOpen] = useState<boolean>(false)

//   let images = [phone1, phone2, phone3, phone4, phone5, phone6]

//   const settings = {
//     container: '.tiny-single-item',
//     items: 1,
//     controls: false,
//     mouseDrag: true,
//     loop: true,
//     rewind: true,
//     autoplay: true,
//     autoplayButtonOutput: false,
//     autoplayTimeout: 3000,
//     navPosition: 'bottom',
//     speed: 400,
//     gutter: 0,
//   }
//   const handleAnimationComplete = () => {
//     console.log('All letters have animated!')
//   }
//   return (
//     <section
//       className="relative overflow-hidden md:py-10 py-36 dark:bg-black -500/10 before:content-[''] before:absolute md:before:bottom-[30rem] sm:before:bottom-[35rem] xl:before:right-[5rem] lg:before:-right-[13rem] md:before:-right-[16rem] sm:before:-right-[15rem] before:w-[50rem] before:h-[25rem] max-md:before:h-[35rem] before:rotate-[100deg] before:bg-gradient-to-r before:to-transparent bg-gradient-to-tr before:via-[#0000FF]/25 before:from-[#AE00FF] before:z-1 2xl:before:right-[28rem]"
//       id='home'
//     >
//       <div className='container relative  z-1' style={{ userSelect: 'none' }}>
//         <div className='grid md:grid-cols-2 grid-cols-1 items-center mt-12 gap-[30px]'>
//           <div className='md:me-6'>
//             {/* <h4 className='font-bold lg:leading-normal leading-normal text-[42px] lg:text-[54px] mb-5'>
//               Same game... <br />
//               new rules
//             </h4> */}
//             <div className='relative '>
//               {/* <div
//                 className='absolute w-[300px] sm:w-[350px] md:w-[350px] lg:w-[400px] xl:w-[450px]
//   -top-20 -right-20 sm:right-0 md:left-44 lg:left-40 xl:left-64'
//                 // data-aos='zoom-in-up'
//                 // data-aos-duration='750'
//               >
//                 <img
//                   src={SVG}
//                   alt='Logo'
//                   draggable='false'
//                   className='-z-50 w-[1500px] animate-spin-slow opacity-50'
//                 />
//               </div> */}
//               <SplitText
//                 text={t('slogan1')}
//                 className='font-bold leading-[12px] text-[42px] lg:text-[54px]'
//                 delay={120}
//                 animationFrom={{
//                   opacity: 0,
//                   transform: 'translate3d(0,50px,0)',
//                 }}
//                 animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
//                 easing='easeOutCubic'
//                 threshold={0.2}
//                 rootMargin='-50px'
//                 onLetterAnimationComplete={handleAnimationComplete}
//               />
//               <br />
//               <SplitText
//                 text={t('slogan2')}
//                 className='font-bold leading-[56px] text-[42px] lg:text-[54px]'
//                 delay={150}
//                 animationFrom={{
//                   opacity: 0,
//                   transform: 'translate3d(0,50px,0)',
//                 }}
//                 animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
//                 easing='easeOutCubic'
//                 threshold={0.2}
//                 rootMargin='-50px'
//                 onLetterAnimationComplete={handleAnimationComplete}
//               />
//             </div>

//             <p className='text-slate-400 mt-5 text-lg max-w-xl'>
//               {t('mission.content')}
//             </p>

//             <div className='mt-6'>
//               <Link
//                 draggable='false'
//                 to=''
//                 onClick={() => setOpen(true)}
//                 className='py-2 px-5 tracking-wider inline-flex items-center justify-center font-medium rounded bg-[#FF3FFE]/50 hover:bg-[#02EAFF] transition-colors duration-300 text-white'
//               >
//                 <i className='mdi mdi-play inline-flex items-center justify-center text-2xl mr-2' />
//                 Watch
//               </Link>
//             </div>

//             {/* <ul className='list-none flex items-center mt-6'>
//               <li className='inline-block'>
//                 <img
//                   src={client1}
//                   className='size-10 rounded-full border-[3px] border-white dark:border-slate-900 shadow dark:shadow-gray-500'
//                   alt=''
//                 />
//               </li>
//               <li className='inline-block relative -ms-4'>
//                 <img
//                   src={client2}
//                   className='size-10 rounded-full border-[3px] border-white dark:border-slate-900 shadow dark:shadow-gray-500'
//                   alt=''
//                 />
//               </li>
//               <li className='inline-block relative -ms-4'>
//                 <img
//                   src={client3}
//                   className='size-10 rounded-full border-[3px] border-white dark:border-slate-900 shadow dark:shadow-gray-500'
//                   alt=''
//                 />
//               </li>
//               <li className='inline-block relative -ms-4'>
//                 <img
//                   src={client4}
//                   className='size-10 rounded-full border-[3px] border-white dark:border-slate-900 shadow dark:shadow-gray-500'
//                   alt=''
//                 />
//               </li>
//               <li className='inline-block relative -ms-4'>
//                 <img
//                   src={client5}
//                   className='size-10 rounded-full border-[3px] border-white dark:border-slate-900 shadow dark:shadow-gray-500'
//                   alt=''
//                 />
//               </li>
//               <li className='inline-block ms-1 text-slate-400 font-medium'>
//                 <span className='text-slate-900 dark:text-white font-semibold'>
//                   <CountUp className='counter-value' end={45485} />+
//                 </span>{' '}
//                 Total app users
//               </li>
//             </ul> */}
//           </div>

//           <div
//             className='relative'
//             data-aos='zoom-in-up'
//             data-aos-duration='750'
//           >
//             <div className='mx-auto w-80'>
//               <div className='tiny-single-item'>
//                 <TinySlider settings={settings}>
//                   {images.map((item, index) => (
//                     <div className='tiny-slide' key={index}>
//                       <img src={item} alt='' />
//                     </div>
//                   ))}
//                 </TinySlider>
//               </div>
//             </div>

//             {/* <div className='absolute top-24 md:end-24 -end-2 text-center'>
//               <Link
//                 to='#!'
//                 onClick={() => setOpen(true)}
//                 className='lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-red-500'
//               >
//                 <i className='mdi mdi-play inline-flex items-center justify-center text-2xl'></i>
//               </Link>
//             </div> */}

//             <ModalVideo
//               channel='youtube'
//               youtube={{ mute: 0, autoplay: 0 }}
//               isOpen={isOpen}
//               videoId='S_CGed6E610'
//               onClose={() => setOpen(false)}
//             />

//             <div className='absolute bottom-28 md:start-5 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3 mover'>
//               <div className='flex items-center'>
//                 <div className='flex items-center justify-center size-[65px] bg-red-500/5 dark:text-[#02EAFF] text-[#0e2aff] text-center rounded-full me-3'>
//                   <FiDownload className='size-6' />
//                 </div>
//                 <div className='flex-1'>
//                   <h6 className='text-slate-400'>Total Download</h6>
//                   <p className='text-xl font-bold'>
//                     <CountUp
//                       className='counter-value dark:text-[#02EAFF] text-[#0e2aff]'
//                       end={45485}
//                     />
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import SplitText from './SplitText'
import { useTranslation } from 'react-i18next'
import { FiDownload } from 'react-icons/fi'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

// Import images
import phone1 from '../assets/images/phone/1.png'
import phone2 from '../assets/images/phone/2.png'
import phone3 from '../assets/images/phone/3.png'
import phone4 from '../assets/images/phone/4.png'
import phone5 from '../assets/images/phone/5.png'
import phone6 from '../assets/images/phone/6.png'

export default function BannerOne() {
  const { t } = useTranslation()
  const [isOpen, setOpen] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState(false)

  const images = [phone1, phone2, phone3, phone4, phone5, phone6]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleAnimationComplete = () => {
    console.log('All letters have animated!')
  }

  return (
    <section
      className="relative overflow-hidden md:py-10 py-36 dark:bg-black -500/10 before:content-[''] before:absolute md:before:bottom-[30rem] sm:before:bottom-[35rem] xl:before:right-[5rem] lg:before:-right-[13rem] md:before:-right-[16rem] sm:before:-right-[15rem] before:w-[50rem] before:h-[25rem] max-md:before:h-[35rem] before:rotate-[100deg] before:bg-gradient-to-r before:to-transparent bg-gradient-to-tr before:via-[#0000FF]/25 before:from-[#AE00FF] before:z-1 2xl:before:right-[28rem]"
      id='home'
    >
      <div className='container relative z-1' style={{ userSelect: 'none' }}>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center mt-12 gap-[30px]'>
          <div className='md:me-6'>
            <div className='relative'>
              <SplitText
                text={t('slogan1')}
                className='font-bold leading-[12px] text-[42px] lg:text-[54px]'
                delay={120}
                animationFrom={{
                  opacity: 0,
                  transform: 'translate3d(0,50px,0)',
                }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing='easeOutCubic'
                threshold={0.2}
                rootMargin='-50px'
                onLetterAnimationComplete={handleAnimationComplete}
              />
              <br />
              <SplitText
                text={t('slogan2')}
                className='font-bold leading-[56px] text-[42px] lg:text-[54px]'
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: 'translate3d(0,50px,0)',
                }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing='easeOutCubic'
                threshold={0.2}
                rootMargin='-50px'
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>

            <p className='text-slate-400 mt-5 text-lg max-w-xl'>
              {t('mission.content')}
            </p>

            <div className='mt-6'>
              <Link
                draggable='false'
                to=''
                onClick={() => setOpen(true)}
                className='py-2 px-5 tracking-wider inline-flex items-center justify-center font-medium rounded bg-[#FF3FFE]/50 hover:bg-[#02EAFF] transition-colors duration-300 text-white'
              >
                <i className='mdi mdi-play inline-flex items-center justify-center text-2xl mr-2' />
                Watch
              </Link>
            </div>
          </div>

          <div
            className='relative'
            data-aos='zoom-in-up'
            data-aos-duration='750'
          >
            <div className='mx-auto w-80'>
              {isMounted && (
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  speed={400}
                >
                  {images.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={item}
                        alt={`Slide ${index + 1}`}
                        className='w-full'
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>

            <ModalVideo
              channel='youtube'
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen}
              videoId='S_CGed6E610'
              onClose={() => setOpen(false)}
            />

            <div className='z-50 absolute bottom-28 md:start-5 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3 mover'>
              <div className='flex items-center'>
                <div className='flex items-center justify-center size-[65px] bg-red-500/5 dark:text-[#02EAFF] text-[#0e2aff] text-center rounded-full me-3'>
                  <FiDownload className='size-6' />
                </div>
                <div className='flex-1'>
                  <h6 className='text-slate-400'>Total Download</h6>
                  <p className='text-xl font-bold'>
                    <CountUp
                      className='counter-value dark:text-[#02EAFF] text-[#0e2aff]'
                      end={45485}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

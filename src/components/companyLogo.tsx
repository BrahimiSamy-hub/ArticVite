import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Dark from '../assets/images/partnerDark.jpg'
import Logo from '../assets/images/logo2.png'
import { useTranslation } from 'react-i18next'

const CompanyLogos = () => {
  const { t } = useTranslation()

  return (
    <div data-aos='fade-up'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3500}
        slidesPerView={4}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
        }}
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className='flex items-center justify-center h-24'>
              <img
                src={
                  document.documentElement.classList.contains('dark')
                    ? Logo
                    : Dark
                }
                width={140}
                alt='company logo'
                className='object-contain hover:scale-110 transition-transform duration-300 dark:invert'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CompanyLogos

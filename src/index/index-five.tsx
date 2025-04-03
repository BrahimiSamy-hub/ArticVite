import Navbar from '../components/navbar'
import BannerOne from '../components/banner-one'
import FeaturesOne from '../components/features-one'
import AboutOne from '../components/about-one'
import AboutTwo from '../components/about-two'
import Screenshot from '../components/screenshot'
import Faq from '../components/faq'
import Download from '../components/download'
import Client from '../components/client'
import Contact from '../components/contact'
import Partner from '../components/partner'
import CompanyLogos from '../components/companyLogo'
import Footer from '../components/footer'
import { useTranslation } from 'react-i18next'
import ShootingStars from '../components/ShootingStars'

export default function IndexFive() {
  const { t } = useTranslation()
  return (
    <>
      <Navbar
        navLight={false}
        playBtn={true}
        bgLight={false}
        navCenter={true}
      />
      <ShootingStars />
      <BannerOne />

      <section className='relative md:py-24 py-16 dark:bg-black ' id='features'>
        <div className='container relative'>
          <div className='grid grid-cols-1 pb-6 text-center'>
            <h6 className='dark:text-[#ae00ff] text-[#0e2aff] uppercase text-sm font-bold tracking-wider mb-3'>
              ARTIC
              <span className='text-md'>⁺</span>
            </h6>
            <h4 className='mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold'>
              {t('footer.about')}
            </h4>

            <p className='text-slate-400 max-w-2xl mx-auto'>{t('whatWeDo')}</p>
          </div>

          <FeaturesOne />
        </div>

        <section className='mt-20 py-6 dark:bg-black '>
          <div className='container relative'>
            {/* <Partner /> */}
            <CompanyLogos />
          </div>
        </section>

        <div className='container relative md:mt-24 mt-16 dark:bg-black '>
          <AboutOne />
        </div>

        {/* <div className='container relative md:mt-24 mt-16 dark:bg-black '>
          <AboutTwo />
        </div> */}
      </section>

      <section
        className='relative md:py-24 py-16 bg-slate-50/50 dark:bg-black '
        id='screenshot'
      >
        <div className='container relative'>
          <div className='grid grid-cols-1 pb-6 text-center'>
            <h6 className='text-[#ae00ff] uppercase text-sm font-bold tracking-wider mb-3'>
              Artic
            </h6>
            <h4 className='mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold'>
              Application user interface
            </h4>

            <p className='text-slate-400 max-w-xl mx-auto'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio.
            </p>
          </div>

          <Screenshot />
        </div>
      </section>

      <section
        className='relative overflow-hidden md:py-24 py-16 dark:bg-black '
        id='faqs'
      >
        <Faq />
      </section>

      <section
        className='relative md:py-24 py-16 bg-slate-50/50 dark:bg-black '
        id='download'
      >
        <Download />
      </section>

      <section className='relative md:py-24 py-16 dark:bg-black ' id='reviews'>
        <div className='container relative'>
          <div className='grid grid-cols-1 pb-6 text-center'>
            <h6 className='text-[#ae00ff] uppercase text-sm font-bold tracking-wider mb-3'>
              LOREM IPSUM
            </h6>
            <h4 className='mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold'>
              Lorem ipsum dolor sit amet
            </h4>

            <p className='text-slate-400 max-w-xl mx-auto'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio.
            </p>
          </div>
          <Client />
        </div>
      </section>

      <section
        className='relative md:py-24 py-16 bg-slate-50/50 dark:bg-black '
        id='contact'
      >
        <Contact />
      </section>

      <Footer />
    </>
  )
}

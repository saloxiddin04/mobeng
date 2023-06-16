import React from 'react';
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className='py-7 relative' style={{background: '#2e5a87'}}>
      <div className="container mx-auto">
        <div className="box flex justify-between md:flex-wrap md:items-center">
          <div className='w-1/4 md:w-1/4 box-child' style={{color: "rgba(255,255,255,0.8)"}}>
            <div className='uppercase flex gap-4 mb-2 md:justify-start md:gap-4'>
              <div>
                <i className="ri-map-pin-2-fill"></i>
              </div>
              <h1>Адрес: г.Ташкент, р.Юнусабадский, ул.Чинабад, д.63</h1>
            </div>
            <div className='uppercase flex gap-4 mb-2'>
              <div>
                <i className="ri-phone-fill"></i>
              </div>
              <a href='tel:+998 99 795 00 05'>+998 99 795 00 05</a>
            </div>
            <div className='uppercase flex gap-4'>
              <div>
                <i className="ri-time-line"></i>
              </div>
              <h1>Рабочий день</h1>
            </div>
          </div>
          <div className='w-1/4 md:w-1/4 xs:mt-4 card_footer' style={{color: "rgba(255,255,255,0.8)"}}>
            <a href='#about' className='uppercase flex gap-2 hover:text-white duration-200 mb-2'>
              <div>
                <i className="ri-arrow-right-s-line"></i>
              </div>
              <h1>О нас</h1>
            </a>
            <a href={'#partners'} className='uppercase flex gap-2 hover:text-white duration-200 mb-2'>
              <div>
                <i className="ri-arrow-right-s-line"></i>
              </div>
              <h1>Партнеры</h1>
            </a>
            <a href='#portfolio' className='uppercase flex gap-2 hover:text-white duration-200 mb-2'>
              <div>
                <i className="ri-arrow-right-s-line"></i>
              </div>
              <h1>Наши работы</h1>
            </a>
          </div>
          <div className='w-1/4 md:w-1/4 card_footer' style={{color: "rgba(255,255,255,0.8)"}}>
            <div className='uppercase flex gap-2 hover:text-white duration-200 mb-2'>
              <div>
                <i className="ri-phone-fill"></i>
              </div>
              <a href='tel:+99899950005'>+998 99 795 00 05</a>
            </div>
            <div className='uppercase flex gap-2 hover:text-white duration-200 mb-2'>
              <div>
                <i className="ri-mail-line"></i>
              </div>
              <a href="mailto:contract@unicon.uz"><span>contract@mobeng.uz</span></a>
            </div>
          </div>
        </div>
        <div className='border border-white mt-3' style={{borderColor: "rgba(255,255,255,0.3)"}}></div>
        <div className="copyright mt-3 text-white flex justify-between items-center xs:flex-wrap xs:justify-center">
          <div className='flex gap-2 justify-center w-full xs:justify-center xs:flex-wrap xs:flex-col'>
            <div className='flex items-center gap-2 xs:flex-col'>
              <h1 className='uppercase'>{new Date().getFullYear()} mobeng.uz</h1>
              <h1 className='xs:pb-2'>Barcha huquqlar himoyalangan</h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
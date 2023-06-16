import React from 'react'
import img1 from "../assets/partners1.jpg";
import img2 from "../assets/partners2.jpg";
import img3 from "../assets/partners3.jpg";
import img4 from "../assets/partners4.jpg";

const Partners = () => {
  return (
    <section id='partners' className='py-5'>
      <div className="container">
        <h1 className="title text-5xl text-center">Наши партнеры</h1>
        <div className="body py-5">
          <div className='flex justify-between'>
            <div className='flex flex-col w-1/2'>
              <h1 className='flex gap-2 items-center'>
                <i className="ri-check-line text-2xl"></i>
                Завод по производству металлоконструкций Собственное производство
              </h1>
              <h1 className='flex gap-2 items-center'>
                <i className="ri-check-line text-2xl"></i>
                Торговый комплекс строительных материалов Story Gorod
              </h1>
              <h1 className='flex gap-2 items-center'>
                <i className="ri-check-line text-2xl"></i>
                ГУП O’ZGASHKLITI
              </h1>
              <h1 className='flex gap-2 items-center'>
                <i className="ri-check-line text-2xl"></i>
                Buran Savdo
              </h1>
              <h1 className='flex gap-2 items-center'>
                <i className="ri-check-line text-2xl"></i>
                УП «Энергокурилишиндустрия»
              </h1>
            </div>
            <div className='flex flex-col w-1/2'>
              <h1 className='flex gap-2 items-center'>
                <i className="ri-check-line text-2xl"></i>
                ГУП «Алока Лоиха»
              </h1>
              <h1 className='flex gap-2 items-center'>
                <i className="ri-check-line text-2xl"></i>
                СП ООО «Тошкент трубный завод»
              </h1>
              <h1 className='flex gap-2 items-center'>
                <i className="ri-check-line text-2xl"></i>
                СП ООО «ATMZ»
              </h1>
              <h1 className='flex gap-2 items-center'>
                <i className="ri-check-line text-2xl"></i>
                ДУК «Гранит»
              </h1>
              <h1 className='flex gap-2 items-center'>
                <i className="ri-check-line text-2xl"></i>
                OOO «Bek Kom Engineering»
              </h1>
              <h1 className='flex gap-2 items-center'>
                <i className="ri-check-line text-2xl"></i>
                ООО «РОХАТ НЕРУДНИК"
              </h1>
            </div>
          </div>
          <div className="images flex justify-between mt-1">
            <img className='w-[250px]' src={img1} alt=""/>
            <img className='w-[250px]' src={img2} alt=""/>
            <img className='w-[250px]' src={img3} alt=""/>
            <img className='w-[250px]' src={img4} alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners

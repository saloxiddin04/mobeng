import React from 'react'
import img1 from '../assets/Opportunities1.jpg'
import img2 from '../assets/Opportunities2.jpg'
import img3 from '../assets/Opportunities3.jpg'
import img4 from '../assets/Opportunities4.jpg'

const Opportunities = () => {
  return (
    <section id='about' className='py-5'>
      <div className="container">
        <h1 className="title text-5xl text-center">Возможности компании</h1>
        <div className="body py-5">
          <div className='flex flex-col'>
            <h1 className='flex gap-2 items-center'>
              <strong>Главная задача ООО «Mobile Engineering» Обеспечение высочайшего качества в строительстве.</strong>
            </h1>
            <h1 className='flex gap-2 items-center'>
              <i className="ri-check-line text-2xl"></i>
              Ведем профессиональный отбор наших сотрудников
            </h1>
            <h1 className='flex gap-2 items-center'>
              <i className="ri-check-line text-2xl"></i>
              Ведется технический надзор за процессом производства металлоконструкций
            </h1>
            <h1 className='flex gap-2 items-center'>
              <i className="ri-check-line text-2xl"></i>
              Разработка проектно-сметной документации осуществляется высококвалифицированными специалистами
            </h1>
            <h1 className='flex gap-2 items-center'>
              <i className="ri-check-line text-2xl"></i>
              Выстраиваем оптимальную транспортно-логистическую сеть
            </h1>
            <h1 className='flex gap-2 items-center'>
              <i className="ri-check-line text-2xl"></i>
              Имеем собственные производственные площади
            </h1>
            <h1 className='flex gap-2 items-center'>
              <i className="ri-check-line text-2xl"></i>
              Заказываем, поставляем и устанавливаем все необходимое оборудование и материалы
            </h1>
            <h1 className='flex gap-2 items-center'>
              <i className="ri-check-line text-2xl"></i>
              Гарантируем соответствие самым высоким стандартам качества и безопасности выполняемых работ
            </h1>
            <h1 className='flex gap-2 items-center'>
              <i className="ri-check-line text-2xl"></i>
              Обладаем возможности начать проект любой сложности в течение 2-3 недель после получения технического
              задания
            </h1>
          </div>
          <div className="images flex justify-between mt-1">
            <img src={img1} alt=""/>
            <img src={img2} alt=""/>
            <img src={img3} alt=""/>
            <img src={img4} alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Opportunities

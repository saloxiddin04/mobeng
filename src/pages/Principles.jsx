import React from 'react'
import img1 from "../assets/principles1.jpg";
import img2 from "../assets/principles2.jpg";
import img3 from "../assets/principles3.jpg";
import img4 from "../assets/principles4.jpg";

const Principles = () => {
  return (
    <div className='py-5'>
      <div className="container">
        <h1 className="title text-5xl text-center">Принципы компании</h1>
        <div className="body py-5">
          <div className='flex flex-col'>
            <h1 className='flex gap-2 items-center'>
              <i className="ri-check-line text-2xl"></i>
              Качественном выполнении взятых на себя обязательств и индивидуальный подход к каждому проекту
            </h1>
            <h1 className='flex gap-2 items-center'>
              <i className="ri-check-line text-2xl"></i>
              Максимальная ответственность за результаты проекта
            </h1>
            <h1 className='flex gap-2 items-center'>
              <i className="ri-check-line text-2xl"></i>
              Эффективное использование средств и ресурсов
            </h1>
            <h1 className='flex gap-2 items-center'>
              <i className="ri-check-line text-2xl"></i>
              Эффективное управление персоналом
            </h1>
            <h1 className='flex gap-2 items-center'>
              <i className="ri-check-line text-2xl"></i>
              Привлечение для сотрудничества высокоэффективных компаний уже, зарекомендовавших себя на рынке строительства
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
    </div>
  )
}

export default Principles

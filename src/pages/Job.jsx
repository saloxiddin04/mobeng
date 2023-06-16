import React from 'react'
import job from '../assets/job.png'

const Job = () => {
  return (
    <div className='py-5'>
      <div className="container">
        <h1 className="title text-5xl text-center">Опыт работ</h1>
        <div className="box mt-5">
          <div className="text">
            <h1>
              Успешно выполненные заказы по всей республике от таких  компаний как UZMOBILE, UMS, HYUNDAI, HUAWEI и не только.
            </h1>
            <br/>
            <h1>
              Деятельность нашей компании направлена не только на телекоммуникации, но и на общестроительные работы.
            </h1>
            <br/>
            <h1>
              Более 50 крупных объектов под ключ включая проектирование, строительство, легализацию, обслуживание.
            </h1>
            <img className='mt-2' src={job} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Job

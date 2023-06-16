import React from 'react'
import doc from '../assets/document.png'
import bg from '../assets/bg.jpg'

const Home = () => {
  return (
    <div className="h-screen">
      <div className='absolute top-0 left-0 z-20 w-screen h-screen' style={{backgroundColor: 'rgba(0,0,0,0.5)'}}></div>
      <img className='absolute w-screen h-screen top-0 left-0 bg-cover z-10' src={bg} alt="" />.
      <div className="container z-30 relative">
        <div className="box flex justify-between items-center">
          <div className="left w-1/2 text-white">
            <p className='text-xl'>
              Основана в январе 2014 года и располагает 3 офисами в Узбекистане – Ташкент, Самарканд и Фергана
              Деятельность компании «Mobile Engineering» регламентируется лицензией Государственного комитета связи,
              информатизации и телекоммуникационных технологий Республики Узбекистан АА№ 0005216 на Проектирование и
              строительство сетей подвижной радиотелефонной (сотовой) связи
              При необходимости, получение необходимых лицензий на новые виды работ не вызывает труда
            </p>
          </div>
          <div className="right">
            <img className='w-[300px] h-full' src={doc} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

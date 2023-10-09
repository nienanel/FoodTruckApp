import SideBar from './components/shared/Sidebar'
import MenuMovil from './components/shared/menuMovil'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useState } from 'react';

import { BsSearch } from 'react-icons/bs';
import { AiOutlineDown, AiOutlineClose } from 'react-icons/ai';

function App() {

  const [showSideBar, setShowSideBar] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  }

  return (
    <div className="bg-[#353536] w-full min-h-screen">
      {/* /******* barra lateral***** */}
      <BrowserRouter>
        <SideBar showSideBar={showSideBar} />
        <nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-grat-400 py-2 px-8 flex items-center justify-between'>
          <Routes>
            <Route path="/Home" element="" />
            <Route path="/Us" element="" />
            <Route path="/Menu" element="" />
            <Route path="/Contact" element="" />
          </Routes>
        </nav>
        {/* /******* sidebar ***** */}
        <MenuMovil toggleSideBar={toggleSideBar} />
        <main className='lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 mb-20'>
          {/* /******* menu ***** */}
          <div className='lg:col-span-6 md:p-8'>
            <header>
              {/* /******* serch y titulo ***** */}
              <section className='flex flex-col md:flex-row md:justify-between md:items-center md:ml-4 gap-4 mb-6'>
                <div>
                  <h1 className='text-2xl text-gray-300'>resto</h1>
                  <p className='text-gray-500'> 7 de octubre 2023 </p>
                </div>
                <form action="">
                  <div className='w-full relative'>
                    <BsSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300' />
                    <input type="text" className='bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none' placeholder='Buscar' />
                  </div>
                </form>
              </section>
              {/* /******* tabs ***** */}
              <nav className='text-gray-300 flex item-center justify-between md:justify-start md:gap-8  border-b border-b-gray-500 mb-10'>
                <a href="#" className='relative py-2 pr-3 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:bottom-0 before:top-[39px] text-[#ec7c6a]'>hot dishes</a>
                <a href="#" className='py-2 pr-3'>cold dishes</a>
                <a href="#" className='py-2 pr-3'>ramen</a>
                <a href="#" className='py-2 pr-3'>wines</a>
              </nav>
            </header>
            {/* /******* food cards  ***** */}
            <div className='flex item-center justify-between mb-20'>
              <h2 className='text-xl text-gray-300'>Chose dishes</h2>
              <button className='flex item-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
                <AiOutlineDown className='mt-1' />Dine in
              </button>
            </div>
            <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
              {/* /******* cards  ***** */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 '>
                <img src="HamburgesaClasica.png" className='w-[250px] object-cover -mt-20 shadow-2xl rouded-full' alt="" />
                <p className='text-xl'>Hamburgesa Clasica double</p>
                <p className='text-gray-500'>2 burger, queso, tomate,lechuga,salsa secreta</p>
                <span className='text-gray-400'>$15,99</span>
              </div>
              {/* /******* cards  ***** */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 '>
                <img src="HamburgesaSuave.png" className='w-[250px] object-cover -mt-20 shadow-2xl rouded-full' alt="" />
                <p className='text-xl'>Hamburgesa con queso</p>
                <p className='text-gray-500'>burger, queso, pepinillo, tomate, lechuga, salsa secreta</p>
                <span className='text-gray-400'>$10,99</span>
              </div>
              {/* /******* cards  ***** */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 '>
                <img src="HamburgesaCalavera.png" className='w-[250px] object-cover -mt-20 shadow-2xl rouded-full' alt="" />
                <p className='text-xl'>Hamburgesa de la muerte</p>
                <p className='text-gray-500'>burger, queso, pepinillo, tomate, lechuga, salsa secreta</p>
                <span className='text-gray-400'>$20,99</span>
              </div>
              {/* /******* cards  ***** */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 '>
                <img src="Pancho.png" className='w-[250px] object-cover -mt-20 shadow-2xl rouded-full' alt="" />
                <p className='text-xl'>Pancho</p>
                <p className='text-gray-500'>salchicha ahumada, papitas</p>
                <span className='text-gray-400'>$9,99</span>
              </div>
              {/* /******* cards  ***** */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 '>
                <img src="Suprema.png" className='w-[250px] object-cover -mt-20 shadow-2xl rouded-full' alt="" />
                <p className='text-xl'>Hamburgesa de pollo</p>
                <p className='text-gray-500'>pollo frito, queso, cebolla, panceta, tomate, lechuga</p>
                <span className='text-gray-400'>$10,99</span>
              </div>
              {/* /******* cards  ***** */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 '>
                <img src="Pizza.png" className='w-[250px] object-cover -mt-20 shadow-2xl rouded-full' alt="" />
                <p className='text-xl'>Pizza x porcion</p>
                <p className='text-gray-500'>Pizza del dia</p>
                <span className='text-gray-400'>$5,99</span>
              </div>
            </div>
          </div>
          <div className='bg-[#1F1D2B] lg:col-span-2 fixed lg:static right-0 top-0 w-full h-full'>
            {/* /******* carrito***** */}
            <div className='relative pt-16 text-gray-300 p-8 mt-1'>
              < AiOutlineClose className='absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#ec7c6a] rounded-full text-xl' />
              <h1 className='text-2xl my-4'>order #15485</h1>
              {/* /******* perstañas ******/}
              <div className='flex items-center gap-5 flex-wrap mb-8 p-5'>
                <button className='bg-[#ec7c6a] text-white py-2 px-4 rounded-xl'>
                  Dine in
                </button>
                <button className='text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500'>
                  To Go
                </button>
                <button className='text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500'>
                  Delivery
                </button>
              </div>
              {/* /******* cart ******/}
              <div>
                <div className='grid grid-cols-6'>
                  <h5 className='col-span-4'>Item</h5>
                  <h5>Cant</h5>
                  <h5>Price</h5>
                </div>
                {/* /******* producto ******/}
              </div>
            </div>
          </div>
        </main>
      </BrowserRouter>
    </div>

  )
}

export default App

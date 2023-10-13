import React from "react"
import { NavLink } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import { AiOutlineDown } from 'react-icons/ai';


const MenuBar = () => {

    return (
        <div className='lg:col-span-6 md:p-8 lg:pl-40'>
            <header>
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
                <nav className='text-gray-300 flex item-center justify-between md:justify-start md:gap-8  border-b border-b-gray-500 mb-10'>
                    <NavLink to="/category/hot dishes" className='relative py-2 pr-3 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:bottom-0 before:top-[39px] text-[#ec7c6a]'>hot dishes</NavLink>
                    <NavLink to="/category/cold dishes" className='py-2 pr-3'>cold dishes</NavLink>
                    <NavLink to="/category/ramen" className='py-2 pr-3'>ramen</NavLink>
                    <NavLink to="/category/wines" className='py-2 pr-3'>wines</NavLink>
                </nav>
            </header>
            <main className='lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 mb-20'>
                <div className='lg:col-span-6 md:p-8'>
                    <div className='flex item-center justify-between mb-20'>
                        <h2 className='text-xl text-gray-300 border-b border-b-gray-500 pb-2'>Chose dishes</h2>
                        <button className='flex item-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
                            <AiOutlineDown className='mt-1' />Dine in
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default MenuBar;
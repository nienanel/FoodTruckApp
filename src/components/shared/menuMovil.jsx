import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BiSolidUser } from 'react-icons/bi'
import { BsCartFill } from 'react-icons/bs'

import React, { useState } from 'react'
const MenuMovil = (props) => {

    const [showSideBar, setShowSideBar] = useState(false)
    const [showOrder, setShowOrder] = useState(false)

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar);
        props.toggleSideBar();
    }

    return (
        <nav className='bg-[#0e1111] text-orange-300  lg:hidden fixed w-full bottom-0 left-0 text-3xl py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
            <button className='p-2 hover:text-orange-500'>
                <AiOutlineClose />
            </button>
            <button className='p-2 hover:text-orange-500'>
                <BiSolidUser />
            </button>
            <button className='p-2 hover:text-orange-500'>
                <BsCartFill />
            </button>
            <button className='p-4 bg-[#414a4c] rounded-xl' onClick={toggleSideBar}>
                {showSideBar ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
        </nav>
    )
}
export default MenuMovil;
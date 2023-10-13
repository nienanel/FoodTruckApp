import React from "react";
import {AiOutlineClose} from "react-icons/ai";

function Cart() {
    return (
        <nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-grat-400 py-2 px-8 flex items-center justify-between'>
        <div className='bg-[#1F1D2B] lg:col-span-2 fixed lg:static right-0 top-0 w-full h-full'>
            <div className='relative pt-16 text-gray-300 p-8 mt-1'>
                < AiOutlineClose className='absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#ec7c6a] rounded-full text-xl' />
                <h1 className='text-2xl my-4'>order #15485</h1>
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
                <div>
                    <div className='grid grid-cols-6 mb-4 p-4'>
                        <h5 className='col-span-4'>Item</h5>
                        <h5>Cant</h5>
                        <h5>Price</h5>
                    </div>
                    <div className='bg-[#353536] p-4 rounded-xl'>
                        <div className='grid grid-cols-6'>
                            <div className='col-span-4 flex item-center gap-3'>
                                <div>
                                    <img src='Pizza.png' alt="" className='w-12 h-12 object-cover' />
                                </div>
                                <div>
                                    <h5 className='text-xl'>Pizza</h5>
                                    <p className='text-xs text-gray-500'>$10</p>
                                </div>
                            </div>
                            <div>
                                <span>2</span>
                            </div>
                            <div>
                                <span>$20</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </nav>
    )
}

export default Cart;
import React from 'react'

const Header = () => {
    return <>
        <div className='h-[13vh] w-screen bg-[#1C1C1C] flex items-end justify-between px-4 py-4'>
            <h6 className='text-white font-medium text-xl leading-0 '>Hello,<br /><span className='text-white font-semibold text-2xl'>Harsh veer ✌️</span></h6>
            <button className='text-white text-semibold text-lg bg-red-600 px-2 py-1 rounded-sm cursor-pointer'>Log Out</button>
        </div>
    </>
}

export default Header
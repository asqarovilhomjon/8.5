import React from 'react'

const Header = () => {
  return (
    <div className='bg-slate-600'>
        <div className='container mx-auto px-5'>
            <div className='w-full flex justify-between h-[120px] text-white items-center'>
                <h1 className='text-2xl font-semibold'>FORECAST</h1>
                <ul className='flex gap-5 text-2xl items-center'>
                    <input type="text" placeholder='Search...' className='w-[200px] hover:w-[220px] text-[16px] px-4  text-black placeholder-black bg-purple-50 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 ease-in-out'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
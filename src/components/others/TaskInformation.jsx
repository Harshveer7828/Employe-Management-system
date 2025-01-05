import React from 'react'


const TaskInformation = () => {
  return <>
    <div className='h-[30vh] flex flex-wrap gap-2 items-center justify-center py-2 w-screen'>
        <div className="px-2 flex flex-col justify-between py-2 cards h-[13vh] rounded-md w-[45%] bg-blue-600">
            <h1 className='text-white font-bold text-4xl'>0</h1>
            <h3 className='text-white text-xl font-semibold'>New Task</h3>
        </div>
        <div className="px-2 flex flex-col justify-between py-2 cards h-[13vh] rounded-md w-[45%] bg-green-600">
            <h1 className='text-white font-bold text-4xl'>5</h1>
            <h3 className='text-white text-xl font-semibold'>Completed</h3>
        </div>
        <div className="px-2 flex flex-col justify-between py-2 cards h-[13vh] rounded-md w-[45%] bg-yellow-600">
            <h1 className='text-white font-bold text-4xl'>2</h1>
            <h3 className='text-white text-xl font-semibold'>Accepted</h3>
        </div>
        <div className="px-2 flex flex-col justify-between py-2 cards h-[13vh] rounded-md w-[45%] bg-red-600">
            <h1 className='text-white font-bold text-4xl'>1</h1>
            <h3 className='text-white text-xl font-semibold'>Failed</h3>
        </div>
    </div>
  </>
}

export default TaskInformation
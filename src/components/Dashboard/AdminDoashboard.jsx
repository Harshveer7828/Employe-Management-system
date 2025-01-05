import React from 'react'
import Header from '../others/Header'

const AdminDoashboard = () => {
    return <>
        <div className='h-screen w-screen bg-[#1C1C1C]'>
            <Header />
            <h1 className='px-4 text-white text-3xl font-semibold'>Create Task</h1>
            <div className='px-4 mt-4 h-[78vh]'>
                <form className='flex flex-col gap-4 ' >
                    <div>
                        <label htmlFor="taskTitle" className='text-white text-lg font-semibold'>Task Title</label>
                        <input className='w-full px-2 py-1 mt-1 bg-gray-800 rounded-sm text-white' placeholder='Enter the task' type="text" id="taskTitle" />
                    </div>
                    <div>
                        <label htmlFor="taskDescription" className='text-white text-lg font-semibold'>Description <span className='text-sm'>(Max length 20 words)</span> </label> <br />
                        <textarea maxLength={20} className='resize-none w-full h-20 px-2 py-1 mt-1 bg-gray-800 rounded-sm text-white' placeholder='Enter the description of the task.....' name="" id="taskDescription"></textarea>
                    </div>
                    <div>
                        <label htmlFor="taskDate" className='text-white text-lg font-semibold'>Date</label>
                        <input className='w-full px-2 py-1 mt-1 bg-gray-800 rounded-sm text-white' type="date" id="taskDate" />
                    </div>
                    <div>
                        <label htmlFor="taskAssignTo" className='text-white text-lg font-semibold'>Assign To</label>
                        <input className='w-full px-2 py-1 mt-1 bg-gray-800 rounded-sm text-white' placeholder='Harsh veer' type="text" id="taskAssignTo" />
                    </div>
                    <div>
                        <label htmlFor="taskCategory" className='text-white text-lg font-semibold'>Category</label>
                        <input className='w-full px-2 py-1 mt-1 bg-gray-800 rounded-sm text-white' placeholder='Design,Development etc...' type="text" id="taskCategory" />
                    </div>
                    <button className='text-white font-bold bg-gray-950 py-3'>Create Task</button>
                </form>
            </div>
        </div>
    </>
}

export default AdminDoashboard
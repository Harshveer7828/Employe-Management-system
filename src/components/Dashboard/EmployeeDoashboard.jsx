import React from 'react'
import Header from '../others/Header'
import TaskInformation from '../others/TaskInformation.jsx'
import TasksAll from '../others/TasksAll.jsx'

const EmployeeDoashboard = () => {
    return <>
        <div className='bg-[#1C1C1C] w-screen'>
            <Header />
            <TaskInformation />
            <div className='h-[7vh] w-screen flex items-center justify-center'><h1 className='text-white text-lg'>Swipe up to see more tasks</h1></div>
            <TasksAll/>
        </div>
    </>
}

export default EmployeeDoashboard
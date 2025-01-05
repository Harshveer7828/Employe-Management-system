import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import React from 'react'
import { Pagination } from 'swiper/modules';

const TasksAll = () => {
    return <>
        <Swiper
            direction={'vertical'}
           
            modules={[Pagination]}
            className="mySwiper h-[50vh] w-screen">
            <SwiperSlide className='bg-orange-600 h-[20vh] px-4 py-3 rounded-t-2xl'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-white text-md font-bold bg-red-600 px-2 py-1 rounded-md'>High</h1>
                    <h1 className='text-white text-md font-bold'>2 Jan 2024</h1>
                </div>
                <h1 className='text-2xl text-white font-bold'>Heading </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quo. Fuga omnis doloribus corporis esse placeat perferendis praesentium quisquam dolore.</p>
            </SwiperSlide>
            <SwiperSlide className='bg-green-600 min-h-[30vh] px-4 py-3 rounded-t-2xl'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-white text-md font-bold bg-red-600 px-2 py-1 rounded-md'>High</h1>
                    <h1 className='text-white text-md font-bold'>2 Jan 2024</h1>
                </div>
                <h1 className='text-2xl text-white font-bold'>Heading </h1>
                <p className='text-md text-white font-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quo. Fuga omnis doloribus corporis esse placeat perferendis praesentium quisquam dolore.</p>
            </SwiperSlide>
            
        </Swiper>
    </>
}

export default TasksAll
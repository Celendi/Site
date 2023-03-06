import React from 'react';
import axios from 'axios';
import { FaServer, FaUsers, FaDatabase } from 'react-icons/fa';
import '../App.css';
function Stats() {
    return (
        <div className='container mx-auto mt-10 max-w-9/10 sm:max-w-4/5'>
            <div className='flex gap-2 sm:gap-5'>
                <div className='flex-1 flex bg-secondary h-32 w-64 text-white rounded-3xl items-center sm:items-start'>
                    <span className='flex max-h-21 m-auto sm:m-0 mt-0 sm:mt-4 sm:ml-4'>
                        <FaServer className='hidden sm:flex' size={30} />
                        <p className='font-bold text-lg sm:text-xl flex mt-4 ml-0 sm:mt-0 sm:ml-2'>Servers</p>
                    </span>
                </div>
                <div className='flex-1 flex bg-secondary h-32 w-64 text-white rounded-3xl items-center sm:items-start'>
                    <span className='flex max-h-21 m-auto sm:m-0 mt-0 sm:mt-4 sm:ml-4'>
                        <FaUsers className='hidden sm:flex' size={30} />
                        <p className='font-bold text-lg sm:text-xl flex mt-4 ml-0 sm:mt-0 sm:ml-2'>Users</p>
                    </span>
                </div>
                <div className='flex-1 flex bg-secondary h-32 w-64 text-white rounded-3xl items-center sm:items-start'>
                    <span className='flex max-h-21 m-auto sm:m-0 mt-0 sm:mt-4 sm:ml-4'>
                        <FaDatabase className='hidden sm:flex' size={30} />
                        <p className='font-bold text-lg sm:text-xl flex mt-4 ml-0 sm:mt-0 sm:ml-2'>Database</p>
                    </span>
                    <span className='flex flex-col'>
                        <p>hi</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Stats;
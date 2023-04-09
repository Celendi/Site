import { useState, useEffect } from 'react';
import { FaServer, FaUsers, FaDatabase } from 'react-icons/fa';
import { BsQuestionSquareFill, BsClock } from 'react-icons/bs';
import { SiServerless } from 'react-icons/si';

function Stats() {
    const [users, setUsers] = useState(0);
    const [database, setDatabase] = useState(0);
    const [servers, setServers] = useState(0);
    const [commands, setCommands] = useState(0);
    const [uptime, setUptime] = useState(0);
    const [shards, setShards] = useState(0);

    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        fetch('https://stats.celendi.gg/api/stats')
            .then((res) => res.json())
            .then((data) => {
                setServers(data.guildCount);
                setUsers(data.userCount);
                setDatabase(Number(parseFloat(data.databaseSize).toFixed(2)));
                setCommands(data.commandCount);
                setUptime(data.uptime);
                setShards(data.shardCount);
            });
    }, []);

    function toggleShowMore() {
        setShowMore(!showMore);
    }

    return (
        <div className='container mx-auto mt-10 max-w-9/10 sm:max-w-4/5'>
            <div className='flex gap-2 sm:gap-5'>
                <div className='flex-1 flex flex-col bg-secondary rounded-lg border-2 border-secondary border-solid hover:border-brand'>
                    <div className='flex items-center justify-center h-12 md:h-14 text-white rounded-t-lg mt-2 border-b-2 border-primary'>
                        <FaServer className='mr-2 text-lg md:text-xl' size={18} />
                        <p className='text-lg md:text-xl font-semibold'>Servers</p>
                    </div>
                    <div className='flex flex-col justify-center h-20 text-white'>
                        <p className={`text-lg font-bold text-center ${servers === 0 ? 'animate-pulse' : ''}`}>{servers}</p>
                    </div>
                </div>
                <div className='flex-1 flex flex-col bg-secondary rounded-lg border-2 border-secondary border-solid hover:border-brand'>
                    <div className='flex items-center justify-center h-12 md:h-14 text-white rounded-t-lg mt-2 border-b-2 border-primary'>
                        <FaUsers className='mr-2 text-lg md:text-xl' size={18} />
                        <p className='text-lg md:text-xl font-semibold'>Users</p>
                    </div>
                    <div className='flex flex-col justify-center h-20 text-white'>
                        <p className={`text-lg font-bold text-center ${users === 0 ? 'animate-pulse' : ''}`}>{users}</p>
                    </div>
                </div>
                <div className='flex-1 flex flex-col bg-secondary rounded-lg border-2 border-secondary border-solid hover:border-brand'>
                    <div className='flex items-center justify-center h-12 md:h-14 text-white rounded-t-lg mt-2 border-b-2 border-primary'>
                        <FaDatabase className='mr-2 text-lg md:text-xl' size={18} />
                        <p className='text-lg md:text-xl font-semibold'>Database</p>
                    </div>
                    <div className='flex flex-col justify-center h-20 text-white'>
                        <p className={`text-lg font-bold text-center ${database === 0 ? 'animate-pulse' : ''}`}>{database} MB</p>
                    </div>
                </div>
            </div>
            <div className={showMore ? 'mt-7' : 'hidden'}>
                <div className='flex gap-2 sm:gap-5'>
                    <div className='flex-1 flex flex-col bg-secondary rounded-lg border-2 border-secondary border-solid hover:border-brand'>
                        <div className='flex items-center justify-center h-12 md:h-14 text-white rounded-t-lg mt-2 border-b-2 border-primary'>
                            <BsQuestionSquareFill className='mr-2 text-lg md:text-xl' size={18} />
                            <p className='text-lg md:text-xl font-semibold'>Commands</p>
                        </div>
                        <div className='flex flex-col justify-center h-20 text-white'>
                            <p className='text-lg font-bold text-center'>{commands}</p>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col bg-secondary rounded-lg border-2 border-secondary border-solid hover:border-brand'>
                        <div className='flex items-center justify-center h-12 md:h-14 text-white rounded-t-lg mt-2 border-b-2 border-primary'>
                            <BsClock className='mr-2 text-lg md:text-xl' size={18} />
                            <p className='text-lg md:text-xl font-semibold'>Uptime</p>
                        </div>
                        <div className='flex flex-col justify-center h-20 text-white'>
                            <p className='text-lg font-bold text-center'>{uptime}</p>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col bg-secondary rounded-lg border-2 border-secondary border-solid hover:border-brand'>
                        <div className='flex items-center justify-center h-12 md:h-14 text-white rounded-t-lg mt-2 border-b-2 border-primary'>
                            <SiServerless className='mr-2 text-lg md:text-xl' size={18} />
                            <p className='text-lg md:text-xl font-semibold'>Shards</p>
                        </div>
                        <div className='flex flex-col justify-center h-20 text-white'>
                            <p className='text-lg font-bold text-center'>{shards}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 text-center'>
                <button className='bg-secondary text-white text-base px-4 py-2 mt-4 rounded-lg border-2 border-secondary border-solid hover:border-brand' onClick={toggleShowMore}>{showMore ? 'See Less' : 'See More'}</button>
            </div>
        </div>
    );
}

export default Stats;
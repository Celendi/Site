import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { RiExternalLinkLine } from 'react-icons/ri';
import banner from '../assets/banner.png';
import { useState } from 'react';

function Footer() {
    const [showLinks, setShowLinks] = useState(false);

    function toggleLinks() {
        setShowLinks(!showLinks);
    }

    return (
        <>
            { /* Desktop Footer */}
            <footer className='bg-secondary text-white py-6 rounded-t-2xl hidden md:flex items-center justify-center'>
                <div className='container flex items-center justify-between w-full max-w-6xl text-center'>
                    <div className='flex items-center justify-end ml-[2%]'>
                        <a href='/discord' className='text-white hover:text-brand mr-4'>
                            <FaDiscord className='inline-block mr-1' /> Discord
                        </a>
                        <a href='https://twitter.com/CelendiBot' className='text-white hover:text-brand'>
                            <FaTwitter className='inline-block mr-1' /> Twitter
                        </a>
                    </div>
                    <a href='/' className='text-white font-brand tracking-wider uppercase flex items-center justify-center'>
                        <img className='h-20' src={banner} alt='banner' />
                    </a>
                    <div className='flex flex-col items-center justify-start mr-[2%]'>
                        <a href='https://status.celendi.gg' className='text-white hover:underline mr-4'>
                            Status <RiExternalLinkLine className='inline-block ml-1' />
                        </a>
                        <a href='https://docs.celendi.gg/policies/privacy/' className='text-white hover:underline mr-4'>
                            Privacy Policy <RiExternalLinkLine className='inline-block ml-1' />
                        </a>
                        <a href='https://docs.celendi.gg/policies/terms/' className='text-white hover:underline'>
                            Terms of Service <RiExternalLinkLine className='inline-block ml-1' />
                        </a>
                    </div>
                </div>
            </footer>

            { /* Mobile Footer */}
            <footer className='bg-secondary text-white py-6 rounded-t-2xl md:hidden flex flex-col w-full items-center justify-center'>
                <a href='/' className='text-white font-brand tracking-wider uppercase flex items-center justify-center'>
                    <img className='h-20 mb-4' src={banner} alt='banner' />
                </a>

                <div className='container flex justify-center items-center w-full max-w-6xl text-center'>
                    <a href='/discord' className='text-white hover:text-brand'>
                        <FaDiscord className='inline-block mr-16 text-2xl' />
                    </a>
                    <a href='https://twitter.com/CelendiBot' className='text-white hover:text-brand'>
                        <FaTwitter className='inline-block mr-16 text-2xl' />
                    </a>

                    <button onClick={toggleLinks}>
                        <RiExternalLinkLine className='inline-block mr-8 text-xl hover:text-brand' />
                    </button>
                </div>

                {showLinks && (
                    <ul className='text-white mt-4 text-center'>
                        <li className='my-2'>
                            <a href='https://status.celendi.gg' className='text-white hover:underline mr-4'>
                                Status <RiExternalLinkLine className='inline-block ml-1' />
                            </a>
                        </li>
                        <li className='my-2'>
                            <a href='https://docs.celendi.gg/policies/privacy/' className='text-white hover:underline mr-4'>
                                Privacy Policy <RiExternalLinkLine className='inline-block ml-1' />
                            </a>
                        </li>
                        <li className='my-2'>
                            <a href='https://docs.celendi.gg/policies/terms/' className='text-white hover:underline'>
                                Terms of Service <RiExternalLinkLine className='inline-block ml-1' />
                            </a>
                        </li>
                    </ul>
                )}
            </footer>
        </>
    );
}

export default Footer;
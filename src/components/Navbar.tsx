import '../App.css';
function Navbar() {
    function toggle() {
        const menu = document.getElementById('mobile-menu');
        menu!.classList.toggle('hidden');
    }

    return (
        <nav className='bg-secondary'>
            <div className='mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative flex items-center justify-between h-20'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        {/* Mobile menu button*/}
                        <button type='button' className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' aria-controls='mobile-menu' aria-expanded='false' onClick={toggle}>
                            <span className='sr-only'>Open main menu</span>
                            <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' aria-hidden='true'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                            </svg>
                            <svg className='hidden h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' aria-hidden='true'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>
                    </div>
                    <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                        <div className='flex-shrink-0 flex items-center'>
                            <a href='#/'><img className='block lg:hidden h-10 w-auto' src='https://raw.githubusercontent.com/Celendi/Brand-Kit/main/Logos/celendibanner.png?raw=true' alt='Celendi' /></a>
                            <a href='#/'><img className='hidden lg:block h-12 w-auto mt-1' src='https://raw.githubusercontent.com/Celendi/Brand-Kit/main/Logos/celendibanner.png?raw=true' alt='Celendi' /></a>
                            <div className='hidden sm:block sm:ml-6'>
                                <div className='flex space-x-4'>
                                    <a href='/' className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm block font-medium w-auto mt-1' aria-current='page'>Home</a>
                                    <a href='/features' className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium w-auto mt-1'>Features</a>
                                    <a href='https://docs.celendi.xyz/' className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium w-auto mt-1'>Documentation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden sm:block sm:ml-6'>
                        <a href='/invite'>
                            <button className='bg-brand text-white hover:bg-brand-hover block px-3 py-2 rounded-md text-sm font-medium w-auto mt-1'>Add to your server</button>
                        </a>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            <div className='sm:hidden hidden' id='mobile-menu'>
                <div className='px-2 pt-2 pb-3 space-y-1'>
                    <a href='/' className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium' aria-current='page'>Home</a>
                    <a href='/features' className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Features</a>
                    <a href='https://docs.celendi.xyz/' className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Documentation</a>
                    <a href='/invite' className='bg-brand text-white hover:bg-brand-hover hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                        <button>Add to your server</button></a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
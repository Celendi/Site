import React from 'react';
import './App.css';
function App() {
  function toggle() {
    const menu = document.getElementById('mobile-menu');
    menu!.classList.toggle("hidden");
  }

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={toggle}>
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <a href="#/"><img className="block lg:hidden h-10 w-auto" src="https://pub-9ec8b220f8ee4035b585cd68f0fecfdf.r2.dev/img/celendibanner.png" alt="Celendi" /></a>
              <a href="#/"><img className="hidden lg:block h-12 w-auto mt-1" src="https://pub-9ec8b220f8ee4035b585cd68f0fecfdf.r2.dev/img/celendibanner.png" alt="Celendi" /></a>
            </div>
            <div className="hidden sm:block sm:ml-6 mt-1">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a href="#/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Home</a>
                <a href="#/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Features</a>
                <a href="#/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Premium</a>
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <a href="invite">
              <button className="bg-red-600 text-white hover:bg-red-700 block rounded-full px-3 py-2 text-lg font-medium mt-1">Add to your server</button></a>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a href="#/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>
          <a href="#/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
          <a href="#/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Premium</a>
          <a href="invite">
            <button className="bg-red-600 text-white hover:bg-red-700 hover:text-white block rounded-full px-3 py-2 text-sm font-medium ml-1 mt-1">Add to your server</button></a>
        </div>
      </div>
    </nav>
  );
}

export default App;

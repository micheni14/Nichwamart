import React from 'react';

function Navbar() {
return (
    <div>
    <div className='container mx-auto space-x-4 flex justify-between items-center h-24 w-full bg-white text-blue-900 '>
        <p>machwani stores</p>
        <div className='flex justify-center items-center'>
        <input
            className="px-12 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none"
            type="text"
            placeholder="Search for products"
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  left-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

        </div>
        <div className='  text-blue-900 font-semibold border-t-2  border-b-2 border-blue-600 w-full h-12'>
            <ul className=' container mx-auto flex flex-row space-x-8 place-items-center h-full'>
                <li>Audio</li>
                <li>Computing</li>
                <li>Gaming</li>
                <li>Phones and Tablets</li>
                <li>Photography</li>
                <li>Television</li>
                <li>Top Brands</li>
            </ul>
        
            
        </div>

    </div>
    
);
}

export default Navbar;

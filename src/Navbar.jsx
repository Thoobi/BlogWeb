import React from 'react'
import { MdNoteAdd } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
return (
    <nav className='h-[90px] flex justify-between items-center pl-[105px] pr-[105px] shadow-sm mb-10'>
        <div>
            <Link to="/">
                <h1 className='font-bold text-3xl'>HotCoffee</h1>
            </Link>
        </div>
        <div className='search w-[350px] h-[40px] pl-3 flex items-center border border-custom-gray rounded'>
            <i className="material-icons search-icon text-custom-gray">search</i>
            <input type='text' className="search-input border-none outline-none" placeholder="Search..."></input>
        </div>
        <div>
            <ul className='font-medium text-lg flex flex-row items-center justify-between gap-7 list-none'>
                <li className='text-black no-underline hover:text-[purple]'>
                    <Link to="/">Home</Link>
                </li>
                <li className='text-black no-underline hover:text-[purple]'>
                    <Link to="/articles">Articles</Link>
                </li>
                <button className="create-blog-button text-base text-white rounded border p-2 bg-[#1874FD] hover:text-[#1874FD] hover:bg-white  hover:px-2 hover:py-2 hover: border-[#1874FD]">Create a Blog <MdNoteAdd id='new-blog' /></button>
            </ul>
        </div>
        
    </nav>
)
}

export default Navbar

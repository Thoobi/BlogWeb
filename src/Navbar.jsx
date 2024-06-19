import React from 'react'
import { MdNoteAdd } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
return (
    <nav>
        <div>
            <Link to="/home">
                <h1 className='font-bold text-3xl'>HotCoffee</h1>
            </Link>
        </div>
        <div className='search'>
            <i className="material-icons search-icon">search</i>
            <input type='text' className="search-input" placeholder="Search..."></input>
        </div>
        <div>
            <ul className='font-medium text-lg'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
                <button className="create-blog-button text-base">Create a Blog <MdNoteAdd id='new-blog' /></button>
            </ul>
        </div>
        
    </nav>
)
}

export default Navbar

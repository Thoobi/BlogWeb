import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
            <h3>HotCoffee</h3>
        </li>
        <div className='search'>
        <i className="material-icons search-icon">search</i>
        <input type='text' className="search-input" placeholder="Search..."></input>
        </div>
        <li>
          <Link to="/app">Home</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <button className="create-blog-button"> Create a Blog</button>
      </ul>
    </nav>
  )
}

export default Navbar

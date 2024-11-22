import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <header className='bg-red-700'>
      <div className='container mx-auto flex items-center justify-between px-6 py-4'>
        <div className='flex items-center space-x-4'>
          {/* Logo */}
          <Link className="text-lg font-semibold" to="/">
          <div className='flex items-center '>
            <div className='rounded-full bg-white px-2'>
              <span className='font-bold text-red-700 text-lg'>G</span>
            </div>
            <p className='font-bold text-white text-lg'>ooge</p>
          </div>
          </Link>
        </div>

          <ul className='hidden md:flex space-x-4 absolute top-16 left-0 w-full md:static md:w-auto md:space-x-4 transition-all duration-200 ease-in md:flex-row flex-col space-y-4 md:space-y-0 md:items-center'>
            <li>
              <NavLink to="/" className="text-white font-semibold hover:text-gray-300">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-white font-semibold hover:text-gray-300">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services" className="text-white font-semibold hover:text-gray-300">Services</NavLink>
            </li>
            <li>
              <NavLink to="/products" className="text-white font-semibold hover:text-gray-300">Our Products</NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="text-white font-semibold hover:text-gray-300">Blog</NavLink>
            </li>
          </ul>
          
        {/* Right Side Icon */}
        <div className='flex items-center space-x-4  '>
          {/* Notification and icons */}
          <div className=''>
            <Link to="#" className='text-lg'>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#FFFFFF' }} />
            </Link>
          </div>
          <button className='text-black bg-yellow-400 hover:bg-yellow-300 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-bold rounded-lg transition duration-200'>Contact Me</button>
        </div>
      </div>

    </header>
  )
}


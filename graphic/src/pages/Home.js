import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMinus} from '@fortawesome/free-solid-svg-icons';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Be from '../assets/be.png';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div className="bg-red-700 text-white">

        <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-12">
          {/* Left Side Content */}
          <div className="md:w-1/2 text-center md:text-left md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">A Freelance<br />
            Interaction & Visual<br />Product Designer</h1>
              <p className="text-lg mt-8 mb-8">
                In the eyes of future employers and clients, a UI designer is only as good as their portfolio. But what does an impressive UI design portfolio actually look like—and how can you take your portfolio to the next level?
              </p>
              <Link className="inline-block  bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
                Hire Me Now <FontAwesomeIcon icon={faArrowRight} />
              </Link>
          </div>

          {/* Right Side Image and Badges */}
          <div className="md:w-1/2 flex items-center justify-center relative mt-8 md:mt-0">
            {/* Profile Image Placeholder */}
            <div className="w-full md:w-96 h-96 overflow-hidden">
              <img src={Be} alt="Profile" className="object-cover w-full h-full" />
            </div>

            {/* Badge: Description */}
            <div className="absolute left-1/2 mr-64 transform -translate-x-1/2 md:bottom-24 md:left-auto md:transform-none md:right-20 lg:bottom-6 lg:right-32 font-semibold sm:text-xs md:text-sm lg:text-base bg-white text-black p-2 rounded shadow-lg">
              I Design Beautifully Simple<br/> Things, And I Love What I Do.
            </div>

            {/* Badge: Certification */}
            <div className="absolute left-1/2 transform -translate-x-1/2 md:top-24 md:left-auto md:transform-none md:right-20 lg:top-32 bg-white text-black p-2 rounded shadow-lg">
              <div className="flex font-semibold items-center space-x-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span>IDF Certified <br />Professional<br/> UI/UX Designer</span>
              </div>
            </div>
          </div>
          </div>

          {/* lower Part */}
          <section className='px-6 md:px-12 py-16 bg-white'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center'>
            <FontAwesomeIcon icon={faMinus} style={{color: '#b91c1c'}}/>
              <p className='text-red-700 font-semibold mb-1'>What I do</p> 
            <FontAwesomeIcon icon={faMinus} style={{color: '#b91c1c '}}/>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-black'>Services & Solutions</h2>
            </div>

            {/* Services Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
              {/* Card 1 */}
              <div className='bg-red-100 hover:bg-red-700 p-6 rounded-lg shadow-md hover:shadow-lg transition'>
                <div className='flex items-center mb-4 relative justify-between'>
                  <div className='w-10 h-10 bg-pink-200 rounded-full mr-3'></div>
                  <BsFillGrid3X3GapFill className="text-[#ef4444] hover:text-white" size={30}/>                  
                </div>
                <h3 className='text-lg font-bold text-black hover:text-white mb-4'>Product Design</h3>
                <p className='text-gray-700 mb-4 font-semibold hover:text-white'>
                Piopa offers an easy yet powerful drag-and-drop website builder and includes client galleries, eCommerce, and blogging tools.
                </p>
                <Link to='/learn more' className='text-red-500 font-semibold text-sm hover:text-white'>Learn More <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>

              {/* Card 2 */}
              <div className='bg-red-100 hover:bg-red-700 p-6 rounded-lg shadow-md hover:shadow-lg transition'>
                <div className='flex items-center mb-4 relative justify-between'>
                  <div className='w-10 h-10 bg-pink-200 rounded-full mr-3'></div>
                  <BsFillGrid3X3GapFill className="text-[#ef4444] hover:text-white" size={30}/>                  
                </div>
                <h3 className='text-lg font-bold text-black hover:text-white mb-4'>Product Design</h3>
                <p className='text-gray-700 mb-4 font-semibold hover:text-white'>
                Piopa offers an easy yet powerful drag-and-drop website builder and includes client galleries, eCommerce, and blogging tools.
                </p>
                <Link to='/learn more' className='text-red-500 font-semibold text-sm hover:text-white'>Learn More <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>

              {/* Card 3 */}
              <div className='bg-red-100 hover:bg-red-700 p-6 rounded-lg shadow-md hover:shadow-lg transition'>
                <div className='flex items-center mb-4 relative justify-between'>
                  <div className='w-10 h-10 bg-pink-200 rounded-full mr-3'></div>
                  <BsFillGrid3X3GapFill className="text-[#ef4444] hover:text-white" size={30}/>                  
                </div>
                <h3 className='text-lg font-bold text-black hover:text-white mb-4'>Product Design</h3>
                <p className='text-gray-700 mb-4 font-semibold hover:text-white'>
                Piopa offers an easy yet powerful drag-and-drop website builder and includes client galleries, eCommerce, and blogging tools.
                </p>
                <Link to='/learn more' className='text-red-500 font-semibold text-sm hover:text-white'>Learn More <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>

              {/* Card 4 */}
              <div className='bg-red-100 hover:bg-red-700 p-6 rounded-lg shadow-md hover:shadow-lg transition'>
                <div className='flex items-center mb-4 relative justify-between'>
                  <div className='w-10 h-10 bg-pink-200 rounded-full mr-3'></div>
                  <BsFillGrid3X3GapFill className="text-[#ef4444] hover:text-white" size={30}/>                  
                </div>
                <h3 className='text-lg font-bold text-black hover:text-white mb-4'>Product Design</h3>
                <p className='text-gray-700 mb-4 font-semibold hover:text-white'>
                Piopa offers an easy yet powerful drag-and-drop website builder and includes client galleries, eCommerce, and blogging tools.
                </p>
                <Link to='/learn more' className='text-red-500 font-semibold text-sm hover:text-white'>Learn More <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>

              {/* Card 5 */}
              <div className='bg-red-100 hover:bg-red-700 p-6 rounded-lg shadow-md hover:shadow-lg transition'>
                <div className='flex items-center mb-4 relative justify-between'>
                  <div className='w-10 h-10 bg-pink-200 rounded-full mr-3'></div>
                  <BsFillGrid3X3GapFill className="text-[#ef4444] hover:text-white" size={30}/>                  
                </div>
                <h3 className='text-lg font-bold text-black hover:text-white mb-4'>Product Design</h3>
                <p className='text-gray-700 mb-4 font-semibold hover:text-white'>
                Piopa offers an easy yet powerful drag-and-drop website builder and includes client galleries, eCommerce, and blogging tools.
                </p>
                <Link to='/learn more' className='text-red-500 font-semibold text-sm hover:text-white'>Learn More <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>

              {/* Card 6*/}
              <div className='bg-red-100 hover:bg-red-700 p-6 rounded-lg shadow-md hover:shadow-lg transition'>
                <div className='flex items-center mb-4 relative justify-between'>
                  <div className='w-10 h-10 bg-pink-200 rounded-full mr-3'></div>
                  <BsFillGrid3X3GapFill className="text-[#ef4444] hover:text-white" size={30}/>                  
                </div>
                <h3 className='text-lg font-bold text-black hover:text-white mb-4'>Product Design</h3>
                <p className='text-gray-700 mb-4 font-semibold hover:text-white'>
                Piopa offers an easy yet powerful drag-and-drop website builder and includes client galleries, eCommerce, and blogging tools.
                </p>
                <Link to='/learn more' className='text-red-500 font-semibold text-sm hover:text-white'>Learn More <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </section>
        
      </div>
    </div>
  )
}
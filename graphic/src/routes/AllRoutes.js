import { Routes, Route } from 'react-router-dom';
import { Home, Products, About, Blog, Services } from '../pages';

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/blog' element={<Blog/>} />
           <Route path='/products' element={<Products/>} />
           <Route path='/services' element={<Services/>} />
           <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}


import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Welcome from './routes/Home/Welcome'
import NotFound from './routes/Home/NotFound'
import About from './routes/Home/About'
import Products from './routes/Home/Products'
import Computers from './routes/Home/Products/Computers'
import Electronics from './routes/Home/Products/Electronics'
import Books from './routes/Home/Products/Books'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Navigate to='/home' />} />
            <Route path='/home' element={<Welcome />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />}>
              <Route path='computers' element={<Computers />} />
              <Route path='electronics' element={<Electronics />} />
              <Route path='books' element={<Books />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

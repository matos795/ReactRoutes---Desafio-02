import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Welcome from './routes/Home/Welcome'
import NotFound from './routes/Home/NotFound'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Navigate to='/home' />} />
            <Route path='/home' element={<Welcome />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

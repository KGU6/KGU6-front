//import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage';

const Router = () => {
return <BrowserRouter>
  <Routes>
    <Route element={<div/>}/>
    <Route path='/l' element={<HomePage/>}/>
    <Route path='/' element={<LoginPage/>}/>
  </Routes>
</BrowserRouter>
}

export default Router;
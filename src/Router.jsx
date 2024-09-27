//import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage';

const Router = () => {
return <BrowserRouter>
  <Routes>
    <Route element={<div/>}/>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/l' element={<LoginPage/>}/>
  </Routes>
</BrowserRouter>
}

export default Router;
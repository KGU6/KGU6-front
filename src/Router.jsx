//import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

const Router = () => {
return <BrowserRouter>
  <Routes>
    <Route element={<div/>}/>
    <Route path='/' element={<HomePage/>}/>
  </Routes>
</BrowserRouter>
}

export default Router;
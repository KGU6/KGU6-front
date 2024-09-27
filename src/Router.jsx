//import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage';
import Layout from './components/common/Layout/index.jsx';
import CreatePostPage from './pages/CreatePostPage.jsx';
import PostDetailPage from './pages/PostDetailPage.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/a'} element={<CreatePostPage />} />
          <Route path={'/'} element={<PostDetailPage />} />
          <Route path='/h' element={<HomePage/>}/>
          <Route path='/l' element={<LoginPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

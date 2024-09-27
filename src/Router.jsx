//import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout/index.jsx';
import CreatePostPage from './pages/CreatePostPage.jsx';
import PostDetailPage from './pages/PostDetailPage.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/create-post'} element={<CreatePostPage />} />
          <Route path={'/'} element={<PostDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

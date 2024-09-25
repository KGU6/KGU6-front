//import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout/index.jsx';
import CreatePostPage from './pages/CreatePostPage.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<CreatePostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

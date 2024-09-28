//import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage';
import Layout from './components/common/Layout/index.jsx';
import CreatePostPage from './pages/CreatePostPage.jsx';
import PostDetailPage from './pages/PostDetailPage.jsx';
// import SearchResultScreen from './pages/search-screen/SearchResultScreen.jsx';
import SearchScreen from './pages/search-screen/SearchScreen.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/create-post'} element={<CreatePostPage />} />
          <Route path={'/post/:id'} element={<PostDetailPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/l' element={<LoginPage />} />
          <Route path='/create-post' element={<CreatePostPage />} />
          <Route path='/' element={<PostDetailPage />} />
          <Route
            path='/search'
            element={
              <SearchScreen
                recentKeywords={['안녕']}
                onSearchResults={() => {}}
              />
            }
          />
          {/* <Route path="/search-results" element={<SearchResultScreen />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

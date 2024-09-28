import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout/index.jsx';
import CreatePostPage from './pages/CreatePostPage.jsx';
import PostDetailPage from './pages/PostDetailPage.jsx';
import SearchScreen from './pages/search-screen/SearchScreen.jsx';
import SearchResultScreen from './pages/search-screen/SearchResultScreen.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
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

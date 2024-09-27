//import { lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchScreen from "./pages/search-screen/SearchScreen";
import SearchResultScreen from "./pages/search-screen/SearchResultScreen";
import MyPageScreen from "./pages/MyPageScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<div />} />
        <Route path="/" element={<SearchScreen />} />
        <Route path="/result" element={<SearchResultScreen />} />
        <Route path="/mypage" element={<MyPageScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

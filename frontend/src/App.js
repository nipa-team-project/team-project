import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import MainNavigation from "./shared/Navigation/MainNavigation";
const Main = React.lazy(() => import("./main/pages/Main"));
const Goods = React.lazy(() => import("./goods/pages/Goods"));
const Goodsview = React.lazy(() => import("./goods/pages/Goodsview"));

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Suspense>
          <Routes>
            <Route path="/" exact element={<Navigate to="/main" />} />
            <Route path="/main" exact element={<Main />} />
            <Route path="/main/goods" exact element={<Goods />} />
            <Route path="/main/goods/:goodsNo" exact element={<Goodsview />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;

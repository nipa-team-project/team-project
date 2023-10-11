import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import MainNavigation from "./shared/Navigation/MainNavigation";
const Main = React.lazy(() => import("./main/pages/Main"));
const Loading = React.lazy(() => import("./main/pages/Loading"));

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Suspense>
          {/* <Navigate exact from="/" to="/main" /> */}
          <Routes>
            <Route path="/main" exact element={<Main />} />
            <Route path="/loading" element={<Loading />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;

import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import MainNavigation from "./shared/Navigation/MainNavigation";
const Main = React.lazy(() => import("./main/pages/Main"));
const Loading = React.lazy(() => import("./main/pages/Loading"));
const Result = React.lazy(() => import("./main/pages/Result"));
const Process = React.lazy(() => import("./main/pages/Process"));

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Suspense>
          {/* <Navigate exact from="/" to="/result" /> */}
          <Routes>
            <Route path="/" exact element={<Navigate to="/main" />} />
            <Route path="/main" exact element={<Main />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/result" element={<Result />} />
            <Route path="/process" element={<Process />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;

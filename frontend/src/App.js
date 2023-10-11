import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import MainNavigation from "./shared/Navigation/MainNavigation";
const Main = React.lazy(() => import("./main/pages/Main"));
const Login = React.lazy(() => import("./login/pages/login"));

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<Navigate to="/main" />} />
            <Route path="/main" exact element={<Main />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;

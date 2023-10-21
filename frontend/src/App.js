import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import MainNavigation from "./shared/Navigation/MainNavigation";
const Main = React.lazy(() => import("./main/pages/Main"));
const Signup = React.lazy(() => import("./signup/pages/Signup"));

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<Navigate to="/main" />} />
            <Route path="/main" exact element={<Main />} />
            <Route path="/signup" exact element={<Signup />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;

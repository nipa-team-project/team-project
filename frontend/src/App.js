import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import MainNavigation from "./shared/Navigation/MainNavigation";

const Main = React.lazy(() => import("./main/pages/Main"));
const Rating = React.lazy(() => import("./rating/pages/Rating"));

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Suspense>
          <Routes>
            <Route path="/" exact element={<Navigate to="/main" />} />
            <Route path="/main" exact element={<Main />} />
            <Route path="/main/rating" exact element={<Rating />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;

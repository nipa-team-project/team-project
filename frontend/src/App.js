import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import MainNavigation from "./shared/Navigation/MainNavigation";
const Main = React.lazy(() => import("./main/pages/Main"));

const Admin = React.lazy(() => import("./admin/pages/Admin"));

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Suspense>
          <Routes>
            <Route path="/" exact element={<Navigate to="/main" />} />
            <Route path="/main" exact element={<Main />} />

            <Route path="/admin/*" exact element={<Admin />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;

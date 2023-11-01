import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import MainNavigation from "./shared/Navigation/MainNavigation";

const Main = React.lazy(() => import("./main/pages/Main"));
const Mypage = React.lazy(() => import("./mypage/pages/Mypage"));
const Admin = React.lazy(() => import("./admin/pages/Admin"));
const Goods = React.lazy(() => import("./goods/pages/Goods"));
const Goodsview = React.lazy(() => import("./goods/pages/Goodsview"));
const Rating = React.lazy(() => import("./rating/pages/Rating"));
const Ratingsystem = React.lazy(() =>
  import("./ratingsystem/pages/Ratingsystem")
);
const Loading = React.lazy(() => import("./result/pages/Loading"));
const Result = React.lazy(() => {
  return Promise.all([
    import("./result/pages/Result"),
    new Promise((resolve) => setTimeout(resolve, 6000)),
  ]).then(([moduleExports]) => moduleExports);
});
const Process = React.lazy(() => import("./result/pages/Process"));
const Login = React.lazy(() => import("./login/pages/login"));
const Signup = React.lazy(() => import("./signup/pages/Signup"));
const PurchaseForm = React.lazy(() =>
  import("./purchaseform/pages/PurchaseForm")
);

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Suspense>
          {/* <Navigate exact from="/" to="/result" /> */}
          <Routes>
            <Route path="/" element={<Navigate to="/main" />} />
            <Route path="/main" exact element={<Main />} />
            <Route path="/main/rating" exact element={<Rating />} />
            <Route path="/main/goods" exact element={<Goods />} />
            <Route path="/main/goods/:goodsNo" exact element={<Goodsview />} />
            <Route path="/admin/*" exact element={<Admin />} />
            <Route path="/mypage" exact element={<Mypage />} />
            <Route path="/main/ratingsystem" exact element={<Ratingsystem />} />
            <Route path="/loading" element={<Loading />} />
            <Route
              path="/result"
              element={
                <Suspense fallback={<Loading />}>
                  <Result />
                </Suspense>
              }
            />
            <Route path="/process" element={<Process />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/purchaseform" exact element={<PurchaseForm />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;

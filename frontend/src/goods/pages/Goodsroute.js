import React, { useState, useEffect } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Goods from "./Goods";
import Goodsview from "./Goodsview";
import { useHttpClient } from "../../shared/hooks/http-hook"; //api호출 훅 불러오기

const Goodsroute = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchparamshandler = (sort, value) => {
    //쿼리 생성 및 변경
    searchParams.set(`${sort}`, `${value}`);
    setSearchParams(searchParams);
  };

  const { isLoading, error, sendRequest, clearError, setIsLoading } =
    useHttpClient();
  const [loadedGoods, setLoadedGoods] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const fetchgoods = async (event) => {
      try {
        const responseData = await sendRequest(
          `http://127.0.0.1:8000/purchase/goods/?skip=${
            searchParams.get("page") ? 6 * (searchParams.get("page") - 1) : 0
          }`
        );

        setLoadedGoods(responseData);
      } catch (err) {}
    };
    fetchgoods();
  }, [searchParams]);

  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Goods
              isLoading={isLoading}
              loadedGoods={loadedGoods}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              searchparamshandler={searchparamshandler}
            />
          }
        />
        <Route
          path="/detail/:goodsNo"
          exact
          element={
            <Goodsview isLoading={isLoading} loadedGoods={loadedGoods} />
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default Goodsroute;

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import "./Admin.css";
import Adminnav from "../components/Adminnav";
import Userlist from "./Userlist";

const Admin = () => {
  return (
    <>
      <Adminnav />
      <Routes>
        <Route path="/userlist" exact element={<Userlist />} />
      </Routes>
    </>
  );
};

export default Admin;

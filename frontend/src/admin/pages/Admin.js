import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import "./Admin.css";
import Adminnav from "../components/Adminnav";
import Userlist from "./Userlist";
import Paflist from "./Paflist";

const Admin = () => {
  return (
    <React.Fragment>
      <div className="admin">
        <Adminnav />
        <div style={{ marginLeft: "2.0625rem" }}>
          <Routes>
            <Route path="/" exact element={<Navigate to="userlist" />} />
            <Route path="/userlist" exact element={<Userlist />} />
            <Route path="/paflist" exact element={<Paflist />} />
            <Route path="/notebooklist" exact />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;

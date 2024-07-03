import React, { useEffect } from "react";
import AdminPanel from "../../components/admin__panel/AdminPanel";
import { Outlet } from "react-router-dom";

const Admin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <AdminPanel />
      <div style={{ marginTop: "-190px", marginLeft: "400px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;

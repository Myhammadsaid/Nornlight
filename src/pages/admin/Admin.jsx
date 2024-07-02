import React, { useEffect } from "react";
import AdminPanel from "../../components/admin__panel/AdminPanel";
import CreateProduct from "../../components/create-product/CreateProduct";

const Admin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <AdminPanel />
      <CreateProduct />
    </div>
  );
};

export default Admin;

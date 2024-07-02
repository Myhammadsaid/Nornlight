import React from "react";
import AdminPanel from "../../components/admin__panel/AdminPanel";
import CreateProduct from "../../components/create-product/CreateProduct";

const Admin = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminPanel />
      <CreateProduct />
    </div>
  );
};

export default Admin;

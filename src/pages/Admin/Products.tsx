import React from "react";
import AdminNavigation from "../../components/AdminNavigation";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="admin-dashboard-container">
      <AdminNavigation />
      <div className="dashboard">
        <Link to={"new"}>
          <button className="btn-1">Add new product</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;

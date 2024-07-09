import React from "react";
import { useUser } from "../../contexte/UserContext";
import AdminNavigation from "../../components/AdminNavigation";

const AdminDashboard = () => {
  const { user } = useUser();
  return (
    <div className="admin-container">
      <AdminNavigation />
      <div className="dashboard">hello {user?.firstname}</div>
    </div>
  );
};

export default AdminDashboard;

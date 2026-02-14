import Loading from "@/components/Loading";
import { useAuth } from "@/hook/useAuth"
import { Navigate, Outlet } from "react-router-dom"


const AdminLayout = () => {
  const { user, loading } = useAuth();

  // Wait for auth
  if (loading) {
    return <Loading/>
  }

  // Not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Not admin
  if (user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {/* Sidebar */}
      <Outlet />
    </div>
  );
};


export default AdminLayout
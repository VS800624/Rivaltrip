import { Navigate, Outlet } from "react-router-dom"


const AdminLayout = () => {
  const {user} = useAuth()

  // Not logged in
  if(!user){
    return <Navigate to="/login" />
  }

  // Not Admin
  if(user.role !== "admin"){
    return <Navigate to="/" />
  }

  return (
    <div>
      {/* Sidebar */}

      {/* Main content */}
      <Outlet/>

    </div>
  )
}

export default AdminLayout
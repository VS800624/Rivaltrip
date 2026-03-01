import React from 'react'
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Blocked = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      navigate("/login")
    }

   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardContent className="flex flex-col items-center text-center p-8 space-y-6">
          <ShieldX size={60} className="text-red-500" />

          <h1 className="text-2xl font-bold text-gray-800">
            Account Blocked
          </h1>

          <p className="text-gray-600">
            Your account has been blocked by the administrator.
            Please contact support for more information.
          </p>

          <Button className="w-full" onClick={handleLogout}>
            Go to Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
export default Blocked
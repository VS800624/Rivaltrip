import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600 px-4">
      <form className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
         {isLoginForm ? "Welcome Back" : "Create an Account"}
        </h2>
        <p className="text-center text-gray-500 mb-6">{isLoginForm ? "Login " : "Signup"} to continue</p>
        {!isLoginForm && (
          <>
            {/* FirstName */}
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your First Name"
                required
                className="w-full px-4 py-3 border rounded-lg outline-none transition
                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* LastName */}
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">
                Last Name
              </label>
              <input
                type="email"
                placeholder="Enter your Last Name"
                required
                className="w-full px-4 py-3 border rounded-lg outline-none transition
                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </>
        )}

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border rounded-lg outline-none transition
                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            type={!showPassword ? "password" : "text"}
            placeholder="Enter your password"
            required
            className="w-full px-4 py-3 border rounded-lg outline-none transition
                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold
                     hover:bg-indigo-700 transition-all duration-200
                     active:scale-95"
        >
          {isLoginForm ? "Login" : "Signup"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Sign Up */}
        <p
          className="block text-center py-3 rounded-lg border border-indigo-600 text-indigo-600
                     hover:bg-indigo-50 transition"
          onClick={() => setIsLoginForm(!isLoginForm)}
        >
         {isLoginForm ? "Don’t have an account?" : "Already have a account? "} <span className="font-semibold">{isLoginForm ? "Sign Up" : "Login"}</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;

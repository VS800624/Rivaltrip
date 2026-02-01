import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const LoginPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignup = async() => {
    setError("")
     if (!firstName || !lastName || !emailId || !password) {
    return setError("All fields are required");
     }
    try{
      const res = await axios.post(BASE_URL + "/signup", {
      firstName,
      lastName,
      emailId,
      password
    }, {
      withCredentials: true
    })
    dispatch(addUser(res.data.userResponse))
    navigate("/")
    }catch(err){
      setError(err?.response?.data?.message || "Something went wrong")
      console.log(err)
    }
    
  }

  const handleLogin = async() => {
    setError("")
    if ( !emailId || !password) {
    return setError("All fields are required");
    }
    try {
      const res = await axios.post(BASE_URL + "/login", {
        emailId,
        password
      }, )
      // console.log(res)
      dispatch(addUser(res.data.user))
      navigate("/")
    }catch(err){
      setError(err?.response?.data?.message || "Something went wrong")
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600 px-4">
      <form className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8"
      onSubmit={(e) => {
        e.preventDefault()
        isLoginForm ? handleLogin(e) : handleSignup(e)
      } }
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          {isLoginForm ? "Welcome Back" : "Create an Account"}
        </h2>
        <p className="text-center text-gray-500 mb-6">
          {isLoginForm ? "Login " : "Signup"} to continue
        </p>
        {!isLoginForm && (
          <>
            {/* FirstName */}
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                 onChange={(e) => setFirstName(e.target.value)}
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
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border rounded-lg outline-none transition
                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">Password</label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 pr-12 border rounded-lg outline-none transition
                 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
            </button>
          </div>
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

        {/* Error */}
        <p className="text-red-500 my-[10px]">{error}</p>
        {/* Sign Up */}
        <p
          className="block text-center py-3 rounded-lg border border-indigo-600 text-indigo-600
                     hover:bg-indigo-50 transition"
          onClick={() => setIsLoginForm(!isLoginForm)}
        >
          {isLoginForm ? "Don’t have an account?" : "Already have a account? "}{" "}
          <span className="font-semibold">
            {isLoginForm ? "Sign Up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;

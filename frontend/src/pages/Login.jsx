import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";


const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  // 🔗 AWS S3 / CloudFront image URL (replace later)
  const heroImage ="https://vishal-automation-studio-assets.s3.ap-south-1.amazonaws.com/vas-hero.png";
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 🔝 Header */}
      <header className="flex items-center gap-3 px-8 py-5">
        <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
          V
        </div>
        <span className="text-xl font-semibold text-slate-900">
  Vishal <span className="text-blue-600">Automation</span> Studio
</span>


      </header>

      {/* 🔹 Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* 🖼 Left Image Section */}
<div className="flex flex-col items-center justify-center">

  <img
    src={heroImage}
    alt     ="Vishal Automation Studio"
    className="max-w-sm rounded-2xl shadow-2xl object-cover"
  />

  {/* Hero Text */}
  <p className="mt-6 text-slate-700 text-base font-medium text-center max-w-xs">
  Learn, build and practice real-world automation testing with confidence.
</p>

</div>


        {/* 📝 Login Form */}
        <div className="flex items-center justify-center px-6">
          <form
            onSubmit={handleLogin}
            className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
          >
            <h1 className="text-2xl font-bold text-slate-800 mb-2">
              Welcome Back
            </h1>
            <p className="text-slate-500 mb-6">
              Login to Vishal Automation Studio
            </p>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
           <div className="mb-4">
  <label className="block text-sm font-medium text-slate-600 mb-1">
    Password
  </label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="••••••••"
      className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
    >
      {showPassword ? "👁" : "🙈"}
    </button>
  </div>
</div>


            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg text-white font-medium transition ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* Signup */}
            <p className="text-sm text-slate-500 mt-5 text-center">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Create Account
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

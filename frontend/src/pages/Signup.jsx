import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post("/auth/signup", {
        name,
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message || "Signup failed"
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
        {/* 🧾 Left Info Section (NO IMAGE) */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 px-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Join Vishal Automation Studio
          </h2>

          <p className="text-slate-600 text-base max-w-sm mb-6">
            A hands-on platform to learn, practice and master real-world
            automation testing with modern tools.
          </p>

          <ul className="text-slate-700 text-sm space-y-3">
            <li>✔ Real-world QA scenarios</li>
            <li>✔ Cypress + API testing practice</li>
            <li>✔ Industry-style project structure</li>
            <li>✔ Resume-ready experience</li>
          </ul>
        </div>

        {/* 📝 Signup Form */}
        <div className="flex items-center justify-center px-6">
          <form
            onSubmit={handleSignup}
            className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
          >
            <h1 className="text-2xl font-bold text-slate-800 mb-2">
              Create Account
            </h1>
            <p className="text-slate-500 mb-6">
              Start your journey with us
            </p>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Vishal Tyagi"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

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

            {/* Error */}
            {error && (
              <p className="text-sm text-red-600 mb-3">
                {error}
              </p>
            )}

            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg text-white font-medium transition ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>

            {/* Login */}
            <p className="text-sm text-slate-500 mt-5 text-center">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

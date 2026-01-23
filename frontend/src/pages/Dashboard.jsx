import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600">
            Vishal Automation Studio
          </h1>

          <button
            onClick={handleLogout}
            className="text-sm text-red-600 hover:underline"
          >
            Logout
          </button>
        </div>

        <p className="text-gray-700 mb-4">
          🎉 You are logged in successfully.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded">
            🔐 Auth Flow Complete
          </div>
          <div className="p-4 bg-green-50 rounded">
            🧪 Ready for Automation
          </div>
          <div className="p-4 bg-purple-50 rounded">
            🚀 SaaS Project in Progress
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

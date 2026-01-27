import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

// 🔥 NEW IMPORT
import FormElements from "./pages/playground/FormElements";
import CheckboxRadio from "./pages/playground/CheckboxRadio";
import Dropdowns from "./pages/playground/Dropdowns";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* FORM ELEMENTS  */}
        <Route
          path="/playground/forms"
          element={
            <ProtectedRoute>
              <FormElements />
            </ProtectedRoute>
          }
        />
{/* Checkbox-radio*/}
        <Route
          path="/playground/checkbox-radio"
          element={
            <ProtectedRoute>
              <CheckboxRadio />
            </ProtectedRoute>
          }
        />
{/* dropdowns */}
 <Route
          path="/playground/dropdowns"
          element={
            <ProtectedRoute>
              <Dropdowns />
            </ProtectedRoute>
          }
        />



      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Auth pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Dashboard
import Dashboard from "./pages/Dashboard";

// Route guards
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

// Playground pages
import FormElements from "./pages/playground/FormElements";
import CheckboxRadio from "./pages/playground/CheckboxRadio";
import Dropdowns from "./pages/playground/Dropdowns";
import Buttons from "./pages/playground/Buttons";
import DynamicContent from "./pages/playground/DynamicContent";
import AlertsModals from "./pages/playground/AlertsModals";
import Iframes from "./pages/playground/Iframes";
import MultiWindowTabs from "./pages/playground/MultiWindowTabs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* ================= PUBLIC ROUTES ================= */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        {/* ================= PROTECTED ROUTES ================= */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Playground */}
        <Route
          path="/playground/forms"
          element={
            <ProtectedRoute>
              <FormElements />
            </ProtectedRoute>
          }
        />

        <Route
          path="/playground/checkbox-radio"
          element={
            <ProtectedRoute>
              <CheckboxRadio />
            </ProtectedRoute>
          }
        />

        <Route
          path="/playground/dropdowns"
          element={
            <ProtectedRoute>
              <Dropdowns />
            </ProtectedRoute>
          }
        />

        <Route
          path="/playground/buttons"
          element={
            <ProtectedRoute>
              <Buttons />
            </ProtectedRoute>
          }
        />

        <Route
          path="/playground/dynamic-content"
          element={
            <ProtectedRoute>
              <DynamicContent />
            </ProtectedRoute>
          }
        />

        <Route
          path="/playground/alerts-modals"
          element={
            <ProtectedRoute>
              <AlertsModals />
            </ProtectedRoute>
          }
        />

        <Route
          path="/playground/iframes"
          element={
            <ProtectedRoute>
              <Iframes />
            </ProtectedRoute>
          }
        />

        <Route
          path="/playground/multi-window"
          element={
            <ProtectedRoute>
              <MultiWindowTabs />
            </ProtectedRoute>
          }
        />

        {/* ================= CATCH ALL ================= */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

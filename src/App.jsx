import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Dashboard,
  ProtectedRoute,
  Donations,
  Expenses,
  Login,
  Reports,
   // Import the Layout component
} from "./pages/index";
import Layout from "./Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="donations" element={<Donations />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "./store";

// --- IMPORT HALAMAN ---
import Books from "./pages/Books";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddBook from "./pages/AddBook"; // Pastikan huruf B besar sesuai nama file
import EditBook from "./pages/EditBook"; // Route baru untuk edit

// --- IMPORT KOMPONEN ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth,
  );

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        {/* Navbar tetap di atas */}
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            {/* Route Utama (Katalog/Admin Dashboard) */}
            <Route path="/" element={<Books />} />

            {/* Route Otentikasi */}
            <Route
              path="/login"
              element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!isAuthenticated ? <Register /> : <Navigate to="/" />}
            />

            {/* --- ROUTE KHUSUS ADMIN --- */}
            {/* Hanya bisa diakses jika sudah login dan role adalah admin */}
            <Route
              path="/admin/add"
              element={
                isAuthenticated && user?.role === "admin" ? (
                  <AddBook />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin/edit/:id"
              element={
                isAuthenticated && user?.role === "admin" ? (
                  <EditBook />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            {/* Proteksi jika user mengetik URL asal-asalan */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer sesuai request (hanya ada Footer.tsx) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

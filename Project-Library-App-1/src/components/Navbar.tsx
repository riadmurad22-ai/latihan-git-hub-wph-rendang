import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import type { RootState } from "../store";
import { Button } from "./ui/button";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth,
  );

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-xl font-bold text-primary flex items-center gap-2"
          >
            <span className="text-2xl">📚</span> Library App
          </Link>

          {isAuthenticated && (
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <Link to="/" className="hover:text-primary transition-colors">
                Katalog
              </Link>

              {/* Menu Khusus Admin */}
              {user?.role === "admin" ? (
                <>
                  <Link
                    to="/admin/books"
                    className="hover:text-primary transition-colors font-semibold text-blue-600"
                  >
                    Kelola Buku (Admin)
                  </Link>
                  <Link
                    to="/admin/loans"
                    className="hover:text-primary transition-colors"
                  >
                    Daftar Pinjaman
                  </Link>
                </>
              ) : (
                /* Menu Khusus User */
                <Link
                  to="/my-loans"
                  className="hover:text-primary transition-colors"
                >
                  Buku Saya
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-900">
                  {user?.name || "User"}
                </p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                  {user?.role}
                </p>
              </div>
              <Button variant="destructive" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <Button size="sm" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

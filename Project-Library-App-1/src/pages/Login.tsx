import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// Menggunakan path relatif sesuai struktur folder kamu
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import axiosInstance from "../api/axiosInstance";
import { setCredentials } from "../features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 1. Kirim data login ke API Railway
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      // 2. Debugging: Cek isi data dari backend di Console browser
      console.log("Data Login Sukses:", response.data);

      // 3. Ambil data user dan token
      // Jika backend tidak mengirim objek user, kita buat manual dari input email
      const userData = response.data.user || {
        email: email,
        name: email.split("@")[0],
      };
      const token = response.data.token;

      // 4. Kirim ke Redux (Di sini logika penentu ROLE akan dijalankan)
      dispatch(
        setCredentials({
          user: userData,
          token: token,
        }),
      );

      alert("Login Berhasil!");
      navigate("/"); // Pindah ke halaman utama (Admin Dashboard atau Katalog)
    } catch (error: any) {
      console.error("Login Error:", error);
      alert(
        error.response?.data?.message ||
          "Login Gagal. Pastikan email dan password benar.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md shadow-lg border-t-4 border-t-primary">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Library App
          </CardTitle>
          <CardDescription>
            Masukkan akun Anda untuk mengakses perpustakaan
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@library.local atau user@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="focus-visible:ring-primary"
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4 mt-2">
            <Button
              className="w-full py-6 text-base font-semibold"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Memproses...
                </div>
              ) : (
                "Masuk Sekarang"
              )}
            </Button>

            <p className="text-sm text-center text-slate-500">
              Belum punya akun?{" "}
              <Link
                to="/register"
                className="text-primary font-bold hover:underline transition-all"
              >
                Daftar sekarang
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;

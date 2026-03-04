import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { Button } from "../components/ui/button";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/auth/register", formData);
      alert("Registrasi Berhasil! Silakan Login.");
      navigate("/login");
    } catch (err) {
      alert("Registrasi Gagal. Email mungkin sudah terdaftar.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg border">
        <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">
          Daftar Akun
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <Button type="submit" className="w-full py-6 text-lg">
            Daftar Sekarang
          </Button>
        </form>
        <p className="text-center mt-4 text-sm text-slate-600">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-600 font-bold">
            Login di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

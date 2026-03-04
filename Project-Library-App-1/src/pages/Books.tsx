import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import BookCard from "../components/BookCard";
import { Button } from "../components/ui/button";
import type { RootState } from "../store";

const Books = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth,
  );

  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/books");

      if (
        typeof response.data === "string" &&
        response.data.includes("<!DOCTYPE html>")
      ) {
        console.error(
          "Server Error: Menerima HTML. Pastikan baseURL di axiosInstance benar!",
        );
        setBooks([]);
        return;
      }

      const actualData =
        response.data?.data ||
        (Array.isArray(response.data) ? response.data : []);
      setBooks(actualData);
    } catch (err) {
      console.error("Gagal memuat buku:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [isAuthenticated]); 

  // Fungsi hapus buku
  const handleDelete = async (id: string) => {
    if (window.confirm("Yakin ingin menghapus buku ini?")) {
      try {
        await axiosInstance.delete(`/books/${id}`);
        alert("Buku berhasil dihapus!");
        fetchBooks();
      } catch (err) {
        alert("Gagal menghapus. Periksa koneksi atau izin akses Anda.");
      }
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center py-20 text-slate-500">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900 mr-3"></div>
        Menghubungkan ke database...
      </div>
    );

  // --- TAMPILAN DASHBOARD ADMIN ---
  if (user?.role === "admin") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Admin Dashboard
            </h2>
            <p className="text-slate-500 text-sm">
              Kelola koleksi buku perpustakaan Anda.
            </p>
          </div>
          <Button
            onClick={() => navigate("/admin/add")}
            className="bg-slate-900 hover:bg-slate-800 text-white"
          >
            + Tambah Buku Baru
          </Button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b text-slate-600 text-xs uppercase font-bold tracking-wider">
                <th className="p-4">Judul Buku</th>
                <th className="p-4">Penulis</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {books.length > 0 ? (
                books.map((book) => (
                  <tr
                    key={book.id || book._id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="p-4 font-medium text-slate-800">
                      {book.title}
                    </td>
                    <td className="p-4 text-slate-600">
                      {/* Menangani jika author berupa objek atau string */}
                      {book.author?.name || book.author || "N/A"}
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center gap-4">
                        {/* TOMBOL EDIT SEKARANG SUDAH ADA */}
                        <button
                          onClick={() => navigate(`/admin/edit/${book.id}`)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-bold"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(book.id)}
                          className="text-red-600 hover:text-red-800 text-sm font-bold"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="p-20 text-center text-slate-400 italic"
                  >
                    Belum ada data buku. Klik "Tambah Buku Baru" untuk mengisi
                    database.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // --- TAMPILAN KATALOG USER ---
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-slate-900">Katalog Buku</h2>
      {books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id || book._id} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
          <p className="text-slate-400">Maaf, koleksi buku belum tersedia.</p>
        </div>
      )}
    </div>
  );
};

export default Books;

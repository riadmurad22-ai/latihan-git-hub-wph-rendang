import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const EditBook = () => {
  const { id } = useParams(); // Mengambil ID buku dari URL
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
    rating: 5,
  });

  // 1. Ambil data buku lama saat halaman dibuka
  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        const response = await axiosInstance.get(`/books/${id}`);
        const book = response.data?.data || response.data;

        setFormData({
          title: book.title || "",
          author: book.author?.name || book.author || "",
          description: book.description || "",
          coverImage: book.coverImage || "",
          rating: book.rating || 5,
        });
      } catch (error) {
        console.error("Gagal mengambil detail buku:", error);
        alert("Buku tidak ditemukan!");
        navigate("/");
      } finally {
        setFetching(false);
      }
    };

    if (id) fetchBookDetail();
  }, [id, navigate]);

  // 2. Kirim perubahan ke backend (PUT)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axiosInstance.put(`/books/${id}`, formData);
      alert("Data buku berhasil diperbarui!");
      navigate("/");
    } catch (error: any) {
      alert(error.response?.data?.message || "Gagal memperbarui buku.");
    } finally {
      setIsLoading(false);
    }
  };

  if (fetching)
    return <div className="p-20 text-center">Memuat data buku...</div>;

  return (
    <div className="max-w-2xl mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Edit Detail Buku</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Judul Buku</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Nama Penulis</Label>
              <Input
                id="author"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Deskripsi</Label>
              <textarea
                id="description"
                className="w-full min-h-[100px] p-3 border rounded-md text-sm"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/")}
                className="w-full"
              >
                Batal
              </Button>
              <Button
                type="submit"
                className="w-full bg-slate-900 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Menyimpan..." : "Update Buku"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditBook;

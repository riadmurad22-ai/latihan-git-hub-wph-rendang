import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const AddBook = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "https://via.placeholder.com/150",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axiosInstance.post("/books", {
        ...formData,
        rating: 5, 
      });

      alert("Buku berhasil ditambahkan ke perpustakaan!");
      navigate("/", { replace: true });
    } catch (error: any) {
      console.error("Error detail:", error.response?.data);
      alert(
        error.response?.data?.message || "Gagal menambah buku. Cek koneksi.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Tambah Buku Baru</CardTitle>
          <p className="text-sm text-muted-foreground">
            Isi formulir untuk menambah koleksi baru.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Judul Buku</Label>
              <Input
                id="title"
                placeholder="Contoh: Belajar React"
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
                placeholder="Contoh: John Doe"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="coverImage">URL Cover Buku (Opsional)</Label>
              <Input
                id="coverImage"
                value={formData.coverImage}
                onChange={(e) =>
                  setFormData({ ...formData, coverImage: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Deskripsi</Label>
              <textarea
                id="description"
                className="w-full min-h-[100px] p-3 border rounded-md text-sm focus:ring-2 focus:ring-slate-900"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
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
                {isLoading ? "Menyimpan..." : "Simpan Buku"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddBook;

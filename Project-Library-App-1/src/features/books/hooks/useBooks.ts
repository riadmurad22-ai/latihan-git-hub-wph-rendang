import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchBooks, borrowBook } from "../services/bookService";

export const useBooks = () => {
  const queryClient = useQueryClient();

  // Ambil data buku
  const booksQuery = useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });

  // Aksi pinjam buku
  const borrowMutation = useMutation({
    mutationFn: borrowBook,
    onSuccess: () => {
      // Invalidate agar stok langsung update di UI tanpa refresh halaman
      queryClient.invalidateQueries({ queryKey: ["books"] });
      alert("Berhasil meminjam buku!");
    },
    onError: (err: any) => {
      alert(err.response?.data?.message || "Gagal meminjam");
    },
  });

  return {
    books: booksQuery.data,
    isLoading: booksQuery.isLoading,
    borrow: borrowMutation.mutate,
  };
};

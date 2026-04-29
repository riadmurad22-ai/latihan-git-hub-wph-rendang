import { useBooks } from "@/features/books/hooks/useBooks";
import BookCard from "../components/BookCard";

const Books = () => {
  // Poin 3: Mengambil data menggunakan TanStack Query (Server State)
  const { books, isLoading, borrow } = useBooks();

  // Menangani tampilan saat data sedang dimuat
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold animate-pulse">
          Memuat daftar koleksi buku...
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Perpustakaan Digital
        </h1>
        <p className="text-gray-600">
          Temukan dan pinjam buku favorit Anda secara online.
        </p>
      </header>

      {/* Poin 2: Menangani sinkronisasi data secara otomatis */}
      {/* Menggunakan pengecekan Array.isArray untuk mencegah error .map is not a function */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.isArray(books) && books.length > 0 ? (
          books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              // Poin 1 & 2: Aksi borrow yang akan memicu update stok otomatis
              onBorrow={() => borrow(book.id)}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-gray-50 rounded-lg border-2 border-dashed">
            <p className="text-gray-500">
              Tidak ada koleksi buku yang tersedia saat ini.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;

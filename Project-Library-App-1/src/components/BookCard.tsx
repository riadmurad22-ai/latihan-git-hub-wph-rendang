// src/components/BookCard.tsx
import { Book } from "@/types/book";

interface BookCardProps {
  book: Book;
  onBorrow: () => void;
}

const BookCard = ({ book, onBorrow }: BookCardProps) => {
  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <h3 className="font-bold text-lg">{book.title}</h3>
      <p className="text-gray-600">Penulis: {book.author}</p>
      <p className="mt-2">
        Stok tersedia: <span className="font-bold">{book.stock}</span>
      </p>

      <button
        onClick={onBorrow}
        disabled={book.stock <= 0}
        className={`mt-4 w-full py-2 rounded text-white ${
          book.stock > 0
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {book.stock > 0 ? "Pinjam Sekarang" : "Stok Habis"}
      </button>
    </div>
  );
};

export default BookCard;

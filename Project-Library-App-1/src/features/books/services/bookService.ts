import api from "../../../services/api";
import { Book } from "../../../types/book";

export const fetchBooks = async (): Promise<Book[]> => {
  const res = await api.get("/books");
  // Logika agar tidak error .map di browser
  return Array.isArray(res.data) ? res.data : res.data.data || [];
};

export const borrowBook = async (bookId: string) => {
  const res = await api.post(`/books/borrow/${bookId}`);
  return res.data;
};

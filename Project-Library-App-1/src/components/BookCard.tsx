import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BookProps {
  book: {
    id: number;
    title: string;
    author: string;
    description: string;
    cover_image?: string;
  };
}

const BookCard = ({ book }: BookProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-slate-200 flex items-center justify-center">
        {book.cover_image ? (
          <img
            src={book.cover_image}
            alt={book.title}
            className="object-cover h-full w-full"
          />
        ) : (
          <span className="text-slate-400 italic">No Cover</span>
        )}
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg line-clamp-1">{book.title}</CardTitle>
        <p className="text-sm text-slate-500 font-medium">{book.author}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-xs text-slate-600 line-clamp-2 mb-4">
          {book.description}
        </p>
        <Button className="w-full" size="sm">
          Pinjam Buku
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;

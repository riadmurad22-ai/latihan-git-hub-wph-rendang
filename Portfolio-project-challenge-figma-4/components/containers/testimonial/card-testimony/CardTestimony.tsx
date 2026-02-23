import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Star from "@/assets/svg/star.svg";

interface ICardTestimony {
  avatar: StaticImageData;
  rating: number;
  comment: string;
  author: string;
  role: string;
}

export default function CardTestimony({
  author,
  avatar,
  comment,
  rating,
  role,
}: ICardTestimony) {
  return (
    <Card className="relative">
      <div className="absolute -top-10 left-8">
        <Image alt="avatar" src={avatar} className="h-20 w-20" />
      </div>
      <CardContent>
        <div className="flex gap-2 mt-10">
          {new Array(rating).fill(null).map((_, index) => {
            return <Image key={index} alt="rating" src={Star} />;
          })}
        </div>
      </CardContent>
      <CardContent>
        <p>{comment}</p>
      </CardContent>

      <CardContent>
        <div className="flex gap-2 items-center">
          <div className="w-4 h-px bg-black" />
          <h1 className="font-bold"> {author}</h1>
        </div>

        <p>{role}</p>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import sun from "@/assets/svg/sun.svg";
import { cn } from "@/lib/utils";

// Definisi Interface agar lebih rapi
interface CardSuperiorityProps {
  bg?: string;
  list: string[];
  avatar: StaticImageData;
  className?: string; // Tambahkan ini agar komponen lebih fleksibel
}

export default function CardSuperiority({
  bg = "bg-secondary",
  list,
  avatar,
  className,
}: CardSuperiorityProps) {
  return (
    // Gunakan fungsi 'cn' untuk menggabungkan class agar lebih bersih
    <Card className={cn(bg, "mt-4 pt-6 pb-0 md:flex-1", className)}>
      <CardHeader className="flex flex-col justify-center items-center">
        {/* Gunakan CardTitle (h3) bukan h1 untuk hierarki yang benar */}
        <CardTitle className="mb-4 text-xl font-bold text-center">
          Working with me
        </CardTitle>
        <Image
          alt="developer"
          src={avatar}
          width={64} // Tentukan ukuran eksplisit untuk Next.js Image
          height={64}
          className="w-16 h-16 rounded-full object-cover"
        />
      </CardHeader>

      <CardContent>
        {list.map((skill, idx) => {
          const isLast = idx === list.length - 1;
          return (
            <div
              key={`skill-${idx}`}
              className={cn(
                "flex gap-4 items-center py-4",
                !isLast && "border-b border-b-neutral-300",
              )}
            >
              <Image alt="sun icon" src={sun} width={20} height={20} />
              <p className="font-bold text-sm md:text-base"> {skill} </p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

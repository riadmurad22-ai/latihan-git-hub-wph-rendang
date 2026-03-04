import { Button } from "@/components/ui/button";
import Image from "next/image";
import developer from "@/assets/img/developer.png";

export default function Hero() {
  return (
    <main className="mt-16.5 md:flex md:justify-around md:items-center relative z-2">
      <div className="flex flex-col gap-6 md:gap-16 md:w-140">
        <h1 className="font-bold text-[44px]/12 md:text-6xl">
          <span className="text-black bg-secondary px-1 md:block md:w-62">
            Crafting
          </span>{" "}
          Interfaces, One Line at a Time
        </h1>
        <p className="text-lg md:text-xl">
          Build fast, accessible, and responsive web experiences that users
          love.
        </p>

        {/* Menambahkan tag anchor agar scroll ke bagian Footer/Contact */}
        <a href="#contact" className="w-full md:w-78">
          <Button className="bg-white text-black w-full rounded-full h-14 py-2 hover:bg-neutral-200 transition-colors">
            <p className="text-lg font-bold">Say Hello</p>
          </Button>
        </a>
      </div>
      <div className="mt-8">
        <Image
          alt="developer"
          src={developer}
          priority // Menambahkan priority karena ini adalah LCP (Largest Contentful Paint)
        />
      </div>
    </main>
  );
}

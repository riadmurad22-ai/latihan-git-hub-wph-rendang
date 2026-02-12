import { Button } from "@/components/ui/button";
import Image from "next/image";
import developer from "@/assets/img/developer.png";

export default function Hero() {
  return (
    <main className="mt-16.5 md:flex md:justify-around md:items-center">
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

        <Button className="bg-white text-black w-full rounded-full h-14 py-2 md:w-78">
          <p className="text-lg font-bold">Say Hello</p>
        </Button>
      </div>
      <div className="mt-8">
        <Image alt="developer" src={developer} />
      </div>
    </main>
  );
}

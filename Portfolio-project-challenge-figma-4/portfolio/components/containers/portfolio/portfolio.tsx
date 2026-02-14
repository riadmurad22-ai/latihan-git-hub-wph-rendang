"use client";

import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import portfolio2 from "@/assets/img/Portfolio2.png";
import portfolio1 from "@/assets/img/Portfolio1.png";
import portfolio3 from "@/assets/img/Portfolio3.png";
import chevronRight from "@/assets/svg/chevronright-black.svg";
import chevronLeft from "@/assets/svg/chevronleft-black.svg";

const listPortfolio: { title: string; image: StaticImageData }[] = [
  {
    title: "Portfolio 1",
    image: portfolio2,
  },
  {
    title: "Portfolio 2",
    image: portfolio3,
  },
  {
    title: "Portfolio 3",
    image: portfolio1,
  },
];

export default function Portfolio() {
  return (
    // 1. Ganti <main> menjadi <section>
    // 2. Tambahkan id="project"
    // 3. Tambahkan py-20 agar ada jarak saat mendarat (scroll)
    <section id="project" className="py-20 flex flex-col items-center bg-white">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-12">
        <Button
          variant={"outline"}
          size={"sm"}
          className="bg-white rounded-full px-6 mb-4 border-neutral-200"
        >
          <span className="text-black font-bold">Portfolio</span>
        </Button>

        <div className="px-6 max-w-2xl">
          <h2 className="font-extrabold text-3xl md:text-4xl text-center leading-tight">
            Built with Passion, Shipped with Precision
          </h2>
        </div>
      </div>

      {/* Grid Portfolio Items */}
      <div className="lg:flex gap-8 px-4 mb-12">
        {listPortfolio.map((portfolio) => {
          return (
            <div
              key={portfolio.title}
              className="mb-6 relative group overflow-hidden rounded-2xl"
            >
              {/* Image dengan sedikit efek zoom saat hover */}
              <Image
                alt={portfolio.title}
                src={portfolio.image}
                className="transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Button */}
              <div className="absolute bottom-10 left-0 right-0 flex justify-center px-6">
                <Button className="bg-black/40 backdrop-blur-xl hover:bg-black/60 w-full max-w-[320px] h-14 rounded-full border border-white/20 transition-all">
                  <p className="text-lg font-medium text-white">
                    {portfolio.title}
                  </p>
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="flex gap-4">
        <button className="border border-neutral-300 w-12 h-12 rounded-full flex items-center justify-center hover:bg-neutral-50 transition-colors">
          <Image alt="previous" src={chevronLeft} width={24} height={24} />
        </button>
        <button className="border border-neutral-300 w-12 h-12 rounded-full flex items-center justify-center hover:bg-neutral-50 transition-colors">
          <Image alt="next" src={chevronRight} width={24} height={24} />
        </button>
      </div>
    </section>
  );
}

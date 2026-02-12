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
    <main className="mt-12 flex flex-col items-center">
      <div className="flex flex-col items-center mb-12">
        <Button
          variant={"outline"}
          size={"sm"}
          className="bg-white rounded-full px-4 mb-2"
        >
          <p className="text-black font-bold">Portfolio</p>
        </Button>

        <div className="px-6">
          <h1 className="font-extrabold text-3xl text-center">
            Built with Passion, Shipped with Precision
          </h1>
        </div>
      </div>
      <div className="lg:flex gap-8">
        {listPortfolio.map((portfolio) => {
          return (
            <div key={portfolio.title} className="mb-4 relative">
              <Image alt={portfolio.title} src={portfolio.image} />

              <div className="absolute bottom-10 right-1/2 translate-x-1/2">
                <Button className="bg-black/40 backdrop-blur-2xl  w-80.5 h-13.5 rounded-full">
                  <p className="text-lg">{portfolio.title}</p>
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-4">
        <div className="border border-neutral-300 w-10 h-10 rounded-full flex items-center justify-center">
          <Image alt="pagination" src={chevronLeft} />
        </div>
        <div className="border border-neutral-300 w-10 h-10 rounded-full flex items-center justify-center">
          <Image alt="pagination" src={chevronRight} />
        </div>
      </div>
    </main>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

/** Images */
import hideveloper from "@/assets/img/hideveloper.png";
import Avatar from "@/assets/img/avatar.png";
import facebook from "@/assets/img/facebook.png";
import ig from "@/assets/img/ig.png";
import linkedin from "@/assets/img/linkedin.png";
import tiktok from "@/assets/img/tiktok.png";
import portfolioImage from "@/assets/img/Portfolio1.png";
import css from "@/assets/img/tech/css.png";
import js from "@/assets/img/tech/js.png";
import ts from "@/assets/img/tech/ts.png";
import html from "@/assets/img/tech/html.png";
import react from "@/assets/img/tech/react.png";
import chevronRight from "@/assets/svg/Chevron-right.svg";
import letter from "@/assets/svg/letter.svg";
import dot from "@/assets/svg/pattern/dot.svg";

interface IListTech {
  id: number;
  icon: StaticImageData;
  position: string;
}

const listTech: IListTech[] = [
  {
    id: 1,
    icon: css,
    position: "bottom-23 -left-4",
  },
  {
    id: 2,
    icon: js,
    position: "bottom-38 left-16",
  },
  {
    id: 3,
    icon: ts,
    position: "top-26 right-1/2 translate-x-1/2",
  },
  {
    id: 4,
    icon: html,
    position: "bottom-38 right-16",
  },
  {
    id: 5,
    icon: react,
    position: "bottom-23 -right-4",
  },
];

export default function About() {
  return (
    <main className="bg-white mt-16">
      <div className="flex flex-col gap-4 mb-4 items-center ">
        <Button variant={"outline"} className="bg-white rounded-full w-16 p-2">
          <p className="text-black font-bold">About</p>
        </Button>

        <h1 className="text-3xl font-extrabold text-center">
          The Developer Behind the Pixel
        </h1>
      </div>
      <div className="lg:grid lg:grid-cols-5 lg:gap-8">
        <Card className="bg-linear-to-br from-primary-300 to-primary-200 text-foreground mb-4 lg:col-span-3 lg:h-110 relative">
          <div className="absolute top-0 left-0">
            <Image alt="dot-pattern" src={dot} />
          </div>
          <CardHeader>
            <div className="flex gap-4">
              <Image alt="avatar" src={Avatar} className="h-12 w-12" />
              <div>
                <p>Riad Murad</p>
                <p className="font-light">riadmurad22@gmail.com</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex gap-3 mb-24">
            <Image alt="avatar" src={facebook} className="h-10 w-10" />
            <Image alt="avatar" src={ig} className="h-10 w-10" />
            <Image alt="avatar" src={linkedin} className="h-10 w-10" />
            <Image alt="avatar" src={tiktok} className="h-10 w-10" />
          </CardContent>
          <CardContent>
            <h1 className="text-3xl mb-2">
              Pushing boundaries through innovation
            </h1>
            <p>
              I create frontend solutions that not only look good but also load
              fast, work everywhere, and scale well.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-4 h-68 bg-cream flex items-center relative lg:col-span-2 lg:h-110">
          <Image
            src={hideveloper}
            alt="developer"
            className="w-62 h-62 absolute bottom-0"
          />
        </Card>
        <Card className="mb-4 bg-dark text-foreground relative lg:col-span-2 lg:h-125 lg:overflow-hidden">
          <CardHeader>
            <div className="flex items-center">
              <div>
                <h1 className="text-xl mb-2 font-bold">Check My Portfolio</h1>
                <p className="text-base/8">
                  Explore selected works and real-world projects
                </p>
              </div>
              <div className="border border-neutral-500/40 h-10 w-10 rounded-full flex items-center justify-center">
                <Image alt="next" src={chevronRight} />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Image
              alt="portfolio"
              src={portfolioImage}
              className="lg:h-100 lg:w-100"
            />
          </CardContent>
        </Card>
        <Card className="lg:col-span-2 lg:h-125 overflow-hidden mb-4 h-87 bg-linear-to-b from-secondary to-orange-500 flex items-center justify-end relative">
          <CardContent className="mb-4">
            <div className="w-60">
              <p className="font-bold text-neutral-900 text-2xl text-center">
                Built with 10+ Trusted Technologies
              </p>
            </div>
          </CardContent>
          {listTech.map((content) => {
            return (
              <div
                key={content.id}
                className={`absolute h-18 w-18 bg-white/60 rounded-full flex justify-center items-center ${content.position}`}
              >
                <Image alt="css" src={content.icon} className="w-9 h-9" />
              </div>
            );
          })}
        </Card>
        <Button className="bg-primary-200 w-full rounded-full h-12 lg:h-125 lg:rounded-xl">
          <Image alt="message" src={letter} />
        </Button>
      </div>
    </main>
  );
}

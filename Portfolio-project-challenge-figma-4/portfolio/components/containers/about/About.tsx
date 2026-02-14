"use client";

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
  { id: 1, icon: css, position: "bottom-12 -left-4" },
  { id: 2, icon: js, position: "bottom-32 left-10" },
  { id: 3, icon: ts, position: "top-10 left-1/2 -translate-x-1/2" },
  { id: 4, icon: html, position: "bottom-32 right-10" },
  { id: 5, icon: react, position: "bottom-12 -right-4" },
];

export default function About() {
  return (
    // TAMBAHKAN id="about" agar bisa diakses dari Navbar
    <section id="about" className="bg-white py-20 px-4 md:px-8">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-10 items-center">
        <div className="border border-neutral-200 bg-white rounded-full px-6 py-1 shadow-sm">
          <p className="text-black font-bold text-sm">About</p>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-neutral-900">
          The Developer Behind the Pixel
        </h2>
      </div>

      {/* Grid Content */}
      <div className="lg:grid lg:grid-cols-5 lg:gap-6 max-w-7xl mx-auto">
        {/* Card 1: Bio & Socials */}
        <Card className="bg-linear-to-br from-primary-300 to-primary-200 text-foreground mb-4 lg:col-span-3 lg:h-110 relative overflow-hidden border-none shadow-md">
          <div className="absolute top-0 left-0 opacity-40">
            <Image alt="dot-pattern" src={dot} />
          </div>
          <CardHeader className="relative z-10 pt-8">
            <div className="flex gap-4 items-center">
              <Image
                alt="avatar"
                src={Avatar}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full border-2 border-white shadow-sm"
              />
              <div>
                <p className="font-bold text-lg">Riad Murad</p>
                <p className="font-medium text-neutral-600 text-sm">
                  riadmurad22@gmail.com
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex gap-3 mb-10 relative z-10">
            {[facebook, ig, linkedin, tiktok].map((icon, i) => (
              <div
                key={i}
                className="hover:scale-110 transition-transform cursor-pointer"
              >
                <Image
                  alt="social-icon"
                  src={icon}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>
            ))}
          </CardContent>

          <CardContent className="relative z-10">
            <h3 className="text-2xl md:text-3xl mb-3 font-bold leading-tight max-w-md">
              Pushing boundaries through innovation
            </h3>
            <p className="text-neutral-700 text-base md:text-lg max-w-lg">
              I create frontend solutions that not only look good but also load
              fast, work everywhere, and scale well.
            </p>
          </CardContent>
        </Card>

        {/* Card 2: Developer Avatar 3D */}
        <Card className="mb-4 h-80 bg-stone-100 flex items-center justify-center relative lg:col-span-2 lg:h-110 overflow-hidden border-none shadow-sm">
          <Image
            src={hideveloper}
            alt="3d developer illustration"
            className="w-full h-auto absolute bottom-0 object-contain max-h-[95%]"
          />
        </Card>

        {/* Card 3: Portfolio Check */}
        <Card className="mb-4 bg-zinc-900 text-white relative lg:col-span-2 lg:h-125 overflow-hidden border-none">
          <CardHeader className="pt-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">Check My Portfolio</h3>
                <p className="text-sm text-neutral-400">
                  Explore selected works and projects
                </p>
              </div>
              <div className="border border-neutral-700 h-10 w-10 rounded-full flex items-center justify-center bg-neutral-800 hover:bg-primary transition-all cursor-pointer group">
                <Image
                  alt="arrow icon"
                  src={chevronRight}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex justify-center p-0">
            <Image
              alt="portfolio preview"
              src={portfolioImage}
              className="rounded-t-xl shadow-2xl mt-6 object-cover"
            />
          </CardContent>
        </Card>

        {/* Card 4: Tech Stack Floating */}
        <Card className="lg:col-span-2 lg:h-125 overflow-hidden mb-4 h-87 bg-linear-to-b from-secondary to-orange-400 flex items-center justify-center relative px-6 border-none shadow-lg">
          <CardContent className="relative z-10">
            <p className="font-extrabold text-neutral-900 text-2xl text-center leading-snug">
              Built with 10+ <br /> Trusted Technologies
            </p>
          </CardContent>
          {listTech.map((content) => (
            <div
              key={content.id}
              className={`absolute h-16 w-16 bg-white/90 backdrop-blur-md rounded-2xl flex justify-center items-center shadow-xl transition-all hover:-translate-y-2 ${content.position}`}
            >
              <Image
                alt="tech icon"
                src={content.icon}
                width={36}
                height={36}
                className="w-9 h-9"
              />
            </div>
          ))}
        </Card>

        {/* Card 5: Large Contact Button */}
        <Button className="bg-primary-200 hover:bg-primary-300 w-full rounded-2xl h-16 lg:col-span-1 lg:h-125 lg:rounded-3xl transition-all shadow-lg flex items-center justify-center group border-none">
          <div className="bg-white p-3 rounded-full group-hover:rotate-12 transition-transform shadow-sm">
            <Image alt="message icon" src={letter} width={28} height={28} />
          </div>
          <span className="lg:hidden ml-3 font-bold text-lg">
            Send a Message
          </span>
        </Button>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import CardTestimony from "./card-testimony/CardTestimony";
import Avatar1 from "@/assets/img/testimonial/avatar1.png";
import Avatar2 from "@/assets/img/testimonial/avatar2.png";
import Avatar3 from "@/assets/img/testimonial/avatar3.png";
import Avatar4 from "@/assets/img/testimonial/avatar4.png";
import chevronRight from "@/assets/svg/chevronright-black.svg";
import chevronLeft from "@/assets/svg/chevronleft-black.svg";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";
import Image from "next/image";

const listTestimonial = [
  {
    id: 1,
    avatar: Avatar1,
    rating: 4,
    comment:
      '"Riad delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman."',
    author: "Riad Murad",
    role: "Mobile Engineer at KP",
  },
  {
    id: 2,
    avatar: Avatar2,
    rating: 5,
    comment:
      '"Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman."',
    author: "Edwin Anderson",
    role: "Mobile Engineer at KP",
  },
  {
    id: 3,
    avatar: Avatar3,
    rating: 3,
    comment:
      '"Robin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman."',
    author: "Robin Setiawan",
    role: "Mobile Engineer at KP",
  },
  {
    id: 4,
    avatar: Avatar4,
    rating: 4,
    comment:
      '"Tommy delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman."',
    author: "Tommy Rubicon",
    role: "Mobile Engineer at KP",
  },
];

export default function Testimonial() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const onNext = () => {
    carouselApi?.scrollNext();
  };

  const onPrev = () => {
    carouselApi?.scrollPrev();
  };
  return (
    <main className="mt-12">
      <div className="flex flex-col items-center main-spacing lg:items-start">
        <Button
          variant={"outline"}
          size={"sm"}
          className="bg-white rounded-full px-4 mb-2"
        >
          <p className="text-black font-bold">Testimony</p>
        </Button>

        <div>
          <h1 className="font-extrabold text-3xl text-center">
            Built with Trust & Collaboration
          </h1>
        </div>
      </div>

      <Carousel setApi={setCarouselApi} className="main-spacing">
        <CarouselContent>
          {listTestimonial.map((testimony) => {
            return (
              <CarouselItem
                className="px-12 py-16 lg:basis-1/3"
                key={testimony.id}
              >
                <CardTestimony
                  avatar={testimony.avatar}
                  author={testimony.author}
                  comment={testimony.comment}
                  rating={testimony.rating}
                  role={testimony.role}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="flex gap-4 justify-center">
        <div
          onClick={onPrev}
          className="border border-neutral-300 w-10 h-10 rounded-full flex items-center justify-center"
        >
          <Image alt="pagination" src={chevronLeft} />
        </div>
        <div
          onClick={onNext}
          className="border border-neutral-300 w-10 h-10 rounded-full flex items-center justify-center"
        >
          <Image alt="pagination" src={chevronRight} />
        </div>
      </div>
    </main>
  );
}

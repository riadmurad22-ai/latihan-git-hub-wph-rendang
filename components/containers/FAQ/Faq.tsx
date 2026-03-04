"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface IListAccordion {
  value: string;
  content: string;
  trigger: string;
}

const listAccordion: IListAccordion[] = [
  {
    value: "tech",
    content:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    trigger: "What technologies do you work with?",
  },
  {
    value: "working-arangement",
    content:
      "Yes, I am available for freelance projects and remote work arrangements worldwide.",
    trigger: "Do you work on freelance or remote projects?",
  },
  {
    value: "figma",
    content:
      "Absolutely! I can translate Figma, Sketch, or Adobe XD designs into high-quality, responsive code with pixel perfection.",
    trigger: "Can you convert Figma or Sketch designs into code?",
  },
  {
    value: "team",
    content:
      "I am comfortable working in Agile teams and collaborating with backend developers using modern workflows.",
    trigger: "Do you collaborate with backend developers or teams?",
  },
  {
    value: "time",
    content:
      "I am open to full-time roles that match my expertise and passion for frontend development.",
    trigger: "Are you available for full-time roles?",
  },
];

export default function Faq() {
  return (
    // Background section dengan warna gelap dan padding bawah 120px sesuai Figma
    <section
      id="faq"
      className="bg-[#0A0A0B] pt-24 pb-30 px-4 md:px-20 relative overflow-hidden"
    >
      {/* Container utama dengan Auto Layout padding sesuai data Figma */}
      <div className="max-w-200 mx-auto bg-white rounded-[40px] px-4 py-10 md:px-10 md:py-16 shadow-2xl">
        <div className="flex flex-col items-center mb-10">
          {/* Badge FAQ */}
          <Button
            variant={"outline"}
            size={"sm"}
            className="bg-white rounded-full px-5 mb-5 border-neutral-200 pointer-events-none h-8 shadow-sm"
          >
            <span className="text-black font-bold text-[10px] tracking-[0.15em] uppercase">
              FAQ
            </span>
          </Button>

          {/* Judul sesuai desain Figma */}
          <h2 className="font-extrabold text-3xl md:text-4xl text-center text-[#1E1E1E] leading-[1.2]">
            Need More Info? <br /> Start Here
          </h2>
        </div>

        {/* Accordion dengan Gap 8px sesuai data Auto Layout Figma */}
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-2"
        >
          {listAccordion.map((val) => (
            <AccordionItem
              key={val.value}
              value={val.value}
              // Padding internal 16px - 40px sesuai inspeksi Figma
              className="border border-neutral-100 rounded-4xl px-4 md:px-8 transition-all bg-[#F9FAFB] data-[state=open]:bg-white data-[state=open]:border-neutral-200 data-[state=open]:shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="text-left font-bold text-[15px] md:text-lg py-5 hover:no-underline text-[#1E1E1E]">
                {val.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-500 text-sm md:text-base pb-6 leading-relaxed">
                <div className="pt-2 border-t border-neutral-100 mt-1">
                  {val.content}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

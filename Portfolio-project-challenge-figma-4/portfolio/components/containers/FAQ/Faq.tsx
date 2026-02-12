import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    trigger: "Do you work on freelance or remote projects?",
  },
  {
    value: "figma",
    content:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    trigger: "Can you convert Figma or Sketch designs into code?",
  },
  {
    value: "team",
    content:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    trigger: "Do you collaborate with backend developers or teams?",
  },
  {
    value: "time",
    content:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    trigger: "Are you available for full-time roles?",
  },
];

export default function Faq() {
  return (
    <main className="bg-background px-4 py-12 mt-12 md:px-40">
      <div className="bg-white/40 backdrop-blur-xl px-4 py-6 rounded-2xl">
        <Card>
          <div className="flex flex-col items-center main-spacing">
            <Button
              variant={"outline"}
              size={"sm"}
              className="bg-white rounded-full px-4 mb-6"
            >
              <p className="text-black font-bold">FAQ</p>
            </Button>

            <div>
              <h1 className="font-extrabold text-3xl text-center">
                Need More Info? Start Here
              </h1>
            </div>
          </div>
          {listAccordion.map((val) => {
            return (
              <CardContent key={val.value}>
                <Accordion type="single" collapsible>
                  <AccordionItem value={val.value}>
                    <AccordionTrigger className="font-bold md:text-2xl">
                      {val.trigger}
                    </AccordionTrigger>
                    <div className="w-full h-px bg-neutral-200 mb-4" />
                    <AccordionContent className="md:text-xl">
                      {val.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            );
          })}
        </Card>
      </div>
    </main>
  );
}

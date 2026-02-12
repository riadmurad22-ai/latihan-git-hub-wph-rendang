import { Button } from "@/components/ui/button";
import CardSuperiority from "@/components/ui/card-superiority";
import developer from "@/assets/img/avatar.png";
import defaultAvatar from "@/assets/img/default_avatar.png";

const listMyPower = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "UI Design Proficiency (Figma)",
];

export default function Experience() {
  return (
    <main className="mt-12">
      <div className="flex flex-col items-center mb-8">
        <Button
          variant={"outline"}
          size={"sm"}
          className="bg-white rounded-full px-4 mb-2"
        >
          <p className="text-black font-bold">Superiority</p>
        </Button>

        <div className="px-6">
          <h1 className="font-extrabold text-3xl text-center">
            Built with design, speed, and UX in mind.
          </h1>
        </div>
      </div>

      <div className="md:flex gap-4">
        <CardSuperiority avatar={developer} list={listMyPower} />
        <CardSuperiority
          avatar={defaultAvatar}
          bg="bg-white"
          list={listMyPower}
        />
      </div>

      <div className="md:flex md:justify-center">
        <Button className="h-12 mt-8 w-full bg-primary-200 rounded-full md:w-80">
          <p className="text-lg">Hire Me</p>
        </Button>
      </div>
    </main>
  );
}

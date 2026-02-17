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
    /* id="experience" agar bisa diakses dari Navbar jika perlu */
    <section id="experience" className="mt-12 py-10">
      <div className="flex flex-col items-center mb-8">
        <Button
          variant={"outline"}
          size={"sm"}
          className="bg-white rounded-full px-4 mb-2 border-neutral-200"
        >
          <p className="text-black font-bold">Superiority</p>
        </Button>

        <div className="px-6">
          <h1 className="font-extrabold text-3xl text-center">
            Built with design, speed, and UX in mind.
          </h1>
        </div>
      </div>

      <div className="md:flex gap-4 px-4 md:px-0 max-w-6xl mx-auto">
        <CardSuperiority avatar={developer} list={listMyPower} />
        <CardSuperiority
          avatar={defaultAvatar}
          bg="bg-white"
          list={listMyPower}
        />
      </div>

      <div className="md:flex md:justify-center px-4 mt-8">
        {/* Tambah Anchor Link ke ID Contact */}
        <a href="#contact" className="w-full md:w-80">
          <Button className="h-14 w-full bg-[#3B82F6] hover:bg-blue-600 rounded-full text-white transition-all active:scale-95 shadow-lg">
            <p className="text-lg font-bold">Hire Me</p>
          </Button>
        </a>
      </div>
    </section>
  );
}

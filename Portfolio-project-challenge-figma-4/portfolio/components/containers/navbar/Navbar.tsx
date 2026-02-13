import Image from "next/image";
import Avatar from "@/assets/img/avatar.png";
import Burger from "@/assets/svg/burger.svg";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-transparent w-full p-5.5 text-foreground md:px-20">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Image alt="Avatar" src={Avatar} className="h-10.5 w-10.5" />

          <h1>Riad Murad</h1>
        </div>

        <ul className="hidden lg:flex lg:gap-12 ">
          <li className="text-shadow-black">Home</li>
          <li className="text-shadow-black">About</li>
          <li className="text-shadow-black">Skill</li>
          <li className="text-shadow-black">Project</li>
          <li className="text-shadow-black">FAQ</li>
        </ul>

        <div className="hidden lg:block">
          <Button className="bg-foreground w-60 rounded-full">
            <p className="text-black">Hire Me</p>
          </Button>
        </div>

        <div className="lg:hidden">
          <Image alt="menu" src={Burger} className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}

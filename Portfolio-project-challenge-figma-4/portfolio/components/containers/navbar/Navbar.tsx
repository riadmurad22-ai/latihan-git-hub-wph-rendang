"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@/assets/img/avatar.png";
import Burger from "@/assets/svg/burger.svg";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react"; // Import ikon silang untuk tutup menu mobile

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk scroll halus dan menutup menu mobile
  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* NAVBAR UTAMA */}
      <nav className="fixed top-0 left-0 z-50 w-full p-4 md:px-20 bg-black/50 backdrop-blur-md border-b border-white/10 text-white">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* KIRI: Logo & Nama */}
          <div className="flex gap-4 items-center">
            <Image
              alt="Avatar"
              src={Avatar}
              width={42}
              height={42}
              className="h-10 w-10 rounded-full border border-white/20"
            />
            <div className="flex flex-col">
              <h1 className="font-bold text-lg leading-none">Riad Murad</h1>
              <p className="text-[10px] text-neutral-400 hidden sm:block">
                riadmurad22@gmail.com
              </p>
            </div>
          </div>

          {/* TENGAH: Menu Navigasi Desktop */}
          <ul className="hidden lg:flex lg:gap-12 items-center">
            {["Home", "About", "Skill", "Project", "FAQ"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleScroll(item.toLowerCase())}
                  className="text-white/70 hover:text-white transition-colors font-medium"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* KANAN: Tombol Hire Me Desktop */}
          <div className="hidden lg:block">
            <Button
              className="bg-white hover:bg-neutral-200 text-black px-8 rounded-full font-bold transition-all shadow-lg"
              onClick={() => handleScroll("contact")}
            >
              Hire Me
            </Button>
          </div>

          {/* MOBILE: Burger Menu Button */}
          <div
            className="lg:hidden cursor-pointer p-2"
            onClick={() => setIsOpen(true)}
          >
            <Image alt="menu" src={Burger} className="w-6 h-6 invert" />
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY (Sesuai image_2244c1.png) */}
      <div
        className={`fixed inset-0 z-60 bg-white transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
      >
        <div className="p-6">
          {/* Header Mobile Menu */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex gap-3 items-center">
              <Image
                alt="Avatar"
                src={Avatar}
                width={35}
                height={35}
                className="rounded-full"
              />
              <span className="font-bold text-black">Riad Murad</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black">
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Nav Links Mobile */}
          <div className="flex flex-col gap-8">
            {["Home", "About", "Skill", "Projects", "FAQ"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  handleScroll(
                    item.toLowerCase() === "projects"
                      ? "project"
                      : item.toLowerCase(),
                  )
                }
                className="text-left text-2xl font-semibold text-black hover:text-blue-500"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Tombol Hire Me Mobile */}
          <div className="mt-12">
            <Button
              className="w-full bg-[#3B82F6] hover:bg-blue-600 py-7 rounded-2xl text-white font-bold text-lg"
              onClick={() => handleScroll("contact")}
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

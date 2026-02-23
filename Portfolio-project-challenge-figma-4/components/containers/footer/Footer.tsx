"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import avatar from "@/assets/img/avatar.png";
import ig from "@/assets/svg/ig.svg";
import fb from "@/assets/svg/fb.svg";
import linkedin from "@/assets/svg/linkedin.svg";
import tiktok from "@/assets/svg/tiktok.svg";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [status, setStatus] = useState<"idle" | "success" | "failed">("idle");
  // Menggunakan ref untuk memudahkan reset form
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulasi pengiriman pesan
      const isErrorSimulation = false;

      if (isErrorSimulation) {
        throw new Error("Simulated Error");
      }

      // 1. Set status sukses untuk memunculkan modal
      setStatus("success");

      // 2. RESET FORM agar isian Andy (Nama, Email, Message) hilang/kembali kosong
      formRef.current?.reset();
    } catch (error) {
      setStatus("failed");
    }
  };

  return (
    <footer
      id="contact"
      className="bg-[#0A0A0B] text-white pt-24 pb-12 px-6 md:px-20 font-sans relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="md:flex md:gap-24 lg:gap-32">
          {/* SISI KIRI: PROFIL */}
          <div className="md:flex-1 flex flex-col justify-between">
            <div>
              <div className="flex gap-4 items-center mb-10">
                <Image
                  alt="avatar"
                  src={avatar}
                  className="w-12 h-12 rounded-full border border-neutral-800"
                />
                <div className="flex flex-col">
                  <p className="font-bold text-lg leading-tight">Riad Murad</p>
                  <p className="text-sm text-neutral-500">
                    riadmurad22@gmail.com
                  </p>
                </div>
              </div>
              <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-12">
                Great results begin with <br /> clear ideas.
              </h1>
            </div>
            <div className="flex gap-5 mb-12 md:mb-0">
              <Image
                alt="fb"
                src={fb}
                className="w-8 h-8 cursor-pointer hover:opacity-70 transition-opacity"
              />
              <Image
                alt="ig"
                src={ig}
                className="w-8 h-8 cursor-pointer hover:opacity-70 transition-opacity"
              />
              <Image
                alt="linkedin"
                src={linkedin}
                className="w-8 h-8 cursor-pointer hover:opacity-70 transition-opacity"
              />
              <Image
                alt="tiktok"
                src={tiktok}
                className="w-8 h-8 cursor-pointer hover:opacity-70 transition-opacity"
              />
            </div>
          </div>

          {/* SISI KANAN: FORM */}
          <div className="md:flex-1">
            <div className="mb-10">
              <div className="inline-block border border-neutral-800 rounded-full px-5 py-1.5 mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                  Contact
                </span>
              </div>
              <h2 className="font-bold text-3xl md:text-4xl">
                Start Your Next Project
              </h2>
            </div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-10"
              autoComplete="off"
            >
              <div className="border-b border-neutral-800 flex flex-col gap-3 pb-3">
                <label className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                  Name<span className="text-blue-500">*</span>
                </label>
                <input
                  required
                  name="full_name"
                  placeholder="What should I call you?..."
                  className="bg-transparent outline-none text-lg text-white w-full"
                />
              </div>
              <div className="border-b border-neutral-800 flex flex-col gap-3 pb-3">
                <label className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                  Email<span className="text-blue-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  name="email_address"
                  placeholder="Where can I reach you? ..."
                  className="bg-transparent outline-none text-lg text-white w-full"
                />
              </div>
              <div className="border-b border-neutral-800 flex flex-col gap-3 pb-3">
                <label className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                  Message<span className="text-blue-500">*</span>
                </label>
                <textarea
                  required
                  name="project_message"
                  placeholder="Tell me about your project or just say hi :) ..."
                  className="bg-transparent outline-none text-lg text-white w-full resize-none h-12"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#3B82F6] hover:bg-blue-600 py-7 rounded-full text-white font-bold text-lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* --- MODAL OVERLAY --- */}
        {status !== "idle" && (
          <div className="fixed inset-0 z-999 flex items-center justify-center p-6">
            {/* Latar Belakang: Menggunakan efek sesuai Figma (Opacity 25%, Blur Tipis) */}
            <div
              className="absolute inset-0 bg-black/25 backdrop-blur-xs animate-in fade-in duration-300"
              onClick={() => setStatus("idle")}
            />

            <div className="relative bg-white rounded-[40px] overflow-hidden max-w-sm w-full shadow-2xl animate-in zoom-in duration-300">
              {status === "success" ? (
                <>
                  <div className="bg-[#F97316] p-12 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-24 h-20 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -top-3 -right-3 bg-[#22C55E] rounded-full p-1.5 border-4 border-[#F97316]">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="4"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-10 text-center bg-white">
                    <h2 className="text-3xl font-black text-black mb-4">
                      Got Your Message!
                    </h2>
                    <p className="text-neutral-500 mb-10">
                      Really appreciate you reaching out. I'll be in touch soon.
                    </p>
                    <Button
                      onClick={() => setStatus("idle")}
                      className="w-full bg-[#3B82F6] hover:bg-blue-600 rounded-full py-7 text-white font-bold text-lg"
                    >
                      Back to Home
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-[#E5E7EB] p-12 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-24 h-20 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -top-3 -right-3 bg-[#EF4444] rounded-full p-1.5 border-4 border-[#E5E7EB]">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="4"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-10 text-center bg-white">
                    <h2 className="text-2xl font-black text-black mb-4">
                      Message Failed to Send
                    </h2>
                    <p className="text-neutral-500 mb-10">
                      Sorry about that. Please check your connection and try
                      again.
                    </p>
                    <Button
                      onClick={() => setStatus("idle")}
                      className="w-full bg-[#3B82F6] hover:bg-blue-600 rounded-full py-7 text-white font-bold text-lg"
                    >
                      Try Again
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

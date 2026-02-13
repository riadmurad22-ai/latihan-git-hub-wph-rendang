import Image from "next/image";

import avatar from "@/assets/img/avatar.png";
import ig from "@/assets/svg/ig.svg";
import fb from "@/assets/svg/fb.svg";
import linkedin from "@/assets/svg/linkedin.svg";
import tiktok from "@/assets/svg/tiktok.svg";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <main>
      <div className="bg-black text-foreground main-spacing md:flex md:gap-16">
        <div className="md:flex-1 md:flex md:flex-col md:justify-between">
          <div className="flex gap-4 items-center mb-6">
            <Image alt="avatar" src={avatar} className="w-15 h-15" />

            <div className="flex flex-col gap-2">
              <p>Riad Murad</p>
              <p>riadmurad@gmail.com</p>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h1 className="font-bold text-2xl">
                Great results begin with clear ideas.
              </h1>
            </div>
            <div className="flex gap-4">
              <Image alt="fb" src={fb} />
              <Image alt="ig" src={ig} />
              <Image alt="linkedin" src={linkedin} />
              <Image alt="tiktok" src={tiktok} />
            </div>
          </div>
          <div className="border-b border-b-neutral-50 my-6 md:hidden" />
        </div>

        <div className="md:flex-1 md:px-20">
          <div className="flex flex-col items-start mb-6">
            <Button
              variant={"outline"}
              size={"sm"}
              className="bg-transparent rounded-full mb-2"
            >
              <p className="text-sm">Contact</p>
            </Button>

            <div>
              <h1 className="font-extrabold text-2xl text-center">
                Start Your Next Project
              </h1>
            </div>
          </div>

          <div>
            <form>
              <div className="border-b border-b-neutral-200 flex flex-col gap-4 mb-4">
                <label htmlFor="name">
                  Name<span className="text-destructive">*</span>
                </label>
                <input
                  id="name"
                  placeholder="What should I call you?..."
                  className="mb-2"
                />
              </div>
              <div className="border-b border-b-neutral-200 flex flex-col gap-4 mb-4">
                <label htmlFor="email">
                  Email<span className="text-destructive">*</span>
                </label>
                <input
                  id="email"
                  placeholder="Where can I reach you? ..."
                  className="mb-2"
                />
              </div>
              <div className="border-b border-b-neutral-200 flex flex-col gap-4 mb-4">
                <label htmlFor="message">
                  Message<span className="text-destructive">*</span>
                </label>
                <input
                  id="message"
                  placeholder="Tell me about your project or just say hi :) ..."
                  className="mb-2"
                />
              </div>
            </form>
          </div>

          <div>
            <Button className="w-full bg-primary-200 py-6 rounded-full">
              <p>Send Message</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-black text-foreground flex justify-center py-8">
        <p> &copy; {new Date().getFullYear()} Riad Murad. All rights reserved.</p>
      </div>
    </main>
  );
}

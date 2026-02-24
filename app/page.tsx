import About from "@/components/containers/about/About";
import Experience from "@/components/containers/experience/Experience";
import Faq from "@/components/containers/FAQ/Faq";
import Footer from "@/components/containers/footer/Footer";
import Hero from "@/components/containers/hero/Hero";
import Portfolio from "@/components/containers/portfolio/Portfolio";
import Skillset from "@/components/containers/skillset/Skillset";
import Testimonial from "@/components/containers/testimonial/Testimonial";
import WorkExperience from "@/components/containers/work-experience/WorkExperience";
import gridPattern from "@/assets/svg/pattern/grid.svg";
import ellipse1 from "@/assets/svg/pattern/ellipse1.svg";
import ellipse2 from "@/assets/svg/pattern/ellipse2.svg";
import ellipse3 from "@/assets/svg/pattern/ellipse3.svg";
import ellipse4 from "@/assets/svg/pattern/ellipse4.svg";
import Image from "next/image";
import Navbar from "@/components/containers/navbar/Navbar";

export default function Home() {
  return (
    <main className="bg-white ">
      <section
        id="hero"
        className="bg-background text-foreground relative overflow-hidden"
      >
        <Navbar />

        <div className="main-spacing">
          <Hero />
        </div>

        <div className="absolute bottom-0 rotate-180">
          <Image
            alt="grid pattern"
            src={gridPattern}
            className="w-screen h-100 object-cover"
          />
        </div>
        <div className="absolute top-0 ">
          <Image
            alt="grid pattern"
            src={gridPattern}
            className="w-screen h-100 object-cover"
          />
        </div>
        <div className="absolute top-30 lg:top-120">
          <Image
            alt="grid pattern"
            src={ellipse1}
            className="object-cover lg:w-160 blur-lg lg:scale-400 "
          />
        </div>
        <div className="absolute -right-20 top-20">
          <Image
            alt="grid pattern"
            src={ellipse2}
            className="object-cover lg:scale-200 blur-sm"
          />
        </div>

        <div className="absolute top-20  lg:left-100">
          <Image
            alt="grid pattern"
            src={ellipse3}
            className="object-cover  blur-sm scale-400 "
          />
        </div>
        <div className="absolute -bottom-5 lg:-bottom-200">
          <Image
            alt="grid pattern"
            src={ellipse4}
            className="w-screen object-fill "
          />
        </div>
      </section>

      <section id="about">
        <div className="main-spacing">
          <About />
        </div>
      </section>

      <section id="skillset" className="mt-8">
        <Skillset />
      </section>

      <section id="experience" className="main-spacing">
        <Experience />
      </section>

      <section id="portfolio" className="main-spacing">
        <Portfolio />
      </section>

      <section id="work-experience">
        <WorkExperience />
      </section>

      <section id="testimonial">
        <Testimonial />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}

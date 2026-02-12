import About from "@/components/containers/about/About";
import Experience from "@/components/containers/experience/Experience";
import Faq from "@/components/containers/FAQ/Faq";
import Footer from "@/components/containers/footer/Footer";
import Hero from "@/components/containers/hero/Hero";
import Portfolio from "@/components/containers/portfolio/portfolio";
import Skillset from "@/components/containers/skillset/Skillset";
import Testimonial from "@/components/containers/testimonial/Testimonial";
import WorkExperience from "@/components/containers/work-experience/WorkExperience";

export default function Home() {
  return (
    <main className="bg-white">
      <section id="hero" className="bg-background main-spacing text-foreground">
        <Hero />
      </section>

      <section id="about" className="main-spacing">
        <About />
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

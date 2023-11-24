import Header from "@/app/ui/sections/Header";
import CalButton from "@/app/ui/buttons/CalButton";
import Projects from "@/app/ui/sections/Projects";
import Testimonials from "@/app/ui/sections/Testimonials";
import Services from "@/app/ui/sections/Services";
import Reveal from "@/app/ui/Reveal";
import About from "@/app/ui/sections/About";
import Advantages from "@/app/ui/sections/Advantages";

export default function Home() {
  return (
    <main>
      <CalButton />
      <Header />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Advantages />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
    </main>
  );
}

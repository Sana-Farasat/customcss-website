import Image from "next/image";
import About from "./about/page";
import Contact from "./contact/page";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main
      className="hero-container "
      style={{ maxWidth: "1500px", margin: "0 auto" }}
    >
      <div>
        <Hero />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Contact />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}

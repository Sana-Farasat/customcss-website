import "../style/hero.css";
import Image from "next/image";
import Card from "./cards/card1";
import Card2 from "./cards/card2";
import Card3 from "./cards/card3";
import Card5 from "./cards/card5";
import Card4 from "./cards/card4";
import Card6 from "./cards/card6";

export default function Hero() {
  return (
    <main className="hero-section ">
      <div>
        <Image
          src="/heroimage.png"
          alt="Hero-Image"
          width={500}
          height={100}
          layout="responsive"
        />
      </div>
      <div className="hero-sub-container">
        <Card />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
      </div>
    </main>
  );
}

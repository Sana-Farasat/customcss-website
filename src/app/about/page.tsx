import Image from "next/image";
import "../../style/about.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="about-container">
      <h1>About Me</h1>
      <h2 className="about-head">
        Hi there! I&apos;m Sana Farasat, and welcome to my travel blog!
      </h2>
      <p className="about-para">
        I am an avid traveler, explorer, and adventure seeker who believes that
        the best way to learn about the world is to see it with your own eyes.
        For me, traveling is not just about visiting new places but about
        discovering new cultures, meeting fascinating people, and experiencing
        life from a different perspective.
      </p>
      <br />
      <Image
        src="/turkey1.jpg"
        alt="Turkey"
        height={300}
        width={800}
        id="image1"
      />
      <br />
      <p className="about-para">
        I started my travel journey back in 2021, when I took my first solo trip
        to Turkey. It was an eye-opening experience, and since then, I&apos;ve been
        hooked on exploring new corners of the world. From trekking through the
        jungles of Costa Rica to exploring the ancient ruins of Greece, I&apos;ve
        been fortunate enough to visit some truly incredible places. My goal
        with this blog is to inspire others to pack their bags and start their
        own adventures.
      </p>
      <br />
      <div className="image-container">
        <Image
          src="/turkey2.jpg"
          alt="Turkey"
          height={200}
          width={400}
          className="image2"
        />
        <Image
          src="/turkey3.jpg"
          alt="Turkey"
          height={200}
          width={400}
          className="image2"
        />
        <Image
          src="/turkey4.jpg"
          alt="Turkey"
          height={200}
          width={400}
          className="image2"
        />
      </div>
      <br />
    </main>
  );
}

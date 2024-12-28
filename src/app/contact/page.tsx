import Image from "next/image";
import "../../style/contact.css";

export default function Contact() {
  return (
    <main className="contact-container">
      <div className="contact-content">
        <div className="contact-div1">
          <Image
            src="/worldmapimage.webp"
            alt="World-Map"
            height={400}
            width={500}
            layout="responsive"
          />
        </div>

        <div className="contact-div2">
          <h2 className="contact-head">Contact Us</h2>
          <input type="text" placeholder="Enter Your Name" />
          <input
            type="email"
            name="mail"
            id="email"
            placeholder="Enter Your Email"
          />
          <br />
          <textarea name="message" id="text" rows={5} cols={20}>
            Type Your Message Here......
          </textarea>
          <button className="contact-btn">Send</button>
        </div>
      </div>
    </main>
  );
}

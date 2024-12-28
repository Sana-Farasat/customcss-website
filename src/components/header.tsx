import { header } from "framer-motion/client";
import "../style/header.css";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logoDiv">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </div>
        <div className="navDiv">
          <nav>
            <ul className="nav-ul">
              <li>
                <Link href="/">
                  <button className="nav-btn">Home</button>
                </Link>
              </li>
              <li>
                <button className="nav-btn">
                  <Link href="/about"> About</Link>
                </button>
              </li>
              <li>
                <button className="nav-btn">
                  <Link href="/contact"> Contact</Link>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <Sheet>
            <SheetTrigger className="menuDiv">
              <AlignJustify />
            </SheetTrigger>
            <SheetContent>
              <ul className="nav-ul menuIcons">
                <li>
                  <Link href="/">
                    <button className="nav-btn">Home</button>
                  </Link>
                </li>
                <li>
                  <button className="nav-btn">
                    <Link href="/about"> About</Link>
                  </button>
                </li>
                <li>
                  <button className="nav-btn">
                    <Link href="/contact"> Contact</Link>
                  </button>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";
import "../../globals.css";

export default function RedSculpturePage() {
  const images = [
    { src: "/art-1.jpg", alt: "Red sculpture view 1" },
    { src: "/art-2.jpg", alt: "Red sculpture view 2" },
    { src: "/art-3.jpg", alt: "Red sculpture view 3" },
    { src: "/art-4.jpg", alt: "Red sculpture view 4" },
  ];

  return (
    <main className="scattered-page">
      <div className="scattered-text-block">
        <h1 className="scattered-title">Sit the FQ down</h1>
        <p className="scattered-paragraph">
          This project explores modern relationships by using the romance that underlay the dish "Fuqi Feipian." 
          Instead of presenting the problem directly, I explored the tracheal structure of the lung and turned it into a chair's supporting mechanism. 
          The chair aims to enhance physical and visual contact between couples by forcing close seating. 
          In this case, the lungs, an internal organ can be a representation and means for solving relational problems that arise outside of the body (couples).
        </p>
      </div>
      <section className="scattered-gallery">
        <div className="art-item art-1">
          <Image src="/art-3-bgless.png" alt="Large hanging piece" width={500} height={700} className="art-img" />
        </div>
        <div className="art-item art-2">
          <Image src="/art-4-bgless.png" alt="Small hanging piece" width={300} height={400} className="art-img" />
        </div>
        <div className="art-item art-3">
          <Image src="/art-1-bgless.png" alt="Large chair piece" width={600} height={700} className="art-img" />
        </div>
        <div className="art-item art-4">
          <Image src="/art-2-bgless.png" alt="Small chair piece" width={400} height={500} className="art-img" />
        </div>
      </section>

      <footer className="gallery-footer">
        <Link href="/" className="back-link">
          Go Back
        </Link>
      </footer>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import "../../globals.css";

export default function DancingLegPage() {
  const images = [
    { src: "/table-1.jpg", alt: "Table view 1", className: "img-large" },
    { src: "/table-2.jpg", alt: "Table view 2", className: "img-small" },
    { src: "/table-3.jpg", alt: "Table view 3", className: "img-small" },
  ];

  return (
    <main className="gallery-page">
      <section className="gallery-content">
        <div className="gallery-stack">
          <Image src="/table-1.jpg" alt="Dancing leg 1" width={600} height={400} className="gallery-img-item" priority />
          <Image src="/table-2.jpg" alt="Dancing leg 2" width={600} height={400} className="gallery-img-item" />
          <Image src="/table-3.jpg" alt="Dancing leg 3" width={600} height={400} className="gallery-img-item" />
        </div>

        <div className="gallery-info-side">
          <h1 className="gallery-title-alt">Dancing leg</h1>
          <p className="gallery-description-alt">
            This coffee table looks like it shouldn’t be stable, like it’s almost breaking the rules, but it still stands. 
            The angled supports make it feel like it’s floating, creating both tension and balance. 
            The design is simple, but it makes you think, sitting between function and something more conceptual.
          </p>
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

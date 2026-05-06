import Link from "next/link";
import Image from "next/image";
import "../../globals.css";

export default function Page20230116() {
  return (
    <main className="gallery-page" style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', position: 'relative' }}>
      <div className="left-middle-text">
        <h1 className="scattered-title">NAP NAP</h1>
        <p className="scattered-paragraph" style={{ textAlign: 'left', fontSize: '0.8rem', lineHeight: '1.4', opacity: 0.8 }}>
          This table desk light is inspired by a Chinese lantern, opening and closing through touch. When pulled, the hole closes and the light softens; when pressed, it opens and glows. Inside, interchangeable cushions create different levels of comfort. Some can hold calming scents for better sleep. It’s designed for short naps, blending light, softness, and interaction into a quiet, restful experience.
        </p>
      </div>
      <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: '2rem', width: '100%', paddingLeft: 'calc(5vw + 400px)', paddingRight: '2rem', overflowX: 'auto' }}>
        <Image src="/2023-01-16-2.png" alt="Artwork view 2" width={600} height={800} style={{ height: '50vh', width: 'auto', objectFit: 'contain', borderRadius: '4px', flexShrink: 0 }} />
        <Image src="/2023-01-16-3.png" alt="Artwork view 3" width={600} height={800} style={{ height: '50vh', width: 'auto', objectFit: 'contain', borderRadius: '4px', flexShrink: 0 }} />
        <Image src="/2023-01-16-4.png" alt="Artwork view 4" width={600} height={800} style={{ height: '50vh', width: 'auto', objectFit: 'contain', borderRadius: '4px', flexShrink: 0 }} />
      </section>

      <footer className="gallery-footer">
        <Link href="/" className="back-link">
          Go Back
        </Link>
      </footer>
    </main>
  );
}

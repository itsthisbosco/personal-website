import Link from "next/link";
import Image from "next/image";
import "../../globals.css";

export default function Page20231116() {
  return (
    <main className="gallery-page" style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', gap: '3vw', padding: '0 5vw', overflowX: 'hidden' }}>
        <Image 
          src="/2023-11-16-model-new.png" 
          alt="Hand model" 
          width={1200} 
          height={1200} 
          style={{ width: 'auto', height: '60vh', objectFit: 'contain', mixBlendMode: 'multiply', marginRight: '3vw', filter: 'contrast(1.1) brightness(1.05)' }}
          priority 
        />

        <div style={{ flex: '0 0 300px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h1 className="scattered-title" style={{ fontSize: '2rem', margin: 0 }}>Hang</h1>
          <p className="scattered-paragraph" style={{ textAlign: 'center', fontSize: '0.8rem', lineHeight: '1.4', opacity: 0.8 }}>
            I designed a clothes hanger based on hand shadows and gestures. I started by looking at how hands create shapes with light and movement. Then I removed the actual hand and kept only the outline and structure. The result is simple but still familiar, working as a hanger while quietly showing the idea of human gestures.
          </p>
        </div>

        <Image 
          src="/2023-11-16.png" 
          alt="Hand sketches" 
          width={800} 
          height={800} 
          style={{ width: 'auto', height: '50vh', objectFit: 'contain', mixBlendMode: 'multiply' }}
        />
      </section>

      <footer className="gallery-footer" style={{ position: 'absolute', bottom: '5vh' }}>
        <Link href="/" className="back-link">
          Go Back
        </Link>
      </footer>
    </main>
  );
}

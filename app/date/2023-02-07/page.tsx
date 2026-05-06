import Link from "next/link";
import Image from "next/image";
import "../../globals.css";

export default function Page20230207() {
  return (
    <main className="gallery-page">
      <section className="gallery-content" style={{ justifyContent: 'center' }}>
        <div className="gallery-stack" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', paddingRight: 0 }}>
          <Image src="/2023-02-07-1.png" alt="Artwork view 1" width={800} height={800} className="gallery-img-item" style={{ height: 'auto', maxHeight: '80vh', objectFit: 'contain', margin: '0 auto' }} priority />
          
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4rem', width: '100%', marginTop: '4rem' }}>
            <div style={{ flex: '0 0 350px', textAlign: 'left' }}>
              <h1 className="scattered-title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>CHAIR</h1>
              <p className="scattered-paragraph" style={{ textAlign: 'left', fontSize: '0.8rem', lineHeight: '1.4', opacity: 0.8 }}>
                This chair is made from vertical tubes that move when you sit on it. Instead of staying fixed, it shifts and adjusts to your body. It changes depending on how you sit, creating a different feeling each time. It feels soft but still structured, turning sitting into something active, not just a fixed position.
              </p>
            </div>
            <Image src="/2023-02-07-2.png" alt="Artwork view 2" width={800} height={800} className="gallery-img-item" style={{ height: 'auto', maxHeight: '80vh', objectFit: 'contain', flex: 1 }} />
          </div>
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

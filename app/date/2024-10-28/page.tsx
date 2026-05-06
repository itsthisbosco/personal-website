import Link from "next/link";
import Image from "next/image";
import "../../globals.css";

export default function Page20241028() {
  return (
    <main className="gallery-page" style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100vh', overflowY: 'auto' }}>
      {/* First section - sketch */}
      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100%', padding: '2rem', flexShrink: 0 }}>
        <Image 
          src="/2024-10-28.jpg" 
          alt="Hand sketches" 
          width={1200} 
          height={1200} 
          style={{ width: 'auto', height: '80vh', objectFit: 'contain', mixBlendMode: 'multiply' }}
          priority 
        />
      </section>

      {/* Second section - two new photos rotated 90deg clockwise */}
      <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100%', gap: '3vw', padding: '2rem', flexShrink: 0 }}>
        <Image 
          src="/2024-10-28-2.jpg" 
          alt="Model view 1" 
          width={800} 
          height={1200} 
          style={{ width: 'auto', height: '15vw', maxHeight: '60vh', objectFit: 'contain', transform: 'rotate(90deg)' }}
        />
        <Image 
          src="/2024-10-28-3.jpg" 
          alt="Model view 2" 
          width={800} 
          height={1200} 
          style={{ width: 'auto', height: '15vw', maxHeight: '60vh', objectFit: 'contain', transform: 'rotate(90deg)' }}
        />
      </section>

      <footer className="gallery-footer" style={{ 
        position: 'relative', 
        width: '100%', 
        padding: '2rem 5vw', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end',
        gap: '4rem',
        left: '0',
        transform: 'none',
        marginTop: '-5vh'
      }}>
        <div style={{ maxWidth: '500px' }}>
          <h1 className="scattered-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>pen14$</h1>
          <p className="scattered-paragraph" style={{ margin: 0, fontSize: '0.8rem', textAlign: 'left', lineHeight: '1.4', opacity: 0.8 }}>
            I designed a pen shaped like a simplified penis form, inspired by healthcare and ergonomics. The shape is not meant to be explicit, but to explore how organic forms can improve grip and comfort. It fits naturally in the hand, making writing feel more controlled and intuitive, while also questioning how we perceive sensitive forms in everyday objects.
          </p>
        </div>
        <Link href="/" className="back-link" style={{ whiteSpace: 'nowrap' }}>
          Go Back
        </Link>
      </footer>
    </main>
  );
}

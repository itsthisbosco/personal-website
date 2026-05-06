import Link from "next/link";
import Image from "next/image";
import "../../globals.css";

export default function Page20250526() {
  return (
    <main className="gallery-page" style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', backgroundColor: '#000' }}>
      <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', gap: '1vw', padding: '0 2vw' }}>
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image 
              src={`/2025-05-26-${num}.png`} 
              alt={`Chair render ${num}`} 
              width={400} 
              height={800} 
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxHeight: '90vh',
                objectFit: 'contain'
              }} 
            />
          </div>
        ))}
      </section>

      <div style={{ position: 'absolute', bottom: '12vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff', zIndex: 100, padding: '0 20px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Lie-brary/</h2>
        <p style={{ fontSize: '1rem', textAlign: 'center', maxWidth: '800px', margin: '0', lineHeight: '1.6', opacity: 0.8 }}>
          I designed a chair for Stockwell Community Trust with two ways to sit. One side allows you to lay down and relax, while the other is for sitting with family. The back of the chair includes storage for books, so people can easily take one and read. It creates a comfortable, shared space for rest and reading.
        </p>
      </div>

      <footer className="gallery-footer" style={{ position: 'absolute', bottom: '4vh' }}>
        <Link href="/" className="back-link" style={{ color: '#fff' }}>
          Go Back
        </Link>
      </footer>
    </main>
  );
}

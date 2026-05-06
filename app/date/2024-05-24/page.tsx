import Link from "next/link";
import Image from "next/image";
import "../../globals.css";

export default function Page20240524() {
  return (
    <main className="gallery-page" style={{ overflow: 'hidden', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', gap: '2vw', padding: '0 2vw' }}>
        {[1, 2, 3, 4].map((num) => (
          <div key={num} style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image 
              src={`/2024-05-24-${num}.jpg`} 
              alt={`Artwork view ${num}`} 
              width={800} 
              height={1200} 
              style={{ 
                width: 'auto', 
                height: '22vw', 
                maxHeight: '80vh',
                objectFit: 'contain', 
                transform: 'rotate(90deg)',
                borderRadius: '4px'
              }} 
            />
          </div>
        ))}
      </section>

      <footer className="gallery-footer" style={{ 
        position: 'absolute', 
        bottom: '5vh', 
        width: '100%', 
        padding: '0 5vw', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end',
        gap: '4rem'
      }}>
        <div style={{ maxWidth: '500px' }}>
          <h1 className="scattered-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>LAMP</h1>
          <p className="scattered-paragraph" style={{ margin: 0, fontSize: '0.8rem', textAlign: 'left', lineHeight: '1.4', opacity: 0.8 }}>
            I made a floor lamp using a wasted telescope as the stand. I reused its structure so the light can still adjust and move. For the light cover, I used wasted paper and shaped it in different forms using a weaving technique. It combines reuse and making, turning waste into a functional and expressive object.
          </p>
        </div>
        <Link href="/" className="back-link" style={{ whiteSpace: 'nowrap' }}>
          Go Back
        </Link>
      </footer>
    </main>
  );
}

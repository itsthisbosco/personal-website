import Link from "next/link";
import "../../../../globals.css";

export default function MorePage() {
  return (
    <main style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#000', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '600px', color: 'white', textAlign: 'center', padding: '0 2rem' }}>
        <p style={{ color: 'white', opacity: 0.6, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '1rem' }}>
          More Details Coming Soon / 更多細節即將推出
        </p>
      </div>

      <footer className="gallery-footer" style={{ position: 'absolute', bottom: '5vh', zIndex: 100, left: '50%', transform: 'translateX(-50%)' }}>
        <Link href="/date/2026-future/next" className="back-link" style={{ color: '#fff', borderColor: '#fff' }}>
          Go Back
        </Link>
      </footer>
    </main>
  );
}

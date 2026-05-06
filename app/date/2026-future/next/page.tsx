import Link from "next/link";
import Image from "next/image";
import "../../../globals.css";

export default function NextPage() {
  return (
    <main style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#fff', 
      display: 'flex', 
      flexDirection: 'row',
      justifyContent: 'center', 
      alignItems: 'center',
      gap: '8vw',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 5vw'
    }}>
      {/* Main Image Container */}
      <div style={{
        width: '50vw', 
        height: '40vh',
        position: 'relative',
        transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
        flexShrink: 0
      }}>
        <Image 
          src="/2026-future-pukgaai.jpg" 
          alt="Puk Gaai Design Concept" 
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Description Text */}
      <div style={{ 
        maxWidth: '450px', 
        color: '#000', 
        textAlign: 'left', 
        zIndex: 10 
      }}>
        <p style={{ fontSize: '0.9rem', lineHeight: '1.7', opacity: 0.8, margin: 0, fontWeight: '400' }}>
          This project is shaped by my experience of growing up in Hong Kong, where
          communication depends heavily on tone, context, and shared understanding rather
          than direct explanation. Cantonese, as a tonal language, taught me that meaning is
          often negotiated through interaction, and that misunderstanding is a normal part of
          everyday life. This way of communicating has strongly influenced how I think about
          design. Instead of expecting objects to be immediately clear or universally understood,
          I am more interested in how people interpret, adjust to, and sometimes misread them.
        </p>
      </div>
      
      {/* Footer */}
      <footer className="gallery-footer" style={{ position: 'absolute', bottom: '5vh', zIndex: 100, left: '50%', transform: 'translateX(-50%)' }}>
        <Link href="/date/2026-alternate" className="back-link" style={{ color: '#000', borderColor: '#000' }}>
          Go Back
        </Link>
      </footer>

      {/* More Button - Navigates to next page */}
      <div style={{ 
        position: 'absolute', 
        bottom: '5vh', 
        right: '5vw', 
        zIndex: 10 
      }}>
        <Link 
          href="/date/2026-future/next/more"
          style={{
            display: 'block',
            textDecoration: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            color: '#000',
            padding: '1rem 3rem',
            borderRadius: '2px',
            fontSize: '0.9rem',
            fontWeight: '900',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            textTransform: 'uppercase',
            letterSpacing: '0.2em'
          }}
        >
          More
        </Link>
      </div>
    </main>
  );
}

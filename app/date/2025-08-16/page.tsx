"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../globals.css";

export default function Page20250816() {
  const [showMore, setShowMore] = useState(false);

  const moreImages = [
    { src: "/2025-08-16-more-1.png", ext: "png" },
    { src: "/2025-08-16-more-2.png", ext: "png" },
    { src: "/2025-08-16-more-3.jpg", ext: "jpg" },
    { src: "/2025-08-16-more-4.png", ext: "png" },
    { src: "/2025-08-16-more-5.jpg", ext: "jpg" },
  ];

  return (
    <main style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'relative', 
      overflow: 'hidden', 
      backgroundColor: '#000' 
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        padding: '5vh 5vw'
      }}>
        <div style={{ 
          position: 'relative', 
          width: '70vw', 
          height: '70vh',
          opacity: showMore ? 0.2 : 1, 
          transition: 'opacity 0.5s ease' 
        }}>
          <Image 
            src="/2025-08-16.png" 
            alt="TIME FOR CHECK Design 8K" 
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
      
      {/* Research Text */}
      {!showMore && (
        <div style={{ 
          position: 'absolute', 
          top: '5vh', 
          right: '5vw', 
          maxWidth: '400px', 
          textAlign: 'right', 
          color: '#fff', 
          zIndex: 10 
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '900', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TIME TO CHECK</h2>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.6', margin: 0, opacity: 0.7, fontWeight: '400' }}>
            Design a neutral-but-edgy candle holder and hint at wellness in my research: 
            "Exploration of how design can confront taboos through metaphor." 
            This keeps my project innovative yet professional. 
            The intention of this project is to create a product that reminds people how safe sex is important to young people and show the message behind though the product it own.
          </p>
        </div>
      )}

      <footer className="gallery-footer" style={{ position: 'absolute', bottom: '5vh', left: '50%', transform: 'translateX(-50%)', zIndex: 100 }}>
        <Link href="/" className="back-link" style={{ color: '#fff', borderColor: '#fff' }}>
          Go Back
        </Link>
      </footer>

      {/* More Button */}
      {!showMore && (
        <div style={{ 
          position: 'absolute', 
          bottom: '5vh', 
          right: '5vw', 
          zIndex: 10 
        }}>
          <button 
            onClick={() => setShowMore(true)}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#fff',
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
          </button>
        </div>
      )}

      {/* Horizontal rotated images section */}
      {showMore && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 150,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5vw',
          padding: '0 10vw',
          backgroundColor: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(10px)',
          animation: 'galleryFadeIn 0.5s ease forwards'
        }}>
          {moreImages.map((img, index) => (
            <div key={index} style={{
              flex: '0 0 auto',
              width: '12vw',
              transform: 'rotate(90deg)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image 
                src={img.src}
                alt={`Detail ${index + 1}`}
                width={800}
                height={600}
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  objectFit: 'contain',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                }}
              />
            </div>
          ))}

          <button 
            onClick={() => setShowMore(false)}
            style={{
              position: 'absolute',
              top: '5vh',
              right: '5vw',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              fontWeight: '200'
            }}
          >
            ✕
          </button>
        </div>
      )}
    </main>
  );
}

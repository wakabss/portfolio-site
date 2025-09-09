'use client';
import './globals.css';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    handleResize(); // on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'row',
            alignItems: 'flex-start',
            maxWidth: '1100px',
            margin: '2rem auto',
            padding: isMobile ? '1rem' : '2rem 3rem',
            gap: isMobile ? '1rem' : '4rem',
            boxSizing: 'border-box',
          }}
        >
          {/* Left Side: Name, Nav, and Image */}
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'row' : 'column',
              alignItems: isMobile ? 'flex-start' : 'stretch',
              justifyContent: 'space-between',
              gap: '1rem',
              flexShrink: 0,
              width: isMobile ? '100%' : '220px',
            }}
          >
            {/* Text + Nav Links */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Georgia, serif',
                fontSize: isMobile ? '15px' : '16px',
                gap: '0.4rem',
                flex: isMobile ? '1 1 auto' : 'unset',
              }}
            >
              <h2
                style={{
                  fontSize: isMobile ? '1.4rem' : '1.6rem',
                  fontWeight: 'bold',
                  lineHeight: 1.2,
                  margin: 0,
                  textTransform: 'uppercase',
                }}
              >
                WAKABA<br />OTO
              </h2>

              <a href="/" style={{ textDecoration: 'underline' }}>About</a>
              <a href="/reported" style={{ textDecoration: 'underline' }}>Reported Work</a>
              <a href="/creative" style={{ textDecoration: 'underline' }}>Creative Work</a>
              <a href="/contact" style={{ textDecoration: 'underline' }}>Contact</a>
            </div>

            {/* Portrait Image */}
            <img
              src="/subject4.png"
              alt="Portrait of Wakaba Oto"
              style={{
                width: isMobile ? '100px' : '100%',
                height: isMobile ? 'auto' : '100%',
                objectFit: 'cover',
                borderRadius: '8px',
                alignSelf: isMobile ? 'flex-start' : 'flex-end',
              }}
            />
          </div>

          {/* Right Side: Main Text */}
          <main
            style={{
              flex: 1,
              fontSize: '0.95rem',
              lineHeight: 1.7,
              minWidth: 0,
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

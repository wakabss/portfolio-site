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
            flexDirection: 'column',
            maxWidth: '1100px',
            margin: '2rem auto',
            padding: '2rem 1.5rem',
            boxSizing: 'border-box',
            gap: '2rem',
          }}
        >
          {/* Sidebar Block (Name + Nav + Image) */}
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'row' : 'column',
              justifyContent: isMobile ? 'space-between' : 'flex-start',
              alignItems: isMobile ? 'flex-start' : 'stretch',
              width: '100%',
              gap: '1rem',
            }}
          >
            {/* Name + Nav */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Georgia, serif',
                fontSize: isMobile ? '15px' : '16px',
                gap: '0.4rem',
                flex: isMobile ? '1 1 auto' : 'none',
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

            {/* Image */}
            <img
              src="/subject4.png"
              alt="Portrait of Wakaba Oto"
              style={{
                width: isMobile ? '100px' : '100%',
                height: isMobile ? 'auto' : '100%',
                maxHeight: isMobile ? '140px' : 'auto',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </div>

          {/* Main Content */}
          <main
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              width: '100%',
              maxWidth: isMobile ? '100%' : '100%',
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

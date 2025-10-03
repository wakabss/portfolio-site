'use client';
import './globals.css';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            maxWidth: '1100px',
            margin: '2rem auto',
            padding: isMobile ? '1.5rem' : '2rem 3rem',
            gap: isMobile ? '2rem' : '4rem',
            boxSizing: 'border-box',
          }}
        >
          {/* Sidebar */}
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'row' : 'column',
              justifyContent: isMobile ? 'space-between' : 'flex-start',
              alignItems: 'flex-start',
              width: isMobile ? '100%' : '220px',
              flexShrink: 0,
              gap: isMobile ? '1rem' : '0',
            }}
          >
            {/* Left: Name + Nav */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Georgia, serif',
                fontSize: isMobile ? '15px' : '16px',
                gap: '0.4rem',
                flex: isMobile ? '1' : 'unset',
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
                wakaba<br />oto
              </h2>

              <a href="/" style={{ textDecoration: 'underline' }}>about</a>
              <a href="/reported" style={{ textDecoration: 'underline' }}>reported work</a>
              <a href="/creative" style={{ textDecoration: 'underline' }}>creative work</a>
              <a href="/contact" style={{ textDecoration: 'underline' }}>contact</a>
            </div>

            {/* Right: Image */}
            <img
              src="/subject4.png"
              alt="Portrait of Wakaba Oto"
              style={{
                width: isMobile ? '110px' : '100%',
                height: isMobile ? 'auto' : '100%',
                maxHeight: isMobile ? '160px' : '400px',
                objectFit: isMobile ? 'contain' : 'cover',
                borderRadius: '8px',
                alignSelf: isMobile ? 'flex-start' : 'flex-end',
                marginTop: isMobile ? '0.75rem' : '0',
              }}
            />
          </div>

          {/* Main Content */}
          <main
            style={{
              flex: 1,
              fontSize: '0.95rem',
              lineHeight: 1.7,
              width: '100%',
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

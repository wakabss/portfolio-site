'use client';
import './globals.css';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    handleResize(); // run on mount
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
            maxWidth: '100%',
            width: '100%',
            margin: '2rem auto',
            padding: isMobile ? '1.5rem' : '2rem 3rem',
            gap: isMobile ? '2rem' : '4rem',
            boxSizing: 'border-box',
          }}
        >
          {/* Sidebar */}
          <nav
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: isMobile ? '15px' : '16px',
              display: 'flex',
              flexDirection: isMobile ? 'row' : 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
              flexWrap: isMobile ? 'wrap' : 'nowrap',
              gap: isMobile ? '1rem' : '0',
            }}
          >
            {/* Text Section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <h2
                style={{
                  fontSize: isMobile ? '1.4rem' : '1.6rem',
                  fontWeight: 'bold',
                  lineHeight: 1.2,
                  marginBottom: isMobile ? 0 : '1.2rem',
                  textTransform: 'uppercase',
                  marginTop: 0,
                }}
              >
                WAKABA<br />OTO
              </h2>

              <a href="/" style={{ textDecoration: 'underline' }}>About</a>
              <a href="/reported" style={{ textDecoration: 'underline' }}>Reported Work</a>
              <a href="/creative" style={{ textDecoration: 'underline' }}>Creative Work</a>
              <a href="/contact" style={{ textDecoration: 'underline' }}>Contact</a>
            </div>

            {/* Image Section */}
            <img
              src="/subject4.png"
              alt="Portrait of Wakaba Oto"
              style={{
                marginTop: isMobile ? 0 : '1.5rem',
                width: isMobile ? '80px' : '100px',
                height: 'auto',
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
          </nav>

          {/* Main Content */}
          <main
            style={{
              flex: 1,
              width: '100%',
              maxWidth: isMobile ? '100%' : '700px',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              margin: '0 auto',
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

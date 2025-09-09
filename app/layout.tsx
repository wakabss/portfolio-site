'use client';
import './globals.css';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    handleResize();
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
            width: '100%',
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
              flexDirection: isMobile ? 'column' : 'column',
              alignItems: 'flex-start',
              flex: isMobile ? 'none' : '0 0 280px', // fixed width on desktop
              width: isMobile ? '100%' : '280px',
              gap: '1rem',
            }}
          >
            {/* Name + Nav */}
            <nav
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: isMobile ? '15px' : '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
              }}
            >
              <h2
                style={{
                  fontSize: isMobile ? '1.4rem' : '1.6rem',
                  fontWeight: 'bold',
                  lineHeight: 1.2,
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                WAKABA<br />OTO
              </h2>

              <a href="/" style={{ textDecoration: 'underline' }}>About</a>
              <a href="/reported" style={{ textDecoration: 'underline' }}>Reported Work</a>
              <a href="/creative" style={{ textDecoration: 'underline' }}>Creative Work</a>
              <a href="/contact" style={{ textDecoration: 'underline' }}>Contact</a>
            </nav>

            {/* Image that fills remaining sidebar height */}
            <img
              src="/subject4.png"
              alt="Portrait of Wakaba Oto"
              style={{
                width: '100%',
                height: isMobile ? 'auto' : '100%',
                objectFit: 'cover',
                borderRadius: '8px',
                flexGrow: 1,
              }}
            />
          </div>

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

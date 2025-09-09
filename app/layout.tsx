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
              flexDirection: 'column',
              alignItems: 'flex-start', // ← changed
              textAlign: 'left',        // ← changed
            }}
          >
            {/* Name */}
            <h2
              style={{
                fontSize: isMobile ? '1.4rem' : '1.6rem',
                fontWeight: 'bold',
                lineHeight: 1.2,
                marginBottom: '1.2rem',
                textTransform: 'uppercase',
              }}
            >
              WAKABA<br />OTO
            </h2>

            {/* Nav Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a href="/" style={{ textDecoration: 'underline' }}>About</a>
              <a href="/reported" style={{ textDecoration: 'underline' }}>Reported Work</a>
              <a href="/creative" style={{ textDecoration: 'underline' }}>Creative Work</a>
              <a href="/contact" style={{ textDecoration: 'underline' }}>Contact</a>
            </div>
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

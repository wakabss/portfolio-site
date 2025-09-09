import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: 'flex',
            maxWidth: '1000px',
            margin: '4rem auto',
            padding: '0 1.5rem',
            gap: '3rem',
          }}
        >
          {/* Left Sidebar */}
          <nav
            style={{
              flexBasis: '120px',
              flexShrink: 0,
              fontFamily: 'Georgia, serif',
              fontSize: '16px',
              display: 'flex',
              flexDirection: 'column',
              paddingTop: '0.5rem',
            }}
          >
            {/* Name */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h2
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 'bold',
                  lineHeight: 1.2,
                  margin: 0,
                  textTransform: 'uppercase',
                }}
              >
                WAKABA<br />OTO
              </h2>
            </div>

            {/* Navigation Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="/" style={{ textDecoration: 'underline' }}>
                About
              </a>
              <a href="/reported" style={{ textDecoration: 'underline' }}>
                Reported Work
              </a>
              <a href="/creative" style={{ textDecoration: 'underline' }}>
                Creative Work
              </a>
              <a href="/contact" style={{ textDecoration: 'underline' }}>
                Contact
              </a>
            </div>
          </nav>

          {/* Right Content */}
          <main
            style={{
              flex: 1,
              maxWidth: '720px',
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}


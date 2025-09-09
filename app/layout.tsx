import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{
          display: 'flex',
          maxWidth: '1000px',
          margin: '4rem auto',
          padding: '0 1.5rem',
          gap: '3rem',
        }}>
          {/* Left Side Nav */}
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            }}>
            WAKABA OTO
          </h2>
          <nav style={{
            flexBasis: '120px',
            flexShrink: 0,
            fontFamily: 'Georgia, serif',
            fontSize: '18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            paddingTop: '0.5rem',
          }}>
            <a href="/" style={{ textDecoration: 'underline' }}>About</a>
            <a href="/reported" style={{ textDecoration: 'underline' }}>Reported Work</a>
            <a href="/creative" style={{ textDecoration: 'underline' }}>Creative Work</a>
            <a href="/contact" style={{ textDecoration: 'underline' }}>Contact</a>
          </nav>

          {/* Right Side Content */}
          <main style={{
            flex: 1,
      
          }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

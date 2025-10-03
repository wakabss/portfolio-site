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
          <nav style={{
            minWidth: '160px',
            fontFamily: 'Georgia, serif',
            fontSize: '18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            paddingTop: '0.5rem',
          }}>
            <a href="/" style={{ textDecoration: 'underline' }}>About</a>
            <a href="/reported" style={{ textDecoration: 'underline' }}>Reported work</a>
            <a href="/creative" style={{ textDecoration: 'underline' }}>Creative work</a>
            <a href="/contact" style={{ textDecoration: 'underline' }}>Contact</a>
          </nav>

          {/* Right Side Content */}
          <main style={{
            flex: 1,
            maxWidth: '600px',
          }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

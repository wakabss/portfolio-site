export default function ContactPage() {
  return (
    <div
      style={{
        fontFamily: 'Helvetica, serif',
        backgroundColor: 'white',
        padding: '2rem',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>contact</h1>
      <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
        For pitches, commissions, or any interesting proposals.
      </p>
      <div style={{ fontSize: '1rem', lineHeight: 1.6 }}>
        <p style={{ color: "#999", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>email</p>
        <div style={{ marginBottom: "1.5rem" }}>
          <a href="mailto:wakaba.oto@engawa.global" style={{ textDecoration: "none", color: "inherit" }}>
            wakaba.oto@engawa.global
          </a>
        </div>
        <p style={{ color: "#999", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>instagram</p>
        <div>
          <a href="https://www.instagram.com/wakabss/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            @wakabss
          </a>
        </div>
      </div>
    </div>
  );
}

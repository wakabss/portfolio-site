export default function ContactPage() {
  return (
    <div style={{ fontFamily: 'Times New Roman, serif', backgroundColor: 'white', padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>contact</h1>

      <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        I’m always open to editorial projects, freelance writing, or creative collaborations. Feel free to reach out:
      </p>

      <div style={{ fontSize: '1rem', lineHeight: 2 }}>
        <p>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:wakaba.oto@engawa.global"
            style={{
              color: '#444',
              textDecoration: 'none',
              position: 'relative',
            }}
          >
            wakaba.oto@engawa.global
          </a>
        </p>

        <p>
          <strong>Instagram:</strong>{' '}
          <a
            href="https://www.instagram.com/wakabss/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#6b5b95', // muted lavender
              textDecoration: 'none',
              position: 'relative',
            }}
          >
            @wakabss
          </a>
        </p>
      </div>
    </div>
  );
}

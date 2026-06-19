export default function CreativePage() {
  return (
    <>
      <h1>creative and social</h1>

      {/* ── Essays ── */}
      <div style={{ fontSize: '1rem', lineHeight: 1.6 }}>
        <p style={{ color: "#999", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>essays & prose</p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "1.5rem" }}>
            <a
              href="https://panoramajournal.org/issues/issue-15-paris/paris-egg-salad-and-other-nudities/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Egg Salad and Other Nudities
            </a>
            <div style={{ fontSize: "0.9rem", color: "#555", marginTop: "0.3rem" }}>
              A short memoir on embodiment, nudity, and intimacy, set on a beach in Lanzarote.
            </div>
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            <a
              href="https://substack.com/home/post/p-187428897"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Arm Wrestling the Heavy Weight of Existence
            </a>
            <div style={{ fontSize: "0.9rem", color: "#555", marginTop: "0.3rem" }}>
              An essay on creative burnout and the pressures of late capitalism.
            </div>
          </li>
        </ul>
      </div>

      {/* ── Carousels ── */}
      <div style={{ marginTop: "2.5rem" }}>
        <p style={{ color: "#999", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>editorial carousels</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>

          <a href="https://www.instagram.com/p/DVi3OqwjEw5/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ width: "100%", aspectRatio: "1 / 1", backgroundColor: "#f0f0f0", overflow: "hidden", marginBottom: "0.6rem" }}>
              <img src="/tattoo.jpg" alt="Tattoo-Friendly Onsen" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ fontSize: "0.85rem" }}>Tattoo-Friendly Onsen</div>
            <div style={{ fontSize: "0.8rem", color: "#555" }}>Tokyo Misfits <span style={{ color: "#999" }}>· 242K+ views</span></div>
          </a>

          <a href="https://www.instagram.com/p/DZcovDsjqIY/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ width: "100%", aspectRatio: "1 / 1", backgroundColor: "#f0f0f0", overflow: "hidden", marginBottom: "0.6rem" }}>
              <img src="/lovehotels.jpg" alt="Tokyo's Love Hotels and the Death of Camp" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ fontSize: "0.85rem" }}>Tokyo&rsquo;s Love Hotels and the Death of Camp</div>
            <div style={{ fontSize: "0.8rem", color: "#555" }}>Tokyo Misfits <span style={{ color: "#999" }}>· 220K+ views</span></div>
          </a>

          <a href="https://www.instagram.com/p/DUdgwHME_Vz/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ width: "100%", aspectRatio: "1 / 1", backgroundColor: "#f0f0f0", overflow: "hidden", marginBottom: "0.6rem" }}>
              <img src="/zinchikurandan.jpg" alt="Zinchikurandan" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ fontSize: "0.85rem" }}>Zinchikurandan</div>
            <div style={{ fontSize: "0.8rem", color: "#555" }}>Tokyo Misfits <span style={{ color: "#999" }}>· 174K+ views</span></div>
          </a>

          <a href="https://www.instagram.com/p/DZsCHpujuFI/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ width: "100%", aspectRatio: "1 / 1", backgroundColor: "#f0f0f0", overflow: "hidden", marginBottom: "0.6rem" }}>
              <img src="/galismind.jpg" alt="Gal is Mind" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ fontSize: "0.85rem" }}>Gal is Mind</div>
            <div style={{ fontSize: "0.8rem", color: "#555" }}>Tokyo Misfits <span style={{ color: "#999" }}>· 81K+ views</span></div>
          </a>

        </div>
      </div>
    </>
  );
}

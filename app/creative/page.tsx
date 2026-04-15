export default function CreativePage() {
  return (
    <>
      <h1>creative work</h1>

      <div style={{ fontSize: '1rem', lineHeight: 1.6 }}>
        <p>Here’s a selection of my essays, memoirs, and fiction:</p>

        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "1.5rem" }}>
            <a
              href="https://panoramajournal.org/issues/issue-15-paris/paris-egg-salad-and-other-nudities/?srsltid=AfmBOooD5BWyRGEhiGzlHFKSm9tr2JBAZiTqVMmdFz1F_jdBGUswWbLY"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}

            >
              “Egg Salad and Other Nudities”
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
    </>
  );
}

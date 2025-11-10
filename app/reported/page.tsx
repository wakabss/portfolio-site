export default function ReportedPage() {
  const sections = [
    {
      title: "features",
      articles: [
        {
          title:
            "20 Questions with Edanoshin Katsura: ‘Rakugo and techno are both about rhythm and groove’",
          link: "https://www.japantimes.co.jp/community/2025/03/22/our-lives/edanoshin-katsura-z-rakugo/",
          source: "The Japan Times",
        },
        {
          title:
            "A Conversation With Tokyo Tattoo Artist Keisuke Hirata on Taboo, Acceptance and the In-Between",
          link: "https://www.tokyoweekender.com/art_and_culture/arts/conversation-with-tokyo-tattoo-artist-keisuke-hirata/",
          source: "Tokyo Weekender",
        },
        {
          title:
            "Inside Japan’s Most Exclusive Dating App: Tokyo Calendar Date",
          link: "https://www.tokyoweekender.com/japan-life/news-and-opinion/inside-japans-most-exclusive-dating-app-tokyo-calendar-date/",
          source: "Tokyo Weekender",
        },
      ],
    },
    {
      title: "politics",
      articles: [
        {
          title:
            "Sanseito, Explained: The Alarming Rise of Japan’s Far-Right Movement",
          link: "https://www.tokyoweekender.com/japan-life/news-and-opinion/sanseito-explained-japans-far-right-movement/",
          source: "Tokyo Weekender",
        },
        {
          title:
            "Japan’s Far-Right ‘Jokes’ About Forced Hysterectomies as Trump’s Authoritarian Playbook Goes Global",
          link: "https://msmagazine.com/2024/11/18/japan-conservative-birthrate-women-fiction-hysterectomy/",
          source: "Ms. magazine",
        },
      ],
    },
    {
      title: "travel",
      articles: [
        {
          title:
            "What Trekking to Machu Picchu Taught Me About Strength, Surrender, and the People Who Make It Possible",
          link: "https://matadornetwork.com/read/salkantay-trek-peru/",
          source: "Matador Network",
        },
        {
          title: "Japan’s Best Weekend Hikes (No Car Needed)",
          link: "https://www.tokyoweekender.com/travel/japans-best-weekend-hikes-no-car-needed/",
          source: "Tokyo Weekender",
        },
      ],
    },
  ];

  return (
    <div style={{ fontFamily: "Georgia, serif", maxWidth: "700px" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
        reported work
      </h1>

      {sections.map((section, i) => (
        <div key={i} style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#444",
              marginBottom: "1rem",
            }}
          >
            {section.title}
          </h2>

          {section.articles.map((article, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: "2rem",
                position: "relative",
                paddingBottom: "0.2rem",
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#111",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "inline-block",
                  lineHeight: 1.5,
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                {article.title}
              </a>
              <div
                style={{
                  fontStyle: "italic",
                  fontSize: "0.85rem",
                  color: "#555",
                  marginTop: "0.3rem",
                }}
              >
                ({article.source})
              </div>
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  fontSize: "0.85rem",
                  color: "#000",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
                className="read-more"
              >
                Read →
              </div>
            </div>
          ))}
        </div>
      ))}

      <style>
        {`
          div:hover > .read-more {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
}

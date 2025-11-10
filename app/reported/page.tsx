import { useState } from 'react';

const articles = {
  features: [
    {
      title: "20 Questions with Edanoshin Katsura: ‘Rakugo and techno are both about rhythm and groove’",
      url: "https://www.japantimes.co.jp/community/2025/03/22/our-lives/edanoshin-katsura-z-rakugo/",
      pub: "The Japan Times",
    },
    {
      title: "A Conversation With Tokyo Tattoo Artist Keisuke Hirata on Taboo, Acceptance and the In-Between",
      url: "https://www.tokyoweekender.com/art_and_culture/arts/conversation-with-tokyo-tattoo-artist-keisuke-hirata/",
      pub: "Tokyo Weekender",
    },
    {
      title: "Inside Japan’s Most Exclusive Dating App: Tokyo Calendar Date",
      url: "https://www.tokyoweekender.com/japan-life/news-and-opinion/inside-japans-most-exclusive-dating-app-tokyo-calendar-date/",
      pub: "Tokyo Weekender",
    },
  ],
  politics: [
    {
      title: "Sanseito, Explained: The Alarming Rise of Japan’s Far-Right Movement",
      url: "https://www.tokyoweekender.com/japan-life/news-and-opinion/sanseito-explained-japans-far-right-movement/",
      pub: "Tokyo Weekender",
    },
    {
      title: "Japan’s Far-Right ‘Jokes’ About Forced Hysterectomies as Trump’s Authoritarian Playbook Goes Global",
      url: "https://msmagazine.com/2024/11/18/japan-conservative-birthrate-women-fiction-hysterectomy/",
      pub: "Ms. Magazine",
    },
  ],
  travel: [
    {
      title: "What Trekking to Machu Picchu Taught Me About Strength, Surrender, and the People Who Make It Possible",
      url: "https://matadornetwork.com/read/salkantay-trek-peru/",
      pub: "Matador Network",
    },
    {
      title: "Japan’s Best Weekend Hikes (No Car Needed)",
      url: "https://www.tokyoweekender.com/travel/japans-best-weekend-hikes-no-car-needed/",
      pub: "Tokyo Weekender",
    },
  ],
};

const Accordion = ({ label, items }: { label: string; items: any[] }) => {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          fontSize: '1.3rem',
          fontWeight: 'bold',
          fontFamily: 'Georgia, serif',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          marginBottom: '0.5rem',
        }}
      >
        {label} {open ? '−' : '+'}
      </button>

      {open && (
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {items.map(({ title, url, pub }, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  color: '#222',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                {title}
                <span style={{ fontStyle: 'italic', fontSize: '0.85rem', color: '#555' }}>
                  {' '}({pub})
                </span>
                <span
                  className="read-arrow"
                  style={{
                    marginLeft: '0.5rem',
                    fontSize: '0.9rem',
                    opacity: 0,
                    transition: 'opacity 0.2s ease-in',
                  }}
                >
                  → Read
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function ReportedPage() {
  return (
    <div style={{ fontFamily: 'Georgia, serif', padding: '1rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>reported work</h1>
      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        Here’s a selection of my reported work:
      </p>

      <Accordion label="features" items={articles.features} />
      <Accordion label="politics" items={articles.politics} />
      <Accordion label="travel" items={articles.travel} />

      <style>{`
        a:hover .read-arrow {
          opacity: 1;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

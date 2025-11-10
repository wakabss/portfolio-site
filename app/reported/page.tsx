export default function ReportedPage() {
  return (
    <div
      style={{
        fontFamily: 'Times New Roman, serif',
        backgroundColor: 'white',
        padding: '2rem',
        maxWidth: '700px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>reported work</h1>

      <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
        Here’s a selection of my reported work:
      </p>

      {[
        {
          title: 'features',
          items: [
            {
              text: `20 Questions with Edanoshin Katsura: ‘Rakugo and techno are both about rhythm and groove’`,
              href: 'https://www.japantimes.co.jp/community/2025/03/22/our-lives/edanoshin-katsura-z-rakugo/',
              source: 'The Japan Times',
              color: 'black',
              italic: true,
            },
            {
              text: 'A Conversation With Tokyo Tattoo Artist Keisuke Hirata on Taboo, Acceptance and the In-Between',
              href: 'https://www.tokyoweekender.com/art_and_culture/arts/conversation-with-tokyo-tattoo-artist-keisuke-hirata/',
              source: 'Tokyo Weekender',
              color: 'deepskyblue',
              italic: true,
            },
            {
              text: 'Inside Japan’s Most Exclusive Dating App: Tokyo Calendar Date',
              href: 'https://www.tokyoweekender.com/japan-life/news-and-opinion/inside-japans-most-exclusive-dating-app-tokyo-calendar-date/',
              source: 'Tokyo Weekender',
              color: 'deepskyblue',
              italic: true,
            },
          ],
        },
        {
          title: 'politics',
          items: [
            {
              text: 'Sanseito, Explained: The Alarming Rise of Japan’s Far-Right Movement',
              href: 'https://www.tokyoweekender.com/japan-life/news-and-opinion/sanseito-explained-japans-far-right-movement/',
              source: 'Tokyo Weekender',
              color: 'deepskyblue',
              italic: true,
            },
            {
              text: 'Japan’s Far-Right ‘Jokes’ About Forced Hysterectomies as Trump’s Authoritarian Playbook Goes Global',
              href: 'https://msmagazine.com/2024/11/18/japan-conservative-birthrate-women-fiction-hysterectomy/',
              source: 'Ms. magazine',
              color: 'deeppink',
              italic: true,
            },
          ],
        },
        {
          title: 'travel',
          items: [
            {
              text: 'What Trekking to Machu Picchu Taught Me About Strength, Surrender, and the People Who Make It Possible',
              href: 'https://matadornetwork.com/read/salkantay-trek-peru/',
              source: 'Matador Network',
              color: 'mediumseagreen',
              italic: true,
            },
            {
              text: 'Japan’s Best Weekend Hikes (No Car Needed)',
              href: 'https://www.tokyoweekender.com/travel/japans-best-weekend-hikes-no-car-needed/',
              source: 'Tokyo Weekender',
              color: 'deepskyblue',
              italic: true,
            },
          ],
        },
      ].map((section) => (
        <div key={section.title} style={{ marginBottom: '2rem' }}>
          <h2
            style={{
              borderBottom: '1px solid #ccc',
              paddingBottom: '0.3rem',
              fontSize: '1.2rem',
              marginBottom: '1rem',
              textTransform: 'lowercase',
            }}
          >
            {section.title}
          </h2>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {section.items.map((item, index) => (
              <li key={index} style={{ marginBottom: '1rem' }}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: '#333',
                    transition: 'text-decoration 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecoration = 'none';
                  }}
                >
                  {item.text}{' '}
                  <span style={{ color: item.color, fontStyle: item.italic ? 'italic' : 'normal' }}>
                    ({item.source})
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

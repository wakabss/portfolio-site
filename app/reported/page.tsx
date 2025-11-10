export default function ReportedPage() {
  return (
    <>
      <h1>reported work</h1>

      <div style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
        <p>Here’s a selection of my reported work:</p>

        <h2 style={{ marginTop: '1.5rem' }}>features</h2>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li>
            <a
              className="reported-link"
              href="https://www.japantimes.co.jp/community/2025/03/22/our-lives/edanoshin-katsura-z-rakugo/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'black' }}
            >
              20 Questions with Edanoshin Katsura: ‘Rakugo and techno are both about rhythm and groove’<br />
              <em>(The Japan Times)</em>
            </a>
          </li>
          <li>
            <a
              className="reported-link"
              href="https://www.tokyoweekender.com/art_and_culture/arts/conversation-with-tokyo-tattoo-artist-keisuke-hirata/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'deepskyblue' }}
            >
              A Conversation With Tokyo Tattoo Artist Keisuke Hirata on Taboo, Acceptance and the In-Between<br />
              <em>(Tokyo Weekender)</em>
            </a>
          </li>
          <li>
            <a
              className="reported-link"
              href="https://www.tokyoweekender.com/japan-life/news-and-opinion/inside-japans-most-exclusive-dating-app-tokyo-calendar-date/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'deepskyblue' }}
            >
              Inside Japan’s Most Exclusive Dating App: Tokyo Calendar Date<br />
              <em>(Tokyo Weekender)</em>
            </a>
          </li>
        </ul>

        <h2 style={{ marginTop: '1.5rem' }}>politics</h2>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li>
            <a
              className="reported-link"
              href="https://www.tokyoweekender.com/japan-life/news-and-opinion/sanseito-explained-japans-far-right-movement/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'deepskyblue' }}
            >
              Sanseito, Explained: The Alarming Rise of Japan’s Far-Right Movement<br />
              <em>(Tokyo Weekender)</em>
            </a>
          </li>
          <li>
            <a
              className="reported-link"
              href="https://msmagazine.com/2024/11/18/japan-conservative-birthrate-women-fiction-hysterectomy/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'deeppink' }}
            >
              Japan’s Far-Right ‘Jokes’ About Forced Hysterectomies as Trump’s Authoritarian Playbook Goes Global<br />
              <em>(Ms. magazine)</em>
            </a>
          </li>
        </ul>

        <h2 style={{ marginTop: '1.5rem' }}>travel</h2>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li>
            <a
              className="reported-link"
              href="https://matadornetwork.com/read/salkantay-trek-peru/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'mediumseagreen' }}
            >
              What Trekking to Machu Picchu Taught Me About Strength, Surrender, and the People Who Make It Possible<br />
              <em>(Matador Network)</em>
            </a>
          </li>
          <li>
            <a
              className="reported-link"
              href="https://www.tokyoweekender.com/travel/japans-best-weekend-hikes-no-car-needed/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'deepskyblue' }}
            >
              Japan’s Best Weekend Hikes (No Car Needed)<br />
              <em>(Tokyo Weekender)</em>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

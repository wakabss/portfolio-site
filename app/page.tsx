export default function AboutPage() {
  return (
    <>
      <h1
        style={{
          fontSize: "1.6rem",
          fontFamily: "Helvetica, serif",
          marginBottom: "1.5rem",
        }}
      >
        about
      </h1>

      <div
        style={{
          fontSize: "1rem",
          lineHeight: "1.75",
          fontFamily: "Helvetica, serif",
          backgroundColor: "white",
          color: "#111",
        }}
      >
        <p>
          I'm a journalist and editor based in Tokyo and New York City, currently serving as travel editor at <em>Tokyo Weekender</em>. Before that, I founded and led the web magazine at
          {" "}
    <a
  href="https://www.tokyomisfits.com/"
  style={{
    textDecoration: "underline",
    color: "#c77dff",
    fontWeight: "bold",
  }}
>
  Tokyo Misfits.
    </a>
                {" "}
          My work has appeared in
          {" "}
          <a
            href="https://www.tokyoweekender.com/author/wakaba/"
            style={{
              textDecoration: "underline",
              color: "#74b9ff",
              fontWeight: "bold",
            }}
          >
            <em>Tokyo Weekender</em>
          </a>
          ,{" "}
          <a
            href="https://www.japantimes.co.jp/author/6522/wakaba-oto/"
            style={{
              textDecoration: "underline",
              color: "#ffe150",
              fontWeight: "bold",
            }}
          >
            <em>The Japan Times</em>
          </a>
          ,{" "}
          <a
            href="https://matadornetwork.com/author/wotofordham-edu/"
            style={{
              textDecoration: "underline",
              color: "#93e5ab",
              fontWeight: "bold",
            }}
          >
            <em>Matador Network</em>
          </a>
          ,{" "}
          <a
            href="https://msmagazine.com/author/woto/"
            style={{
              textDecoration: "underline",
              color: "deeppink",
              fontWeight: "bold",
            }}
          >
            <em>Ms. magazine</em>
          </a> {" "}
           and elsewhere. I write mostly about culture, subculture, travel and the outdoors.
        </p>

        <p>
          For{" "}
          <em>Tokyo Weekender</em>, I've written about{" "}
          <a
            href="https://www.tokyoweekender.com/art_and_culture/design/conversation-with-tokyo-tattoo-artist-keisuke-hirata/"
            style={{ textDecoration: "underline", color: "#9f85ff" }}
          >
            tattoo artists
          </a>
          ,{" "}
          <a
            href="https://www.tokyoweekender.com/travel/japan-mountain-huts-hiking-japanese-alps/"
            style={{ textDecoration: "underline", color: "#06b178" }}
          >
            mountain huts
          </a> 
          ,{" "}
          <a
            href="https://www.tokyoweekender.com/japan-life/news-and-opinion/nuisance-youtuber-elected-to-european-parliament/"
            style={{ textDecoration: "underline", color: "#74b9ff" }}
          >
            rogue tourists
          </a>
          ,{" "}
          <a
            href="https://www.tokyoweekender.com/japan-life/news-and-opinion/how-tokyos-host-clubs-drive-clients-into-sex-work/"
            style={{ textDecoration: "underline", color: "deeppink" }}
          >
            sex work
          </a>
          ,{" "}
          <a
            href="https://www.tokyoweekender.com/japan-life/news-and-opinion/logan-paul-wants-to-be-welcomed-back-to-japan/"
            style={{ textDecoration: "underline", color: "#ffe150" }}
          >
            Logan Paul
          </a>
          , and{" "}
          <a
            href="https://www.tokyoweekender.com/japan-life/news-and-opinion/graffiti-at-yasukuni-shrine-reignites-tensions/"
            style={{ textDecoration: "underline", color: "#c77dff" }}
          >
            wartime politics
          </a>
          .
        </p>

        <p>
          For <em>Ms.</em> magazine, I ran a{" "}
          <a
            href="https://msmagazine.com/tag/ms-global/"
            style={{ textDecoration: "underline", color: "deeppink" }}
          >
            column
          </a>{" "}
          on global feminist movements and reported on issues like{" "}
          <a
            href="https://msmagazine.com/2024/02/15/over-the-counter-birth-control-cost/"
            style={{ textDecoration: "underline", color: "#ffe150" }}
          >
            birth control access
          </a> and
          {" "}
          <a
            href="https://msmagazine.com/2024/11/18/japan-conservative-birthrate-women-fiction-hysterectomy/"
            style={{ textDecoration: "underline", color: "#7AE2CF" }}
          >
            the politics of misogyny.
          </a> 
        </p>

      <p>
  I also like to write essays and fiction. Recent work has appeared in{" "}
  <a href="https://sonorareview.com/2026/05/22/in-the-space-between-ferries-wakaba-oto/" style={{ textDecoration: "underline", color: "#74b9ff", fontWeight: "bold" }}>
    <em>Sonora Review</em>
  </a>{" "}
  and{" "}
  <a href="https://panoramajournal.org/issues/issue-15-paris/paris-egg-salad-and-other-nudities/" style={{ textDecoration: "underline", color: "#93e5ab", fontWeight: "bold" }}>
    <em>Panorama Journal</em>
  </a>
  .
</p>

        <p>
          I do travel writing too, which is a fancy way of
          saying I'll go anywhere. I've flown to Morocco to meet a stranger for a first date,
          gone undercover as a hostess in Tokyo's red-light district, and completed a seven-day trek to{" "}
          <a
            href="https://matadornetwork.com/read/salkantay-trek-peru/"
            style={{ textDecoration: "underline", color: "mediumseagreen" }}
          >
            Machu Picchu
          </a>{" "}
          — all in the name of a good story.
        </p>


      </div>
    </>
  );
}

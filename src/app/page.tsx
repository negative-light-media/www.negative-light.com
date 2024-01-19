import Image from "next/image";
import discord from "src/img/discord.svg";
import nlm from "src/img/favicon.png";
import linktree from "src/img/linktree.svg";

import { cache } from "react";
import github_logo from "src/img/github-mark-white.svg";
import { getContributors } from "./utils";
import Link from "next/link";

async function Home() {
  const contributors = await getContributors();
  var contributorNames = "";
  const iconSize = 32;
  const kofi = `<script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
<script>
  kofiWidgetOverlay.draw('negative_light', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support me',
    'floating-chat.donateButton.background-color': '#794bc4',
    'floating-chat.donateButton.text-color': '#fff'
  });
</script>`;
  return (
    <>
      <head>
        <meta name="author" content="Negative-light"></meta>
        <meta name="publisher" content="Negative-light-media"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Official page for Negative Light Socials"
        />
        <meta
          name="keywords"
          content="NLM, media, negative-light, Negative_light, Minecraft, Youtube, Programming, Mods, modding"
        />
        <meta charSet="UTF-8"></meta>

        <link rel="icon" type="image/x-icon" href="img/favicon.png" />

        <script
          src="https://kit.fontawesome.com/d2e2e7ec8f.js"
          crossOrigin="anonymous"
        ></script>

        <title>negative-light.com</title>
      </head>
      <body>
        <div className="metabuilder">
          <table>
            <tbody>
              {contributors.map((contributor) => (
                <tr
                  key={
                    (contributorNames =
                      contributorNames + contributor.login + ", ")
                  }
                ></tr>
              ))}
            </tbody>
          </table>
        </div>

        <meta name="contributors" content={contributorNames} />

        <center>
          <header>
            <h2>Negative Light</h2>
          </header>
          <div className="container">
            <div>
              <h3>Socials</h3>
              <div>
                <a
                  href="https://www.youtube.com/@Negative_Light"
                  className="toplia"
                >
                  <span className="fa fa-youtube fa-2xl" />
                  <span className="socialName">YouTube</span>
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/NegativeLight"
                  className="middlelia"
                >
                  <span className="fa-brands fa-x-twitter fa-2xl" />
                  <span className="socialName">Twitter</span>
                </a>
              </div>
              <div>
                <a href="https://rumble.com/c/c-1417236" className="bottomlia">
                  <span className="fa-solid fa-play fa-2xl" />
                  <span className="socialName">Rumble</span>
                </a>
              </div>
            </div>

            <div>
              <h3>Community</h3>
              <ul>
                <li>
                  <a href="/about" className="fa-solid fa-book fa-2xl"></a>
                  About NLM
                </li>
                <li>
                  <a
                    href="https://discord.gg/CD8e5avNtn"
                    className="fa-brands fa-discord fa-2xl"
                  ></a>
                  Discord
                </li>
                <li>
                  <a
                    href="https://steamcommunity.com/groups/negaitve-light"
                    className="fa-brands fa-steam fa-2xl"
                  />
                  Steam Group
                </li>
                <li>
                  <a href="https://modrinth.com/organization/negative_light-media" />
                  Modrinth
                </li>
              </ul>
            </div>
          </div>

          <footer>
            <article>
              <h4>This website is under construction</h4>
              <h4>
                Thank you to our{" "}
                <a href="/contributors">
                  <u>Contributors</u>
                </a>{" "}
              </h4>
              <p>
                <sub>
                  Check our github for details{" "}
                  <a href="https://github.com/negative-light-media/www.negative-light.com">
                    <u color="blue">here</u>
                  </a>
                </sub>
              </p>
            </article>
          </footer>
        </center>
        <div dangerouslySetInnerHTML={{ __html: kofi }} />
      </body>
    </>
  );
}
export default Home;

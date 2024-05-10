import Image from "next/image";
import nlm from "src/img/favicon.png";
import { getContributors } from "./utils";
const websites = [
  {
    name: "Discord",
    link: "https://discord.gg/CD8e5avNtn",
    image: "src/img/discord.svg",
  },
  { name: "about", link: "/about", image: nlm },
  {
    name: "Youtube",
    link: "https://www.youtube.com/c/NegativeLight",
    image: nlm,
  },
  { name: "Twitter/X", link: "https://twitter.com/NegativeLight" },
  { name: "Rumble", link: "https://rumble.com/c/c-1417236" },
  { name: "KoFi", link: "https://ko-fi.com/negative_light" },
  { name: "Negative Light Media", link: "/negative-light-media" },
];

function buildLinksList() {
  return (
    <ul>
      {websites.map((item) => (
        <li key={item.name} className="linksList">
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}

async function Home() {
  const contributors = await getContributors();
  var contributorNames = "";
  return (
    <main>
      <center>
        <header>
          <h2>
            <u>Negative Light</u>
          </h2>
        </header>
        <div className="container">{buildLinksList()}</div>
        <footer>
          <article>
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
    </main>
  );
  return (
    <>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta charSet="UTF-8"></meta>
        <link rel="icon" type="image/x-icon" href="img/favicon.png"></link>
        <meta
          name="description"
          content="Official page for Negative Light Media "
        ></meta>
        <meta
          name="keywords"
          content="NLM, media, negative-light, Negative_light, Minecraft, Youtube, Programming, Mods, modding"
        ></meta>
        <meta name="author" content="Negative-light"></meta>
        <meta name="publisher" content="Negative-light-media"></meta>
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
      </body>
    </>
  );
}
export default Home;

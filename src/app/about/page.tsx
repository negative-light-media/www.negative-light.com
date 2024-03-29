import Image from 'next/image'
import { Octokit } from "octokit";
import github_logo from 'src/img/github-mark-white.svg'
import { getContributors } from '../utils';

async function Home(){
  const contributors = await getContributors();
  var contributorNames = "";

  return (
  <>
  <head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta charSet="UTF-8"/>
<link rel="icon" type="image/x-icon" href="img/favicon.png"/>
<meta name="description" content="Official page for Negative Light Media "/>
<meta name="keywords" content="NLM, media, negative-light, Negative_light, Minecraft, Youtube, Programming, Mods, modding"/>
<meta name="author" content="Negative-light"/>
<meta name="publisher" content="Negative-light-media"/>
<title>negative-light.com</title>
</head>
<body>
<div className="metabuilder">
			<table>
			<tbody>
			{contributors.map(contributor => ((
			

			<tr key={contributorNames = contributorNames + contributor.login + ", "}></tr>

			)))}
			</tbody>
			</table>
			</div>

			<meta name="contributors" content={contributorNames} />

<center>
  <header>
    <h2><u>Negative Light Media - About</u></h2>
  </header>
  <div className="container">
<article><p>Negative Light Media (NLM) is the Media company started by Content Creator Negative_light.
Our goal is to create things in a strong community, from assets used in videos, to Minecraft Mods, to Content Creator tools we want our code to help others pursue successs.
NLM provides a place for developers to directly interact with Negaitve_light and help him in productions and for some projects might allow them to get contacts or support from NLM.
Ultimatly NLM is what happens when you get a software development company trying that is built on the back of content creation.
This means that our focus might be on getting videos out the door, but we also want to build a strong community of developers so your contributions are welcome.
If you are curious about joining NLM a good first place is our discord so that you can get to know us and the team involved.</p></article>
</div>
<footer>
    <article>
             <h4>This website is under construction</h4>
	  <h4>Thank you to our <a href='/contributors'><u>Contributors</u></a></h4>
      <p><sub>Check our github for details <a href="https://github.com/negative-light-media/www.negative-light.com"><u color="blue">here</u></a></sub></p>
    </article>
  </footer>
</center>
</body>
  </>
  );
}
  export default Home;
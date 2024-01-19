import Image from 'next/image'
import discord from 'src/img/discord.svg'
import nlm from 'src/img/favicon.png'
import linktree from'src/img/linktree.svg'


import { cache } from 'react'
import github_logo from 'src/img/github-mark-white.svg'
import { getContributors } from './utils'

async function Home() {
  const contributors = await getContributors();
  var contributorNames = "";


  return (
  <>
<head>

<meta name="viewport" content="width=device-width, initial-scale=1" ></meta>
<meta charSet="UTF-8"></meta>
<link rel="icon" type="image/x-icon" href="img/favicon.png"></link>
<meta name="description" content="Official page for Negative Light Media "></meta>
<meta name="keywords" content="NLM, media, negative-light, Negative_light, Minecraft, Youtube, Programming, Mods, modding"></meta>
<meta name="author" content="Negative-light"></meta>
<meta name="publisher" content="Negative-light-media"></meta>
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
    <h2><u>Negative Light</u></h2>
  </header>
  <div className="container">
    <ul>
    <li><a href="/"className="toplia">&#8962; <br/> Home</a></li>
    <li><a href="https://discord.gg/CD8e5avNtn"className="middlelia"><sub><Image src={discord} width ={16} height ={16} alt="discord"></Image></sub> Discord</a></li>
    <li><a href="mailto: code@negative-light.com" className="middlelia"><b>@</b><br/> Contact Email</a></li>
    <li><a href="/about" className="middlelia"><sub><Image src={nlm} width ={16} height ={16} alt="aboutnlm"></Image></sub> About NLM</a></li>
    <li><a href="https://linktr.ee/Negative_light" className="bottomlia"><sub><Image src={linktree} width ={16} height ={16} alt="linktree"></Image></sub> Linktree</a></li>
    </ul>
  </div>
  <footer>
    <article>
              <h4>This website is under construction</h4>
			  <h4>Thank you to our <a href='/contributors'><u>Contributors</u></a> </h4>
              <p><sub>Check our github for details <a href="https://github.com/negative-light-media/www.negative-light.com"><u color="blue">here</u></a></sub></p>
              
      </article>
  </footer>
</center>
</body>
</>
  );
}
export default Home;

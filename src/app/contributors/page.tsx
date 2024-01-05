import { Octokit } from "octokit";
import Image from "next/image";
import github_logo from 'src/img/github-mark-white.svg'

async function getContributorsWeb() {
    const token = process.env.GITHUB_TOKEN
    const octokit = new Octokit({
        auth: token
    })

    const response = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
        owner: "negative-light-media",
        repo: 'www.negative-light.com',
    })


    return response.data
}



async function Home() {
    
    //const data = contributorTable.match(/<sub><b>(.*)<\/b>/g)
    const contributors = await getContributorsWeb()
    const profile_size = 128
	var metavar = []
    return (
        <>
            <head>
			
			
                <meta name="viewport" content="width-device-width, initial-scale-1" />
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/x-icon" href="img/favicon.png" />
                <meta name="description" content="Contributors List for Negative Light Media " />
				
                <meta name="keywords" content="NLM, media, negative-light, Negative_light, Minecraft, Youtube, Programming, Mods, modding" />
                <meta name="author" content="Negative-light" />
                
                <meta name="publisher" content="Negative-light-media" />
                <title>negative-light.com</title>
				
            </head>
            <body>
			<div className="metabuilder">
			<table>
			<tbody>
			{contributors.map(contributor => ((
			
			
			<tr key={metavar = metavar + contributor.login + ", "}></tr>
			
		
			
			)))}
			</tbody>
			</table>
			</div>
			<meta name="contributors" content={metavar} />
                <center>
                    <header>
                        <h2><u>negative-light website Contributors</u></h2>
                        
                    </header>
                    <h1>A Special Thanks to our {contributors.length} Contributors</h1>
					<h2>Join the <a href=""><u color="blue">github</u></a> to be on the Contributors page</h2>
                    <div className="container">
                        
                        <br />
                        <table width={50 + '%'}>
                            <tbody>
                            {contributors.map(contributor => ((
                                <tr key={contributor.login}>
									
                                    <td align="center">
                                        <Image src={contributor.avatar_url} width={profile_size} height={profile_size} alt={contributor.login + "Profile Picture"}></Image>
                                    </td>
                                    <td align="center">{contributor.login}</td>
                                    <td align="center">{contributor.contributions}</td>
                                    <td align="center">
                                        <a href={contributor.html_url}>
                                            <Image src={github_logo} width={profile_size} height={profile_size} alt={contributor.login + "Profile Github"}></Image>
                                        </a>
										
                                    </td>
                                </tr>
                            )))}
                            </tbody>
                        </table>
                        
                    </div>
                    <footer>
                        <article>
										

                            <h4>This website is under construction</h4>
							<h4><a href="/">Back to Homepage</a></h4>
                            
							
                        </article>
                    </footer>
                </center>
            </body>
            
        </>
    );
}
export default Home;
import { type } from "os"

const fs = require("fs")

function getContributorsTable() {
    const readmeFile = fs.readFileSync("README.md", 'utf8')
    const tableStart = '<!-- readme: contributors -start -->'
    const tableEnd = '<!-- readme: contributors -end -->'

    const start = readmeFile.indexOf(tableStart)
    const end = readmeFile.indexOf(tableEnd)

    return readmeFile.substring(start + tableStart.length, end).trim()
}

function Home() {
    const contributorTable = getContributorsTable()
    console.log(contributorTable)
    return (
        <>
            <head>
                <meta name="viewport" content="width-device-width, initial-scale-1" />
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/x-icon" href="img/favicon.png" />
                <meta name="description" content="Contributors List for Negative Light Media " />
                <meta name="keywords" content="NLM, media, negative-light, Negative_light, Minecraft, Youtube, Programming, Mods, modding" />
                <meta name="author" content="Negative-light" />
                <meta name="contributors" content="sourabh1111111, crazysmile11012" />
                <meta name="publisher" content="Negative-light-media" />
                <title>negative-light.com</title>
            </head>
            <body>
                <center>
                    <header>
                        <h2><u>Contributors</u></h2>
                        <sub><a href="/">Home</a></sub>
                    </header>
                
                    <div className="container">
                        <ul>
                        <br/>
                        <li>Special Thanks to our Contributors</li>
                        {contributorTable ? <div dangerouslySetInnerHTML={{ __html: contributorTable }} /> :
                                <span>
                                    Contributors Now Found please create an issue on our <a href="https://github.com/negative-light-media/www.negative-light.com/issues">github</a> </span>
                            }
                            
                        </ul>
                    </div>
                    <footer>
                        <article>
                            <h4>This website is under construction</h4>
                            <p><sub>Check our github for details <a href="https://github.com/negative-light-media/www.negative-light.com"><u color="blue">here</u></a></sub></p>

                        </article>
                    </footer>
                </center>
            </body>
            
        </>
    );
}
export default Home;
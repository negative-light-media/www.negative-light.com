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
    return <head>
        <meta charSet="UTF-8"/>
        <link rel="icon" type="image/x-icon" href="img/favicon.png"/>
        <meta name="description" content="Official page for Negative Light Media "/>
        <meta name="keywords" content="NLM, media, negative-light, Negative_light, Minecraft, Youtube, Programming, Mods, modding"/>
        <meta name="author" content="Negative-light"/>
        <meta name="contributors" content="sourabh1111111, crazysmile11012"/>
        <meta name="publisher" content="Negative-light-media"/>
        <title>negative-light.com</title>
        <body>
            <p>Hello There</p>
            <div>
                { contributorTable }
            </div>
        </body>
    </head>
}
export default Home;
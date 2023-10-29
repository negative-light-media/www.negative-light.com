import axios from 'axios';
import { debug } from 'console';
import React, { useEffect, useState } from 'react';

async function getContributors(owner: string, repoName:string, page = 1) {
    let request = await fetch('https://api.github.com/repos/${owner}/${repoName}/contributors?per_page=100&page=${page}', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    let contributorsList = await request.json();
    return contributorsList;
}


async function getAlllContributors(owner: string, repoName: string) {
    let contributors = [];
    let page = 1;
    do {
        list = await getContributors(owner, repoName, page);
        contributors = contributors.concat(list);
        page++;
    } while (list.length > 0);
    
    return contributors;
    
}

async function Home() {
    const contributors = await getContributors('negative-light-media', 'www.negative-light.com')
    debug(contributors)
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
        </body>
    </head>
}
export default Home;
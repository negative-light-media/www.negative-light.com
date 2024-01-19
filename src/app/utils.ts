import { cache } from "react";
import { Octokit } from "octokit";

export const getContributors = cache(
    async () => {
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
)
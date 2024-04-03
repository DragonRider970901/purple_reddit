export const root = "https://www.reddit.com";

const redirectUri = "http://www.violet.com/unused/redirect/uri";

const client_id = "ahJahgJKvuOlKt4m5tejilVbcf7kig";

const scopes = [];

export const getSubreddits = async () => {
    const response = await fetch(`${root}/subreddits.json`);
    const json = await response.json();
    console.log(json);
}

export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${root}${subreddit}.json`);
    const json = await response.json();

    return json.data.children.mao((post) => post.data);
}

export const getPostComments = async (permalink) => {
    const response = await fetch(`${root}${permalink}.json`);
    const json = await response.json();

    return json[1].data.children.map((subreddit) => subreddit.data);
}